import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-gold/90 backdrop-blur-xl text-primary-foreground hover:bg-gold-light shadow-[0_0_25px_rgba(139,92,246,0.25),0_0_60px_rgba(139,92,246,0.08),inset_0_1px_0_rgba(255,255,255,0.15)]",
        secondary: "backdrop-blur-xl bg-white/[0.04] border border-white/[0.1] text-foreground hover:border-white/[0.18] hover:bg-white/[0.07] shadow-[0_0_15px_rgba(255,255,255,0.02),inset_0_1px_0_rgba(255,255,255,0.06)]",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-white/[0.06] backdrop-blur-lg",
        destructive: "bg-destructive/80 backdrop-blur-xl text-foreground hover:bg-destructive/90",
        outline: "backdrop-blur-xl border border-white/[0.1] bg-white/[0.03] text-foreground hover:bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
        nav: "bg-foreground/90 backdrop-blur-xl text-background hover:bg-white shadow-[0_0_15px_rgba(255,255,255,0.08)]",
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
