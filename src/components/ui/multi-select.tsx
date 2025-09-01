"use client";

import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: Option[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);

  const toggleOption = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val));
    } else {
      onChange([...value, val]);
    }
  };

  return (
    <div className={cn("relative w-64", className)}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <span className="truncate">
          {value.length > 0
            ? options
                .filter((opt) => value.includes(opt.value))
                .map((opt) => opt.label)
                .join(", ")
            : placeholder}
        </span>
        <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover shadow-lg">
          <ul className="max-h-60 overflow-y-auto p-1 text-sm">
            {options.map((opt) => (
              <li
                key={opt.value}
                className="flex cursor-pointer items-center rounded-sm px-2 py-1.5 hover:bg-accent hover:text-accent-foreground"
                onClick={() => toggleOption(opt.value)}
              >
                <span className="mr-2 flex h-4 w-4 items-center justify-center rounded-sm border">
                  {value.includes(opt.value) && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </span>
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
