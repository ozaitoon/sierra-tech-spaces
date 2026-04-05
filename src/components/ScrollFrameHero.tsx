"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 240;

function getFrameSrc(index: number): string {
  const num = String(Math.min(Math.max(index, 1), FRAME_COUNT)).padStart(3, "0");
  return `/hero-frames/ezgif-frame-${num}.jpg`;
}

export default function ScrollFrameHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const [loaded, setLoaded] = useState(false);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgRatio > canvasRatio) {
      drawH = canvas.height;
      drawW = drawH * imgRatio;
      drawX = (canvas.width - drawW) / 2;
      drawY = 0;
    } else {
      drawW = canvas.width;
      drawH = drawW / imgRatio;
      drawX = 0;
      drawY = (canvas.height - drawH) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameSrc(i + 1);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
          drawFrame(0);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, [drawFrame]);

  useEffect(() => {
    if (!loaded || !containerRef.current || !canvasRef.current) return;

    drawFrame(0);

    const ctx = gsap.context(() => {
      const obj = { frame: 0 };

      gsap.to(obj, {
        frame: FRAME_COUNT - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
        onUpdate: () => {
          const newIndex = Math.round(obj.frame);
          if (newIndex !== frameIndexRef.current) {
            frameIndexRef.current = newIndex;
            drawFrame(newIndex);
          }
        },
      });
    }, containerRef);

    const handleResize = () => drawFrame(frameIndexRef.current);
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [loaded, drawFrame]);

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0B1426]">
            <div className="flex flex-col items-center gap-4">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-purple-500 border-t-transparent" />
              <p className="text-sm text-warm-400 tracking-wide">Loading...</p>
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
