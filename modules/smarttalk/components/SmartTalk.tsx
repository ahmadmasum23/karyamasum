import Container from "@/common/components/elements/Container";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const SmartTalk = () => {
  const t = useTranslations("NotFoundPage");

  return (
    <Container
      data-aos="fade-up"
      className="flex h-full flex-col items-center justify-center gap-y-4  transition-all duration-300"
    >
      <h1 className="text-center text-6xl font-semibold text-neutral-700 dark:text-neutral-300">
        Coming Soon
      </h1>
    </Container>
  );
};

export default SmartTalk;
