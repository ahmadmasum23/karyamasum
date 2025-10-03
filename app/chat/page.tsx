import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { METADATA } from "@/common/constants/metadata";
import { ChatRoom } from "@/modules/chat/components/ChatRoom";

export const metadata: Metadata = {
  title: `Chat Room ${METADATA.exTitle}`,
  description: `Chat with ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/chat`,
  },
};

const ChatPage = () => {
  const t = useTranslations("ChatRoomPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <div className="mt-6">
        <h1>Comingson</h1>
        {/* <ChatRoom /> */}
      </div>
    </Container>
  );
};

export default ChatPage;
