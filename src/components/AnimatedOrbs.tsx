"use client";

import { useEffect, useState } from "react";

interface Orb {
  id: number;
  size: number;
  x: number;
  y: number;
  color: "cyan" | "magenta" | "blue" | "violet";
  delay: number;
  duration: number;
}

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export function AnimatedOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate orbs with strategic positioning
    const orbConfigs = [
      { size: 500, x: 10, y: 5, color: "cyan" as const, delay: 0, duration: 25 },
      { size: 450, x: 80, y: 10, color: "magenta" as const, delay: 2, duration: 22 },
      { size: 350, x: 60, y: 40, color: "violet" as const, delay: 4, duration: 28 },
      { size: 400, x: 20, y: 60, color: "magenta" as const, delay: 1, duration: 20 },
      { size: 300, x: 85, y: 70, color: "cyan" as const, delay: 3, duration: 24 },
      { size: 380, x: 40, y: 80, color: "blue" as const, delay: 5, duration: 26 },
      { size: 280, x: 5, y: 30, color: "violet" as const, delay: 2.5, duration: 23 },
      { size: 320, x: 70, y: 50, color: "cyan" as const, delay: 1.5, duration: 21 },
    ];

    const generatedOrbs: Orb[] = orbConfigs.map((config, i) => ({
      id: i,
      ...config,
    }));
    setOrbs(generatedOrbs);

    // Generate bubbles
    const generatedBubbles: Bubble[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 15) + 5,
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 20,
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main Orbs */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`orb orb-${orb.color}`}
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}

      {/* Static gradient overlays for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 20% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 80% 80%, rgba(224, 64, 251, 0.12) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(124, 58, 237, 0.1) 0%, transparent 40%)",
        }}
      />
    </div>
  );
}
