"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-[#e040fb] mb-4 block">
              Our Heritage
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-white">Rooted in </span>
              <span className="gradient-text">Industrial Innovation</span>
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                We call the UK Midlands home—a region with a rich heritage of industrial
                factory buildings that pioneered the world's first industrial revolution.
                Today, we're pioneering the next one.
              </p>
              <p>
                Our founder, Haven, is deeply passionate about supporting SMEs in this
                historic region. We understand the unique challenges of growing from
                £250k revenue and scaling teams from 10 to 20 people—because we've
                been there ourselves.
              </p>
              <p>
                We bridge the gap between the physical world you know and the digital
                future you need. Through AR, video, and AI, we help businesses
                transform without losing what makes them special.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Factory Building Visual */}
            <div className="relative aspect-square">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00d4ff]/20 via-[#e040fb]/20 to-[#7c3aed]/20 blur-xl" />

              {/* Main Card */}
              <div className="absolute inset-4 glass-card rounded-3xl overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 50px,
                        rgba(255,255,255,0.03) 50px,
                        rgba(255,255,255,0.03) 51px
                      ),
                      repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 50px,
                        rgba(255,255,255,0.03) 50px,
                        rgba(255,255,255,0.03) 51px
                      )
                    `
                  }} />
                </div>

                {/* Factory Icon Representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Building shapes */}
                    <div className="flex gap-3 items-end">
                      <div className="w-16 h-32 rounded-t-lg bg-gradient-to-t from-[#00d4ff]/30 to-transparent border border-white/10" />
                      <div className="w-20 h-40 rounded-t-lg bg-gradient-to-t from-[#e040fb]/30 to-transparent border border-white/10" />
                      <div className="w-14 h-28 rounded-t-lg bg-gradient-to-t from-[#7c3aed]/30 to-transparent border border-white/10" />
                    </div>

                    {/* Chimney with AR overlay effect */}
                    <div className="absolute -top-8 right-4 w-6 h-12 bg-gradient-to-t from-white/10 to-transparent rounded-t-sm">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00d4ff]/60 animate-pulse" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#e040fb]/60 animate-pulse delay-150" />
                    </div>

                    {/* Digital overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#00d4ff]/5 to-[#e040fb]/10 animate-pulse" />
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#00d4ff]/50" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#e040fb]/50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#7c3aed]/50" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#00d4ff]/50" />
              </div>

              {/* Floating Labels */}
              <div className="absolute -right-4 top-1/4 glass px-4 py-2 rounded-full text-sm text-[#00d4ff]">
                AR Enhanced
              </div>
              <div className="absolute -left-4 bottom-1/3 glass px-4 py-2 rounded-full text-sm text-[#e040fb]">
                AI Powered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
