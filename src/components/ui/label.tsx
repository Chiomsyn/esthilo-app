"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
}

function Label({ className, disabled, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      aria-disabled={disabled}
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none",
        disabled && "pointer-events-none opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}

export { Label };
