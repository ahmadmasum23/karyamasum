"use client";

import React from "react";

interface SpotifyEmbedProps {
  url: string;
  height?: number;
}

const SpotifyEmbed = ({ url, height = 80 }: SpotifyEmbedProps) => {
  // Convert URL biasa ke URL embed
  const embedUrl = url.replace("https://open.spotify.com/intl-id/", "https://open.spotify.com/embed/");

  return (
    <div className="w-full overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-700">
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyEmbed;