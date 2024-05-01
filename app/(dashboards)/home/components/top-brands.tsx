"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/app/lib/utils";

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
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 bg-slate-50 max-w-7xl overflow-hidden self-center  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap justify-center items-center",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt="Brand logo"
            width={50}
            height={50}
            className="cursor-pointer mx-10 w-auto h-auto"
          />
        ))}
      </ul>
    </div>
  );
}
