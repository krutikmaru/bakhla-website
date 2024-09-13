"use client";
import React, { useEffect, useRef, useState } from "react";

interface TickerProps {
  children: React.ReactNode;
  duration?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Ticker({
  children,
  duration = 30,
  direction = "left",
  className = "",
}: TickerProps) {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [tickerWidth, setTickerWidth] = useState(0);

  useEffect(() => {
    if (tickerRef.current) {
      setTickerWidth(tickerRef.current.scrollWidth / 2);
    }
  }, [children]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap "
        style={{
          width: `${tickerWidth * 2}px`,
          animation: `ticker ${duration}s linear infinite ${
            direction === "right" ? "reverse" : "normal"
          }`,
        }}
      >
        <div className="flex">{children}</div>
        <div className="flex">{children}</div>
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
