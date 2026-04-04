import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[0.6875rem] font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-gold/20 bg-gold/[0.08] text-gold",
        copper: "border-copper/25 bg-copper/[0.08] text-copper",
        gold: "border-gold-light/25 bg-gold-light/[0.08] text-gold-light",
        muted: "border-white/[0.08] bg-white/[0.04] text-muted-foreground",
        outline: "border-white/[0.1] text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
