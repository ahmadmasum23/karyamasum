"use client";

import useSWR from "swr";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import ChatAuth from "./ChatAuth";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatItemSkeleton from "./ChatItemSkeleton";

import { MessageProps } from "@/common/types/chat";
import { fetcher } from "@/services/fetcher";
import { createClient } from "@/common/utils/client";
import useNotif from "@/hooks/useNotif";

export const ChatRoom = ({ isWidget = false }: { isWidget?: boolean }) => {
  const { data, isLoading, mutate } = useSWR("/api/chat", fetcher);

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isReply, setIsReply] = useState({ is_reply: false, name: "" });

  const { data: session } = useSession();

  const supabase = createClient();

  const notif = useNotif();

  const handleClickReply = (name: string) => {
    if (!session?.user) return notif("Please sign in to reply");
    setIsReply({ is_reply: true, name });
  };

  const handleCancelReply = () => {
    setIsReply({ is_reply: false, name: "" });
  };

  const handleSendMessage = async (message: string) => {
    const messageId = uuidv4();
    const newMessageData: MessageProps = {
      id: messageId,
      name: session?.user?.name ?? "",
      email: session?.user?.email ?? "",
      image: session?.user?.image ?? "",
      message,
      is_reply: isReply.is_reply,
      reply_to: isReply.name,
      is_show: true,
      created_at: new Date().toISOString(),
    };

    // Optimistic update: tampilkan pesan langsung di UI sebelum API selesai
    setMessages((prev) => [...prev, newMessageData]);
    handleCancelReply();

    try {
      await axios.post("/api/chat", newMessageData);
      notif("Successfully to send message");
      // Revalidasi SWR agar data tetap sinkron dengan database
      mutate();
    } catch (error) {
      console.error("Error:", error);
      notif("Failed to send message");
      // Rollback: hapus pesan optimistic jika API gagal
      setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    }
  };

  const handleDeleteMessage = async (id: string) => {
    try {
      await axios.delete(`/api/chat/${id}`);
      notif("Successfully to delete message");
    } catch (error) {
      notif("Failed to delete message");
    }
  };

  useEffect(() => {
    if (Array.isArray(data)) setMessages(data);
  }, [data]);

  useEffect(() => {
    const channel = supabase
      .channel("realtime chat")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prevMessages) => {
            // Cegah duplikat: jika pesan sudah ada dari optimistic update, skip
            const exists = prevMessages.some(
              (msg) => msg.id === (payload.new as MessageProps).id,
            );
            if (exists) return prevMessages;
            return [...prevMessages, payload.new as MessageProps];
          });
        },
      )
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prevMessages) =>
            prevMessages.filter((msg) => msg.id !== payload.old.id),
          );
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <>
      {isLoading ? (
        <ChatItemSkeleton />
      ) : (
        <ChatList
          messages={messages}
          onDeleteMessage={handleDeleteMessage}
          onClickReply={handleClickReply}
          isWidget={isWidget}
        />
      )}
      {session ? (
        <ChatInput
          onSendMessage={handleSendMessage}
          onCancelReply={handleCancelReply}
          replyName={isReply.name}
          isWidget={isWidget}
        />
      ) : (
        <ChatAuth isWidget={isWidget} />
      )}
    </>
  );
};
