import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full min-w-0 shadow-none rounded-md border bg-transparent px-3 py-2 text-sm outline-none transition-[border,box-shadow,color]",
        "border-neutral-200 file:text-foreground placeholder:text-muted-foreground selection:bg-sec-main selection:text-white",
        "dark:bg-input/30",
        "file:inline-flex file:h-7 file:rounded file:border-0 file:bg-sec-main/10 file:px-2 file:text-sm file:font-medium file:text-sec-main",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-sec-main focus-visible:ring-[1px] focus-visible:ring-sec-main/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  );
}

export { Input };
