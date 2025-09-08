"use client";

import Folder from "@/common/components/elements/Folder";
import Image from "@/common/components/elements/Image";
import { AchievementItem } from "@/common/types/achievements";
import { ACHIEVEMENTS_DATA } from "@/common/constants/achievements";

const AchievementFolder = () => {
  // Menggunakan data statis dari constants
  const filteredAchievements = ACHIEVEMENTS_DATA
    .filter((item: AchievementItem) => item?.is_show)
    .sort((a: AchievementItem, b: AchievementItem) => b.id - a.id)
    .slice(0, 3);

  const items = filteredAchievements.map((item: AchievementItem) => (
    <Image
      key={item.id}
      src={item.image}
      alt={item.name}
      width={200}
      height={100}
      className="h-full w-full rounded-md object-cover"
    />
  ));

  return (
    <div className="mb-4 mt-8 flex w-full items-center justify-center">
      <Folder
        size={0.8}
        color="#facc15"
        items={items}
      />
    </div>
  );
};

export default AchievementFolder;
