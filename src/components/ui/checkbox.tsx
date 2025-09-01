"use client";

import * as React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckboxProps = {
  id?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

function Checkbox({
  id,
  checked,
  onCheckedChange,
  disabled,
  className,
}: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-center gap-2 cursor-pointer",
        disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className="peer hidden"
      />
      <span
        className={cn(
          "size-4 flex items-center justify-center rounded-[4px] border border-input shadow-xs",
          "peer-checked:bg-sec-main peer-checked:border-sec-main"
        )}
      >
        <CheckIcon className="hidden size-3.5 text-primary-foreground peer-checked:block" />
      </span>
    </label>
  );
}

export { Checkbox };
