import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import Spinner from "../spinner";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center text-base font-medium cursor-pointer duration-300 ease-in-out transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        primary: "bg-base-color text-white hover:bg-primary-400",
        outlined:
          "border border-primary-300 hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        disabled: "bg-gray-300 cursor-not-allowed opacity-30",
      },
      rounded: {
        default: "rounded-full",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        sm: "rounded-sm",
        none: "rounded-none",
      },
      size: {
        default: "h-12 py-4 px-3",
        sm: "h-9 px-3",
        lg: "h-14 px-8 py-7",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      rounded: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, rounded, className }),
          "rounded-tr-[1px] rounded-bl-xs hover:scale-105 transition-all"
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Spinner
            size="md"
            className={cn(
              "animate-spin invisible opacity-0",
              isLoading &&
                "visible opacity-100 animate-spin transition-all duration-300 ease-in-out"
            )}
          />
        ) : (
          children
        )}

        {isLoading && (
          <span
            className={cn(
              "ml-0 invisible opacity-0 transition-all duration-300 ease-in-out",
              isLoading && "ml-2 visible opacity-100"
            )}
          >
            Processing
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
