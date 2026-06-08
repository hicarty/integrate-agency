"use client";

import { useEffect, useRef, useState } from "react";

export function MissionSection() {
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

  const values = [
    {
      number: "01",
      title: "AI Agent First",
      description: "We leverage AI agents as the foundation of every solution, ensuring efficiency and intelligence at scale. Human expertise guides and refines.",
    },
    {
      number: "02",
      title: "Human Assisted",
      description: "Technology amplifies human potential, never replaces it. Our team ensures every solution has the warmth and understanding only humans can provide.",
    },
    {
      number: "03",
      title: "Midlands Proud",
      description: "We're committed to our region's SMEs, helping businesses grow from £250k revenue and scale teams from 10 to 20 people with confidence.",
    },
    {
      number: "04",
      title: "Bridge Builder",
      description: "We connect the digital and physical worlds through AR and video, creating experiences that feel both innovative and authentically grounded.",
    },
  ];

  return (
    <section id="mission" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d23] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Quote Section */}
        <div
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-block mb-8">
            <div className="w-20 h-20 rounded-full glass mx-auto flex items-center justify-center mb-6">
              <span className="text-3xl font-bold gradient-text">H</span>
            </div>
            <p className="text-sm text-white/50 tracking-wider uppercase">Haven • Founder</p>
          </div>

          <blockquote className="text-2xl md:text-4xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed italic">
            "I believe the Midlands can lead the next industrial revolution—one powered
            by AI and AR. My mission is to help every SME in this region
            <span className="gradient-text not-italic font-semibold"> scale beyond their dreams</span>."
          </blockquote>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`glass-card rounded-2xl p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex gap-6">
                <span className="text-5xl font-bold text-white/10">{value.number}</span>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SME Focus Banner */}
        <div
          className={`mt-16 glass-card rounded-3xl p-8 md:p-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Built for <span className="gradient-text">UK Midlands SMEs</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00d4ff] mb-2">£250k+</div>
              <p className="text-white/50 text-sm">Starting Revenue Target</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#e040fb] mb-2">10 → 20</div>
              <p className="text-white/50 text-sm">Team Scaling Journey</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#7c3aed] mb-2">Midlands</div>
              <p className="text-white/50 text-sm">Our Home & Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
