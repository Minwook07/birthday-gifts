"use client";
import { useEffect, useState, useRef } from "react";

const PETALS = [
    { color: "#D4845A", left: "5%", size: 10, dur: 7.2, delay: 0, rot: 25 },
    { color: "#E8B86D", left: "18%", size: 8, dur: 9.1, delay: 1.3, rot: -40 },
    { color: "#C0614A", left: "32%", size: 12, dur: 8.4, delay: 0.6, rot: 60 },
    { color: "#D4845A", left: "48%", size: 9, dur: 6.9, delay: 2.1, rot: -20 },
    { color: "#E8B86D", left: "63%", size: 11, dur: 8.8, delay: 0.9, rot: 45 },
    { color: "#C0614A", left: "77%", size: 8, dur: 7.5, delay: 1.7, rot: -55 },
    { color: "#D4845A", left: "91%", size: 10, dur: 9.3, delay: 0.3, rot: 30 },
];

export default function HeroBanner() {
    const [mounted, setMounted] = useState(false);
    const [imgErr, setImgErr] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hb-root {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          background: #FDF6EE;
          overflow: hidden;
        }
        .hb-noise {
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
        }
        .hb-blob1 {
          position: absolute;
          width: 520px; height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, #F2C99A44 0%, transparent 70%);
          top: -120px; right: -80px;
          pointer-events: none;
        }
        .hb-blob2 {
          position: absolute;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: radial-gradient(circle, #C0614A22 0%, transparent 70%);
          bottom: -60px; left: -60px;
          pointer-events: none;
        }

        @keyframes hb-petal {
          0%   { transform: translateY(-40px) rotate(0deg) scale(0); opacity: 0; }
          8%   { opacity: 0.85; transform: scale(1); }
          90%  { opacity: 0.5; }
          100% { transform: translateY(110vh) rotate(720deg) scale(0.6); opacity: 0; }
        }
        .hb-petal {
          position: absolute;
          top: 0;
          border-radius: 60% 10% 60% 10%;
          animation: hb-petal ease-in infinite;
          pointer-events: none;
        }

        @keyframes hb-rise {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hb-rise { animation: hb-rise 0.9s cubic-bezier(.22,.68,0,1.2) both; }

        @keyframes hb-float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%       { transform: translateY(-10px) rotate(1deg); }
        }
        .hb-float { animation: hb-float 5s ease-in-out infinite; }

        @keyframes hb-glow-pulse {
          0%, 100% { box-shadow: 0 0 0 4px #E8B86D30, 0 0 40px #D4845A25; }
          50%       { box-shadow: 0 0 0 8px #E8B86D50, 0 0 60px #D4845A40; }
        }

        .hb-display {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          color: #2C1810;
          line-height: 1.05;
        }

        .hb-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9B5840;
          border: 1px solid #D4845A55;
          border-radius: 999px;
          padding: 5px 16px;
          background: #FFF9F4;
        }

        .hb-divider {
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4845A, transparent);
        }

        .hb-quote {
          border-left: 2px solid #E8B86D;
          padding-left: 16px;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 15px;
          color: #7A4030;
          line-height: 1.75;
        }

        .hb-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2C1810;
          color: #E8B86D;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 9px 18px;
          border-radius: 999px;
          font-weight: 500;
        }

        .hb-photo-wrap {
          position: relative;
          width: 260px;
          height: 320px;
          flex-shrink: 0;
        }
        .hb-photo-frame {
          position: absolute;
          inset: 0;
          border-radius: 140px 140px 90px 90px;
          overflow: hidden;
          animation: hb-glow-pulse 3s ease-in-out infinite;
          border: 2px solid #E8B86D55;
        }
        .hb-photo-accent {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 1.5px solid #D4845A40;
          border-radius: 50%;
          bottom: -20px;
          right: -20px;
        }
        .hb-photo-accent2 {
          position: absolute;
          width: 50px;
          height: 50px;
          border: 1px solid #E8B86D50;
          border-radius: 50%;
          top: -15px;
          left: -15px;
        }

        .hb-stripe {
          height: 3px;
          background: linear-gradient(90deg, #C0614A, #E8B86D, #D4845A, #E8B86D, #C0614A);
          background-size: 300% 100%;
          animation: hb-shimmer 4s linear infinite;
        }
        @keyframes hb-shimmer {
          0%   { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        .hb-floral-line {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #D4845A;
          font-size: 13px;
          opacity: 0.7;
        }
        .hb-floral-line::before,
        .hb-floral-line::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4845A88, transparent);
        }
      `}</style>

            <section className="hb-root">
                <div className="hb-noise" />
                <div className="hb-blob1" />
                <div className="hb-blob2" />

                {/* Falling petals */}
                {PETALS.map((p, i) => (
                    <div
                        key={i}
                        className="hb-petal"
                        style={{
                            left: p.left,
                            width: p.size,
                            height: p.size * 1.4,
                            background: p.color,
                            animationDuration: `${p.dur}s`,
                            animationDelay: `${p.delay}s`,
                            transform: `rotate(${p.rot}deg)`,
                            opacity: 0.75,
                        }}
                    />
                ))}

                <div className="container mx-auto px-6 md:px-12 py-20 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Left */}
                        <div className="space-y-7">
                            <div className="hb-rise" style={{ animationDelay: "0.1s" }}>
                                <span className="hb-tag" style={{ fontFamily: 'Kantumruy Pro' }}>✦ ថ្ងៃកំណើតរបស់អ្នក</span>
                            </div>

                            <div className="hb-rise space-y-3" style={{ animationDelay: "0.25s" }}>
                                <h1 className="hb-display" style={{ fontSize: "clamp(44px, 7vw, 80px)" }}>
                                    Happy Birthday,
                                </h1>
                                <h1 className="hb-display" style={{ fontSize: "clamp(38px, 6vw, 68px)", color: "#C0614A" }}>
                                    자기야 ♡
                                </h1>
                            </div>

                            <div className="hb-rise hb-divider" style={{ animationDelay: "0.4s" }} />

                            <div className="hb-rise" style={{ animationDelay: "0.5s" }}>
                                <p style={{ fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9B5840", fontWeight: 400 }}>
                                    老师, 你好 &nbsp;·&nbsp; With endless love
                                </p>
                            </div>

                            <div className="hb-rise" style={{ animationDelay: "0.65s" }}>
                                <blockquote className="hb-quote">
                                    Like <span style={{ fontFamily: 'Kantumruy Pro' }}>ផ្កាឈូករ័ត្ន</span> blooming pure from still water —
                                    may your dream of opening a flower shop blossom into
                                    the most beautiful reality. 🌸
                                </blockquote>
                            </div>

                            <div className="hb-rise flex flex-wrap gap-3" style={{ animationDelay: "0.8s" }}>
                                <span className="hb-badge">
                                    04-May-2026
                                </span>
                                <span style={{
                                    display: "inline-flex", alignItems: "center", gap: 6,
                                    fontSize: 12, color: "#9B5840", border: "1px solid #D4845A44",
                                    borderRadius: 999, padding: "8px 16px", letterSpacing: "0.08em"
                                }}>
                                    From 70
                                </span>
                            </div>
                        </div>

                        {/* Right — photo */}
                        <div className="flex justify-center md:justify-end">
                            <div className="hb-float">
                                <div className="hb-photo-wrap">
                                    <div className="hb-photo-accent" />
                                    <div className="hb-photo-accent2" />
                                    <div className="hb-photo-frame">
                                        {!imgErr ? (
                                            <img
                                                src="/mm.JPG"
                                                alt="Birthday"
                                                onError={() => setImgErr(true)}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        ) : (
                                            <div style={{
                                                width: "100%", height: "100%",
                                                background: "linear-gradient(135deg, #F2C99A, #D4845A)",
                                                display: "flex", flexDirection: "column",
                                                alignItems: "center", justifyContent: "center",
                                                gap: 8, color: "#2C1810"
                                            }}>
                                                <span style={{ fontSize: 48 }}>🌸</span>
                                                <span style={{ fontSize: 12, fontFamily: "'DM Sans'", letterSpacing: "0.1em", opacity: 0.7 }}>your photo here</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom floral line */}
                    <div className="hb-rise mt-16" style={{ animationDelay: "1s" }}>
                        <div className="hb-floral-line">
                            🌸 &nbsp; 🌺 &nbsp; 🌼 &nbsp; 🧡 &nbsp; 🌼 &nbsp; 🌺 &nbsp; 🌸
                        </div>
                    </div>
                </div>

                <div className="hb-stripe absolute bottom-0 left-0 right-0" />
            </section>
        </>
    );
}