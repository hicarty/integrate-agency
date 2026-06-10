"use client";

import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
<section style={{ minHeight:"100vh", display:"flex", alignItems:"center",
      justifyContent:"center", position:"relative", padding:"120px 24px 80px", textAlign:"center" }}>

      {/* background orbs */}
      <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"15%", left:"10%", width:500, height:500,
          borderRadius:"50%", background:`radial-gradient(circle, ${C.cyan}15 0%, transparent 70%)`, filter:"blur(60px)" }} />
        <div style={{ position:"absolute", bottom:"20%", right:"10%", width:400, height:400,
          borderRadius:"50%", background:`radial-gradient(circle, ${C.pink}18 0%, transparent 70%)`, filter:"blur(60px)" }} />
      </div>

      <div style={{ maxWidth:900, position:"relative", zIndex:1 }}>

        <div style={{ ...fadeUp(0), display:"inline-flex", alignItems:"center", gap:8,
          padding:"8px 18px", borderRadius:50, marginBottom:32,
          background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)" }}>
          <span style={{ width:8, height:8, borderRadius:"50%", background:C.cyan,
            display:"inline-block" }} className="anim-pulse" />
          <span style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.8)", letterSpacing:"0.2em", textTransform:"uppercase" }}>
            AI Agent First · Human Assisted
          </span>
        </div>

        <h1 style={{ ...fadeUp(100), fontSize:"clamp(2.8rem, 8vw, 5.5rem)", fontWeight:900,
          lineHeight:1, marginBottom:28, letterSpacing:"-.02em" }}>
          <span style={{ color:"#fff" }}>Bridge the</span><br />
          <span className="gradient-text">Digital &amp; Physical</span>
        </h1>

        <p style={{ ...fadeUp(200), fontSize:"clamp(1rem,2.5vw,1.25rem)", color:"rgba(255,255,255,0.55)",
          maxWidth:680, margin:"0 auto 48px", fontWeight:300, lineHeight:1.7 }}>
          An innovative collective harnessing AR, video, and AI to transform how businesses
          connect with their audiences. Rooted in the UK Midlands — Haven, RYZN Studios,
          and Eva Fondufe united to empower SMEs to scale and thrive.
        </p>

        <div style={{ ...fadeUp(300), display:"flex", flexWrap:"wrap", gap:16,
          justifyContent:"center", marginBottom:72 }}>
          <a href="#contact" className="glow-btn">Start Your Transformation</a>
          <a href="#services" className="outline-btn">Explore Services</a>
        </div>

        <div style={{ ...fadeUp(500), display:"grid", gridTemplateColumns:"repeat(3,1fr)",
          gap:24, maxWidth:560, margin:"0 auto" }}>
          {[
            { value:"£250k+", label:"SME Revenue Growth" },
            { value:"10→20",  label:"Team Scaling" },
            { value:"3-in-1", label:"Collective Expertise" },
          ].map(s => (
            <div key={s.label} style={{ textAlign:"center" }}>
              <div style={{ fontSize:"clamp(1.6rem,4vw,2.2rem)", fontWeight:800, marginBottom:6 }}
                className="gradient-text">{s.value}</div>
              <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.4)", textTransform:"uppercase",
                letterSpacing:"0.15em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)" }}>
        <div style={{ width:24, height:40, borderRadius:12, border:"2px solid rgba(255,255,255,0.2)",
          display:"flex", alignItems:"flex-start", justifyContent:"center", padding:6 }}>
          <div style={{ width:4, height:10, borderRadius:2, background:"rgba(255,255,255,0.35)" }}
            className="anim-bounce" />
        </div>
      </div>
    </section>
  );
}
