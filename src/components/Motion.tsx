"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Button with hover scale + lift
export function MotionButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={cn("inline-block", className)}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Card with hover lift + glow
export function MotionCard({
  children,
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Pulsing status dot
export function PulsingDot({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="absolute inset-0 rounded-full bg-emerald-500/40"
        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-[7px] h-[7px] rounded-full bg-emerald-500 relative z-10"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// Nav link hover underline
export function MotionNavLink({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="relative text-[0.8125rem] font-medium text-muted-foreground px-3 py-1.5 rounded-md"
      whileHover="hover"
    >
      <motion.span
        variants={{
          hover: { color: "rgba(250, 204, 21, 1)" },
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-3 right-3 h-px bg-gold"
        initial={{ scaleX: 0 }}
        variants={{ hover: { scaleX: 1 } }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
    </motion.a>
  );
}
