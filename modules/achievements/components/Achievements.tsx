"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

import EmptyState from "@/common/components/elements/EmptyState";
import { AchievementItem } from "@/common/types/achievements";
import { getFilteredAchievements } from "@/common/constants/achievements";

import AchievementCard from "./AchievementCard";
import FilterHeader from "./FilterHeader";

const Achievements = () => {
  const t = useTranslations("AchievementsPage");

  const params = useSearchParams();
  const category = params.get("category") || "";
  const search = params.get("search") || "";

  // Menggunakan data statis dengan useMemo untuk optimasi
  const filteredAchievements: AchievementItem[] = useMemo(() => {
    return getFilteredAchievements(category || undefined, search || undefined);
  }, [category, search]);

  // Simulasi loading state (opsional)
  const [isLoading] = useState(false);
  const [error] = useState(null);

  return (
    <section className="space-y-4">
      <FilterHeader totalData={filteredAchievements?.length} />

      {isLoading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-xl" />
          ))}
        </div>
      )}

      {error && <EmptyState message={t("error")} />}

      {filteredAchievements?.length === 0 && (
        <EmptyState message={t("no_data")} />
      )}

      {!isLoading && !error && filteredAchievements.length !== 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements?.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-[400px]"
            >
              <AchievementCard {...item} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievements;
