"use client";

import { useEffect, useRef, useState } from "react";

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div
          className={`glass-card rounded-[2.5rem] p-8 md:p-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Accent Lines */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#e040fb] to-transparent" />

          <span className="text-sm tracking-[0.3em] uppercase text-[#00d4ff] mb-4 block">
            Ready to Transform?
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Let's </span>
            <span className="gradient-text">Integrate</span>
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Whether you're looking to implement AI, create stunning AR experiences,
            or preserve your legacy—we're here to help your SME thrive.
          </p>

          {/* Contact Form */}
          <form className="max-w-lg mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff] transition-colors"
            />
            <select
              className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white/50 focus:outline-none focus:border-[#00d4ff] transition-colors"
              defaultValue=""
            >
              <option value="" disabled>Select a Service</option>
              <option value="ai">AI Transformations</option>
              <option value="media">Media Production</option>
              <option value="archive">Archive Production</option>
              <option value="all">Full Integration</option>
            </select>
            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
            />
            <button type="submit" className="glow-btn w-full text-lg">
              <span>Start the Conversation</span>
            </button>
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-white/40 mb-4">Or reach out directly</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:integrate@servantleaders.uk"
                className="flex items-center gap-2 text-white/70 hover:text-[#00d4ff] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                integrate@servantleaders.uk
              </a>
              <span className="hidden sm:block text-white/20">|</span>
              <span className="flex items-center gap-2 text-white/70">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                UK Midlands
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
