"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  suffix?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  suffix = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const formatNumber = useCallback(
    (num: number) => {
      const str = Math.round(num).toString();
      if (!separator) return str + suffix;
      return str.replace(/\B(?=(\d{3})+(?!\d))/g, separator) + suffix;
    },
    [separator, suffix]
  );

  useEffect(() => {
    if (isInView && startWhen) {
      onStart?.();
      const timeout = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, startWhen, delay, direction, from, to, motionValue, onStart]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatNumber(latest);
        if (
          (direction === "up" && latest >= to) ||
          (direction === "down" && latest <= from)
        ) {
          onEnd?.();
        }
      }
    });
    return () => unsubscribe();
  }, [springValue, formatNumber, to, from, direction, onEnd]);

  return <span ref={ref} className={className}>{formatNumber(from)}</span>;
}
