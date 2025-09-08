"use client";

import { AnimatePresence, motion } from "framer-motion";
import SpotifyEmbed from "./SpotifyEmbed";
import { SPOTIFY_PROFILE_URL, SPOTIFY_FEATURED_URLS } from "@/modules/spotify/spotify";

const SpotifyWidgetHeader = () => {
  return (
    <div className="flex items-center justify-between border-b border-neutral-300 px-4 py-3 dark:border-neutral-700">
      <div className="flex flex-col">
        <span className="text-sm font-semibold">Spotify</span>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">Listen along on my profile</span>
      </div>
      <a
        href={SPOTIFY_PROFILE_URL}
        className="text-xs underline text-green-600 hover:text-green-500"
        target="_blank"
        rel="noreferrer"
      >
        Open profile
      </a>
    </div>
  );
};

const SpotifyWidget = () => {
  const urls = SPOTIFY_FEATURED_URLS.length > 0 ? SPOTIFY_FEATURED_URLS : [SPOTIFY_PROFILE_URL];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-24 right-6 w-[450px] rounded-lg border bg-neutral-50/80 backdrop-blur-sm border-neutral-300 dark:border-neutral-600 dark:bg-neutral-900/90"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <SpotifyWidgetHeader />
        <div className="space-y-3 p-4">
          {urls.map((u) => (
            <SpotifyEmbed key={u} url={u} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SpotifyWidget;