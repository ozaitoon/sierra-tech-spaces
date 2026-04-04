"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineScene() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full bg-background" />
      }
    >
      <Spline
        scene="https://prod.spline.design/f3VDjPKfFysaOA1J/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </Suspense>
  );
}
