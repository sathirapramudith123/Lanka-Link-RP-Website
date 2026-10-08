"use client";

import Image from "next/image";
import { useState } from "react";

/** Profile photo that falls back to the person's initials when the image is missing. */
export default function Avatar({ src, name, sizes }: { src: string; name: string; sizes: string }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    const initials = name
      .replace(/^(Dr|Ms|Mr|Mrs|Prof)\.?\s+/i, "")
      .split(/[\s.]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]!.toUpperCase())
      .join("");
    return (
      <div className="gradient-brand flex h-full w-full items-center justify-center font-display text-lg font-bold text-white">
        {initials}
      </div>
    );
  }
  return <Image src={src} alt={name} fill className="object-cover" sizes={sizes} onError={() => setFailed(true)} />;
}
