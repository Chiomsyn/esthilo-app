"use client";

import * as React from "react";
import { CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type RadioGroupProps = {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
};

function RadioGroup({
  value,
  onValueChange,
  children,
  className,
}: RadioGroupProps) {
  return (
    <div role="radiogroup" className={cn("grid gap-3", className)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement<RadioGroupItemProps>(child)) return child;

        return React.cloneElement(child, {
          checked: child.props.value === value,
          onChange: () => onValueChange(child.props.value),
        });
      })}
    </div>
  );
}

type RadioGroupItemProps = {
  value: string;
  checked?: boolean;
  onChange?: () => void;
  className?: string;
};

function RadioGroupItem({
  value,
  checked,
  onChange,
  className,
}: RadioGroupItemProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <span
        className={cn(
          "aspect-square size-4 rounded-full border shadow-xs flex items-center justify-center transition",
          checked ? "border-primary ring-2 ring-primary/40" : "border-input",
          className
        )}
      >
        {checked && <CircleIcon className="size-2 fill-primary" />}
      </span>
    </label>
  );
}

export { RadioGroup, RadioGroupItem };
