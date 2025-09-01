"use client";

import * as React from "react";
import { ChevronRightIcon, CheckIcon, CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const DropdownMenuContext = React.createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
} | null>(null);

function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

function DropdownMenuTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx) throw new Error("DropdownMenuTrigger must be inside DropdownMenu");
  return (
    <button
      onClick={() => ctx.setOpen(!ctx.open)}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </button>
  );
}

function DropdownMenuContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx) throw new Error("DropdownMenuContent must be inside DropdownMenu");
  if (!ctx.open) return null;
  return (
    <div
      className={cn(
        "absolute left-0 mt-2 min-w-[8rem] rounded-md border bg-white shadow-md z-50 p-1",
        className
      )}
    >
      {children}
    </div>
  );
}

// Group wrapper
function DropdownMenuGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

// Menu item
function DropdownMenuItem({
  children,
  className,
  inset,
  variant = "default",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  inset?: boolean;
  variant?: "default" | "destructive";
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex cursor-pointer text-gray-700 select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-sec-main/5",
        inset && "pl-8",
        variant === "destructive" && "text-red-600 hover:bg-red-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Checkbox item
function DropdownMenuCheckboxItem({
  children,
  checked,
  className,
}: {
  children: React.ReactNode;
  checked?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex cursor-pointer select-none items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm hover:bg-gray-100",
        className
      )}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <CheckIcon className="size-4" />}
      </span>
      {children}
    </div>
  );
}

// Radio group + item
function DropdownMenuRadioGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

function DropdownMenuRadioItem({
  children,
  selected,
  className,
}: {
  children: React.ReactNode;
  selected?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex cursor-pointer select-none text-gray-700 items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm hover:bg-gray-100",
        className
      )}
    >
      <span className="absolute left-2 flex size-3.5 items-center justify-center">
        {selected && <CircleIcon className="size-2 fill-current" />}
      </span>
      {children}
    </div>
  );
}

// Label
function DropdownMenuLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-2 py-1.5 text-sm font-medium", className)}>
      {children}
    </div>
  );
}

// Separator
function DropdownMenuSeparator({ className }: { className?: string }) {
  return <div className={cn("h-px bg-gray-300 my-1", className)} />;
}

// Shortcut text
function DropdownMenuShortcut({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-gray-600", className)}
    >
      {children}
    </span>
  );
}

// Submenus (simplified)
function DropdownMenuSub({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}

function DropdownMenuSubTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100",
        className
      )}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </div>
  );
}

function DropdownMenuSubContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute left-full top-0 ml-1 min-w-[8rem] rounded-md border bg-white shadow-md z-50 p-1",
        className
      )}
    >
      {children}
    </div>
  );
}

// Export same API as Radix version
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
