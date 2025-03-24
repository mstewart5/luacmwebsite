"use client";

import { useEffect } from "react";

interface InstagramEmbedProps {
  permalink: string; // URL of the Instagram post
}

export function InstagramEmbed({ permalink }: InstagramEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "instagram-embed";
    script.src = "//www.instagram.com/embed.js";
    script.defer = true;
    document.head.appendChild(script);
  }, [permalink]);

  return (
    <blockquote
      className="instagram-media w-full p-8 rounded-lg"
      data-instgrm-permalink={permalink}
      data-instgrm-version="12"
    />
  );
}
