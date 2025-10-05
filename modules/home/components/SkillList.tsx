"use client";

import { BiCodeAlt as SkillsIcon } from "react-icons/bi";
import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import GlassIcon from "@/common/components/elements/GlassIcon";
import ComboBoxCard from "@/common/components/elements/ComboBoxCard";
import { STACKS } from "@/common/constants/stacks";

const SkillList = () => {
  const t = useTranslations("HomePage");
  const [filter, setFilter] = useState("all");

  const filteredStacks = useMemo(() => {
    return Object.entries(STACKS)
      .filter(([, value]) => value.isActive)
      .filter(([_, value]) =>
        filter === "all" ? true : value.category === filter
      );
  }, [filter]);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <SectionHeading title={t("skills.title")} icon={<SkillsIcon />} />
          <SectionSubHeading>
            <p>{t("skills.sub_title")}</p>
          </SectionSubHeading>
        </div>

        {/* Filter Dropdown */}
        <div className="w-full md:w-[230px]">
          <ComboBoxCard onFilterChange={(value) => setFilter(value)} />
        </div>
      </div>

      <div className="grid w-full grid-cols-6 gap-x-[1em] gap-y-[2.7em] py-2 md:grid-cols-10 lg:grid-cols-11">
        {filteredStacks.map(([name, { icon, background }], index) => (
          <GlassIcon
            key={index}
            name={name}
            icon={icon}
            background={background}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillList;
