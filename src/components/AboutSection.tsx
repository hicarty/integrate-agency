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
   <section id="about" ref={ref} style={{ padding:"120px 24px", position:"relative" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:64, alignItems:"center" }}>

        {/* Left copy */}
        <div style={slideL}>
          <span style={{ fontSize:"0.72rem", letterSpacing:"0.3em", textTransform:"uppercase",
            color:C.pink, display:"block", marginBottom:16 }}>Our Heritage</span>
          <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, lineHeight:1.1, marginBottom:32 }}>
            <span style={{ color:"#fff" }}>Rooted in </span>
            <span className="gradient-text">Industrial Innovation</span>
          </h2>
          <div style={{ display:"flex", flexDirection:"column", gap:20,
            color:"rgba(255,255,255,0.6)", lineHeight:1.8, fontSize:"0.95rem" }}>
            <p>
              We call the UK Midlands home — a region with a rich heritage of industrial factory
              buildings that pioneered the world's first industrial revolution. Today, we're
              pioneering the next one.
            </p>
            <p>
              Our founder Haven is deeply passionate about supporting SMEs in this historic region.
              We understand the unique challenges of growing from £250k revenue and scaling teams
              from 10 to 20 people — because we've been there ourselves.
            </p>
            <p>
              We bridge the gap between the physical world you know and the digital future you need.
              Through AR, video, and AI — and with RYZN Studios' cinematic production craft and
              Eva Fondufe's strategic creative direction — we help businesses transform without
              losing what makes them special.
            </p>
          </div>
        </div>

        {/* Right visual — team trio */}
        <div style={slideR}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
            {[
              { init:"H", name:"Haven", role:"Founder · Strategy", color:C.cyan, delay:"0s" },
              { init:"R", name:"RYZN Studios", role:"Content Production", color:C.pink, delay:".15s" },
              { init:"E", name:"Eva Fondufe", role:"Creative · Brand", color:C.purpleL, delay:".3s" },
            ].map((p, i) => (
              <div key={p.name} className="glass-card" style={{
                borderRadius:20, padding:"24px 20px",
                gridColumn: i === 2 ? "1 / -1" : "auto",
                transition:`opacity 1s ${p.delay}, transform 1s ${p.delay}`,
                opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(24px)",
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:12 }}>
                  <div style={{ width:44, height:44, borderRadius:12, flexShrink:0,
                    background:`${p.color}22`, border:`1px solid ${p.color}44`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:"1.1rem", fontWeight:800, color:p.color }}>{p.init}</div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:"0.95rem" }}>{p.name}</div>
                    <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.4)",
                      letterSpacing:"0.1em", textTransform:"uppercase", marginTop:2 }}>{p.role}</div>
                  </div>
                </div>
                <div style={{ width:"100%", height:2, borderRadius:2,
                  background:`linear-gradient(90deg, ${p.color}60, transparent)` }} />
              </div>
            ))}
          </div>

          <div style={{ marginTop:20, display:"flex", gap:8 }}>
            {[
              { label:"AR Enhanced", color:C.cyan },
              { label:"AI Powered", color:C.pink },
              { label:"Midlands Born", color:C.purpleL },
            ].map(t => (
              <span key={t.label} className="glass" style={{ padding:"6px 14px", borderRadius:50,
                fontSize:"0.72rem", fontWeight:600, color:t.color, letterSpacing:"0.08em" }}>{t.label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
