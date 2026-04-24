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
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes bc-confetti {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(85vh) rotate(540deg); opacity: 0; }
        }
        @keyframes bc-fadein {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bc-pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50%       { transform: scale(1.12); opacity: 0.15; }
        }
        @keyframes bc-spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bc-float-icon {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-8px) scale(1.08); }
        }

        .bc-card {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          max-width: 440px;
          margin: 0 auto;
          background: #FDF6EE;
          border: 1px solid #E8B86D44;
          border-radius: 28px;
          overflow: hidden;
          animation: bc-fadein 0.8s cubic-bezier(.22,.68,0,1.2) both;
        }
        .bc-header {
          background: linear-gradient(160deg, #2C1810 0%, #4A2518 100%);
          padding: 36px 32px 28px;
          text-align: center;
          position: relative;
        }
        .bc-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid #E8B86D;
          animation: bc-pulse-ring 3s ease-in-out infinite;
        }
        .bc-body {
          padding: 32px;
        }
        .bc-display {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          color: #F2C99A;
          line-height: 1.1;
        }
        .bc-icon-wrap {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4845A, #E8B86D);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin: 0 auto 20px;
          animation: bc-float-icon 4s ease-in-out infinite;
        }
        .bc-quote-box {
          background: linear-gradient(135deg, #FFF9F4, #FDF0E4);
          border: 1px solid #E8B86D33;
          border-radius: 16px;
          padding: 20px;
          position: relative;
        }
        .bc-quote-box::before {
          content: '"';
          position: absolute;
          top: -12px;
          left: 20px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 56px;
          color: #E8B86D;
          line-height: 1;
        }
        .bc-btn {
          width: 100%;
          background: linear-gradient(135deg, #C0614A, #D4845A);
          color: #FDF6EE;
          border: none;
          border-radius: 14px;
          padding: 16px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-style: italic;
          font-weight: 300;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: all 0.25s cubic-bezier(.22,.68,0,1.2);
          position: relative;
          overflow: hidden;
        }
        .bc-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #E8B86D22, transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .bc-btn:hover { transform: scale(1.02); box-shadow: 0 8px 32px #D4845A44; }
        .bc-btn:hover::after { opacity: 1; }
        .bc-btn:active { transform: scale(0.97); }

        .bc-footer {
          text-align: center;
          padding: 0 32px 24px;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9B5840;
        }
        .bc-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4845A44, transparent);
          margin: 24px 0;
        }
        .bc-emoji-row {
          display: flex;
          justify-content: center;
          gap: 14px;
        }
        .bc-emoji-row span {
          animation: bc-float-icon ease-in-out infinite;
          font-size: 20px;
        }
        .bc-top-stripe {
          height: 3px;
          background: linear-gradient(90deg, #C0614A, #E8B86D, #C0614A);
        }

        .bc-spin-deco {
          position: absolute;
          width: 100px; height: 100px;
          border: 1px solid #E8B86D22;
          border-radius: 50%;
          top: -20px; right: -20px;
          animation: bc-spin-slow 12s linear infinite;
        }
      `}</style>

            <div className="container mx-auto px-4 py-8">
                <div className="bc-card">
                    <div className="bc-top-stripe" />

                    {/* Confetti layer */}
                    {showConfetti && (
                        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 50, overflow: "hidden" }}>
                            {particles.map((p, i) => <Particle key={i} {...p} />)}
                        </div>
                    )}

                    {/* Dark header */}
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

                    {/* Body */}
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