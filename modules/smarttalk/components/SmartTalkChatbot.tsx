"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  IoSend,
  IoPersonCircle,
  IoSparkles,
} from "react-icons/io5";
import clsx from "clsx";

import Container from "@/common/components/elements/Container";
import SpotlightCard from "@/common/components/elements/SpotlightCard";
import Button from "@/common/components/elements/Button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const SmartTalkChatbot = () => {
  const t = useTranslations("SmartTalkPage");
  const locale = useLocale();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: t("welcome_message"),
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Update welcome message when locale changes
  useEffect(() => {
    setMessages((prevMessages) => {
      // Keep other messages, only update the welcome message
      const otherMessages = prevMessages.filter((msg) => msg.id !== "welcome");
      return [
        {
          id: "welcome",
          text: t("welcome_message"),
          sender: "ai",
          timestamp: new Date(),
        },
        ...otherMessages,
      ];
    });
  }, [locale, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage.trim() }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: t("error_message") || "Sorry, I encountered an error. Please try again later.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome",
        text: t("welcome_message"),
        sender: "ai",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <Container className="mx-auto max-w-4xl px-4 pt-0 !mt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        {/* Chat Header */}
        <SpotlightCard className="p-4 sm:p-6 bg-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 aspect-square items-center justify-center rounded-full bg-white/20 text-white shrink-0">
                <IoSparkles className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold">{t("chat_header_title")}</h2>
                <p className="text-xs sm:text-sm opacity-90">
                  {t("chat_header_subtitle")}
                </p>
              </div>
            </div>

            {/* Tombol untuk Desktop */}
            <div className="hidden sm:flex gap-2">
              <Button
                onClick={clearChat}
                className="bg-white/20 text-white hover:bg-white/30 text-sm"
              >
                {t("clear_button") || "Clear"}
              </Button>
              <Button
                onClick={() => setIsMinimized(!isMinimized)}
                className="bg-white/20 text-white hover:bg-white/30 text-sm"
              >
                {isMinimized ? "+" : "−"}
              </Button>
            </div>
          </div>

          {/* Tombol untuk Mobile */}
          <div className="flex sm:hidden gap-2 mt-3 justify-end">
            <Button
              onClick={clearChat}
              className="bg-white/20 text-white hover:bg-white/30 text-sm"
            >
              {t("clear_button") || "Clear"}
            </Button>
            <Button
              onClick={() => setIsMinimized(!isMinimized)}
              className="bg-white/20 text-white hover:bg-white/30 text-sm"
            >
              {isMinimized ? "+" : "−"}
            </Button>
          </div>

        </SpotlightCard>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              {/* Messages Container */}
              <SpotlightCard className="h-[70vh] sm:h-[32rem] overflow-hidden">
                <div className="flex h-full flex-col">
                  <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={clsx(
                          "flex",
                          message.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        )}
                      >
                        <div
                          className={clsx(
                            "flex max-w-[80%] items-start gap-2",
                            message.sender === "user"
                              ? "flex-row-reverse"
                              : "flex-row"
                          )}
                        >
                          <div
                            className={clsx(
                              "flex h-8 w-8 aspect-square items-center justify-center rounded-full shrink-0",
                              "bg-blue-500 text-white"
                            )}
                          >
                            {message.sender === "user" ? (
                              <IoPersonCircle className="h-4 w-4" />
                            ) : (
                              <IoSparkles className="h-4 w-4" />
                            )}
                          </div>
                          <div
                            className={clsx(
                              "rounded-2xl px-4 py-2 text-sm break-words",
                              message.sender === "user"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                            )}
                          >
                            <p className="whitespace-pre-wrap">{message.text}</p>
                            <p
                              className={clsx(
                                "mt-1 text-xs opacity-70",
                                message.sender === "user"
                                  ? "text-blue-100"
                                  : "text-gray-500"
                              )}
                            >
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex max-w-[80%] items-start gap-2">
                          <div className="flex h-8 w-8 aspect-square items-center justify-center rounded-full bg-blue-500 text-white shrink-0">
                            <IoSparkles className="h-4 w-4" />
                          </div>
                          <div className="rounded-2xl bg-gray-100 px-4 py-2 dark:bg-gray-800">
                            <div className="flex space-x-1">
                              <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />
                              <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]" />
                              <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-3 sm:p-4">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <textarea
                      ref={inputRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={t("input_placeholder") || "Ask me about Ahmad Ma'sum or anything else..."}
                      className="w-full rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 pr-12
                                focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
                                dark:border-gray-600 dark:bg-gray-800 dark:text-white
                                overflow-hidden text-ellipsis whitespace-nowrap resize-none
                                text-sm sm:text-base"
                      rows={1}
                      disabled={isLoading}
                    />

                  </div>
                  <Button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    className={clsx(
                      "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl transition-colors",
                      !inputMessage.trim() || isLoading
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    )}
                    isLoading={false}
                    icon={
                      isLoading ? (
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <IoSend className="h-5 w-5" />
                      )
                    }
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {t("input_hint") || "Press Enter to send, Shift+Enter for new line"}
                </p>
              </SpotlightCard>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default SmartTalkChatbot;