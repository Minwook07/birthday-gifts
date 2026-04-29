"use client";
import { useState, useEffect } from "react";

const CONFETTI_COLORS = ["#D4845A", "#E8B86D", "#C0614A", "#F2C99A", "#2C1810", "#9B5840"];

function Particle({ x, color, delay }: { x: number; color: string; delay: number }) {
    return (
        <div
            style={{
                position: "absolute",
                left: `${x}%`,
                top: 0,
                width: 6,
                height: 6,
                borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                background: color,
                animation: `bc-confetti ${1.4 + Math.random() * 1.2}s ease-in ${delay}s both`,
                transform: `rotate(${Math.random() * 360}deg)`,
            }}
        />
    );
}

export function BirthdayCard() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [particles, setParticles] = useState<{ x: number; color: string; delay: number }[]>([]);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setRevealed(true), 300);
        return () => clearTimeout(t);
    }, []);

    const celebrate = () => {
        const pts = Array.from({ length: 48 }, () => ({
            x: Math.random() * 100,
            color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
            delay: Math.random() * 0.6,
        }));
        setParticles(pts);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3500);
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="bc-card">
                    <div className="bc-top-stripe" />

                    {showConfetti && (
                        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 50, overflow: "hidden" }}>
                            {particles.map((p, i) => <Particle key={i} {...p} />)}
                        </div>
                    )}

                    <div className="bc-header">
                        <div className="bc-ring" style={{ width: 160, height: 160, top: -40, left: -40, opacity: 0.2 }} />
                        <div className="bc-ring" style={{ width: 80, height: 80, bottom: -20, right: 20, opacity: 0.15, animationDelay: "1.5s" }} />
                        <div className="bc-spin-deco" />

                        <div className="bc-icon-wrap">🌸</div>

                        <h1 className="bc-display" style={{ fontSize: "clamp(28px, 6vw, 42px)", fontFamily: 'Kantumruy Pro' }}>
                            រីករាយថ្ងៃកំណើត,
                        </h1>
                        <h1 className="bc-display" style={{ fontSize: "clamp(24px, 5vw, 36px)", color: "#E8B86D", marginTop: 4 }}>
                            My Lotus 🌸
                        </h1>

                        <div className="bc-emoji-row" style={{ marginTop: 20 }}>
                            {["🌸", "💐", "🧡", "🌷", "🌸"].map((e, i) => (
                                <span key={i} style={{ animationDuration: `${2 + i * 0.3}s`, animationDelay: `${i * 0.15}s` }}>{e}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bc-body">
                        <div className="bc-quote-box">
                            <p style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontStyle: "italic",
                                fontSize: 16,
                                color: "#5A2E1A",
                                lineHeight: 1.85,
                                margin: "12px 0 0",
                            }}>
                                Like the lotus that blooms pure in the water, like the sunflower
                                facing the sun — may your life always be filled with grace, love, and beauty.
                                Happy Birthday, my dearest!
                            </p>
                        </div>

                        <div className="bc-divider" />

                        <p style={{ textAlign: "center", fontSize: 14, color: "#9B5840", fontFamily: "'DM Sans'", marginBottom: 20 }}>
                            Wishing you love as bright as orange, beauty as pure as lotus petals,
                            and joy as endless as our moments together.
                        </p>

                        <button className="bc-btn" onClick={celebrate} style={{ fontFamily: 'Kantumruy Pro' }}>
                            🌸 &nbsp; 스레이마오 &nbsp; 🌸
                        </button>
                    </div>

                    <div className="bc-footer">
                        From 70, with endless love &nbsp;💕
                    </div>
                </div>
            </div>
        </>
    );
}