"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CustomersProps {
  slides: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export default function TopBrands({
  slides,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: CustomersProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = React.useState(false);

  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  }, [speed]);

  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  React.useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div className="relative w-full overflow-hidden py-12 bg-transparent">
      <h2 className="text-3xl font-bold text-slate-800">Top Brands</h2>
      <span className="text-sm text-gray-500">
        Where fashion meets trusted quality.
      </span>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 mt-5 bg-transparent max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap justify-center items-center",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {slides.map((slide, index) => (
            <li key={index} className="flex items-center justify-center">
              <Image
                src={slide}
                alt="Brand logo"
                width={120}
                height={60}
                className="cursor-pointer h-10 w-auto object-contain mx-10 opacity-80 hover:opacity-100 transition-opacity"
              />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }
        
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }
        
        .animate-scroll:hover {
          animation-play-state: var(--hover-animation-state, running);
        }
        
        .hover\\:\\[animation-play-state\\:paused\\]:hover {
          --hover-animation-state: paused;
        }
      `}</style>
    </div>
  );
}
