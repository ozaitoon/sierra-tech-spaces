import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-gold-light shadow-[0_0_20px_rgba(212,160,6,0.15)]",
        secondary: "border border-white/[0.08] text-foreground hover:border-white/[0.14] hover:bg-white/[0.03]",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-white/[0.06]",
        destructive: "bg-destructive text-foreground hover:bg-destructive/90",
        outline: "border border-white/[0.08] bg-transparent text-foreground hover:bg-white/[0.04]",
        nav: "bg-foreground text-background hover:bg-white",
      },
      size: {
        default: "h-11 px-6 text-[0.875rem]",
        sm: "h-9 px-4 text-[0.8125rem]",
        lg: "h-[52px] px-8 text-[0.9375rem]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
