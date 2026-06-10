"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Transformations",
    description: "Unlock your team's potential with our comprehensive workshops and agility team training. We integrate AI agents into your workflows, making your operations smarter and more efficient.",
    features: ["AI Integration Workshops", "Agility Team Training", "Process Automation", "Custom AI Solutions"],
    gradient: "from-[#00d4ff] to-[#4d7cff]",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Media Production",
    description: "Cutting-edge video and AR content that captivates. We blend creative storytelling with emerging technology to produce media that stands out and delivers results.",
    features: ["AR Experiences", "Video Production", "Interactive Content", "Brand Storytelling"],
    gradient: "from-[#e040fb] to-[#ff6ec7]",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Archive Production",
    description: "Preserve and digitise your legacy. We transform historical records and physical archives into accessible, searchable digital assets that tell your story for generations.",
    features: ["Digital Preservation", "Archive Digitisation", "Heritage Documentation", "Searchable Databases"],
    gradient: "from-[#7c3aed] to-[#e040fb]",
  },
];

export function ServicesSection() {
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
<section id="mission" ref={ref} style={{ padding:"120px 24px", position:"relative",
      background:`linear-gradient(180deg, transparent, ${C.bg2}, transparent)` }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>

        {/* Founder quote */}
        <div style={{ textAlign:"center", marginBottom:96,
          transition:"opacity 1s, transform 1s", opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(48px)" }}>
          <div style={{ width:72, height:72, borderRadius:"50%", background:"rgba(255,255,255,0.05)",
            border:"1px solid rgba(255,255,255,0.1)", display:"flex", alignItems:"center",
            justifyContent:"center", margin:"0 auto 16px" }}>
            <span style={{ fontSize:"1.8rem", fontWeight:900 }} className="gradient-text">H</span>
          </div>
          <p style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.4)", letterSpacing:"0.2em",
            textTransform:"uppercase", marginBottom:28 }}>Haven · Founder</p>
          <blockquote style={{ fontSize:"clamp(1.2rem,3vw,1.9rem)", fontWeight:300,
            color:"rgba(255,255,255,0.88)", maxWidth:800, margin:"0 auto", lineHeight:1.6,
            fontStyle:"italic" }}>
            "I believe the Midlands can lead the next industrial revolution — one powered by AI
            and AR. My mission is to help every SME in this region&nbsp;
            <span className="gradient-text" style={{ fontStyle:"normal", fontWeight:700 }}>
              scale beyond their dreams.
            </span>"
          </blockquote>
        </div>

        {/* Values grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:24 }}>
          {values.map((v, i) => (
            <div key={v.number} className="glass-card" style={{ borderRadius:20, padding:32,
              transition:`opacity .7s ${300 + i*150}ms, transform .7s ${300 + i*150}ms`,
              opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(48px)" }}>
              <div style={{ display:"flex", gap:20 }}>
                <span style={{ fontSize:"2.5rem", fontWeight:900, color:"rgba(255,255,255,0.07)",
                  lineHeight:1, flexShrink:0 }}>{v.number}</span>
                <div>
                  <h3 style={{ fontWeight:700, fontSize:"1.05rem", color:"#fff", marginBottom:10 }}>{v.title}</h3>
                  <p style={{ color:"rgba(255,255,255,0.55)", lineHeight:1.75, fontSize:"0.88rem" }}>{v.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SME banner */}
        <div className="glass-card" style={{ borderRadius:28, padding:"48px 40px", textAlign:"center",
          marginTop:56, transition:"opacity 1s .7s, transform 1s .7s",
          opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(48px)" }}>
          <h3 style={{ fontSize:"clamp(1.3rem,3vw,2rem)", fontWeight:800, color:"#fff", marginBottom:40 }}>
            Built for <span className="gradient-text">UK Midlands SMEs</span>
          </h3>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:32 }}>
            {[
              { value:"£250k+", label:"Starting Revenue Target", color:C.cyan },
              { value:"10→20",  label:"Team Scaling Journey",    color:C.pink },
              { value:"Midlands",label:"Our Home & Focus",       color:C.purpleL },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize:"clamp(1.8rem,4vw,2.5rem)", fontWeight:900, color:s.color, marginBottom:8 }}>{s.value}</div>
                <p style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.4)", textTransform:"uppercase", letterSpacing:"0.12em" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
