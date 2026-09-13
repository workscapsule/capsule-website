// author: Khoa Phan <https://www.pldkhoa.dev>

"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import StackingCards, {
  StackingCardItem,
} from "@/components/ui/stacking-cards";

// Safe Image component compatible with both Vite/SPA and Next.js environments
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
}

const Image: React.FC<ImageProps> = ({ fill, className, style, alt = "", ...props }) => {
  const fillStyle: React.CSSProperties = fill
    ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit: "cover",
      }
    : {};

  return (
    <img
      alt={alt}
      className={cn(fill && "absolute inset-0 w-full h-full object-cover", className)}
      style={{ ...fillStyle, ...style }}
      loading="lazy"
      {...props}
    />
  );
};

const cards = [
  {
    bgColor: "bg-[#f97316]",
    title: "The Guiding Light",
    description:
      "Lighthouses have stood as beacons of hope for centuries, guiding sailors safely through treacherous waters. Their glowing light and towering presence serve as a reminder of humanity’s connection to the sea.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "Life Beneath the Waves",
    description:
      "From shimmering schools of fish to solitary hunters, the ocean is home to an incredible variety of marine life. Each species plays a vital role in maintaining the balance of underwater ecosystems.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bgColor: "bg-[#ff5941]",
    title: "Alone on the Open Sea",
    description:
      "Drifting across the endless horizon, traveling alone on the sea is a test of courage and resilience. With nothing but the waves and the sky, solitude becomes both a challenge and a source of deep reflection.",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bgColor: "bg-[#1f464d]",
    title: "The Art of Sailing",
    description:
      "Harnessing the power of the wind, sailing is both a skill and an adventure. Whether racing across the waves or leisurely cruising, it’s a timeless way to explore the vast blue expanse.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    bgColor: "bg-[#0015ff]",
    title: "The Era of Whaling",
    description:
      "Once a thriving industry, whale hunting shaped economies and cultures across the world. Today, efforts to protect these majestic creatures highlight the shift toward conservation and respect for marine life.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function StackingCardsDemo() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      className="h-[620px] bg-white overflow-auto text-white rounded-3xl"
      ref={container}
    >
      <StackingCards
        totalCards={cards.length}
        scrollOptions={{ container: container }}
      >
        <div className="relative h-[110px] w-full z-10 text-xl md:text-3xl font-bold uppercase flex justify-center items-center text-[#ff5941] tracking-wider">
          Scroll down ↓
        </div>
        {cards.map(({ bgColor, description, image, title }, index) => (
          <StackingCardItem key={index} index={index} className="min-h-[640px] sm:min-h-[720px] flex items-center justify-center">
            <div
              className={cn(
                bgColor,
                "w-11/12 max-w-lg min-h-[520px] sm:min-h-[580px] flex-col px-6 sm:px-8 py-8 sm:py-10 flex rounded-3xl mx-auto relative shadow-2xl justify-between group",
              )}
            >
              <div className="w-full rounded-2xl h-56 sm:h-68 relative overflow-hidden shadow-lg mb-6 shrink-0 bg-black/20">
                <Image
                  src={image}
                  alt={title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                />
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-3">
                <h3 className="font-bold text-2xl sm:text-3xl leading-tight">{title}</h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">{description}</p>
              </div>
            </div>
          </StackingCardItem>
        ))}

        <div className="w-full h-80 relative overflow-hidden flex items-end">
          <h2 className="sm:text-[140px] text-[64px] font-extrabold text-[#ff5941] leading-none tracking-tight">
            fancy
          </h2>
        </div>
      </StackingCards>
    </div>
  );
}
