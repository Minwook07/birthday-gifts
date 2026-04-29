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