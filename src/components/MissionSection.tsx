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
