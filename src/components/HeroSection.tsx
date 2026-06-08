"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          <span className="text-sm text-white/80 tracking-wider uppercase">
            AI Agent First • Human Assisted
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-8 transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-white">Bridge the</span>
          <br />
          <span className="gradient-text">Digital & Physical</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          An innovative agency harnessing AR and video to transform how businesses
          connect with their audiences. Rooted in the UK Midlands,
          empowering SMEs to scale and thrive.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#contact" className="glow-btn text-lg">
            <span>Start Your Transformation</span>
          </a>
          <a href="#services" className="outline-btn text-lg">
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "£250k+", label: "SME Revenue Growth" },
            { value: "10→20", label: "Team Scaling" },
            { value: "100%", label: "Midlands Focused" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
