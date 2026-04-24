"use client";
import { useState, useEffect } from "react";

const translations = [
    {
        lang: "zh",
        question: "你的生日是什么时候？",
        answer: "生日是9月19日和5月4日。",
    },
    {
        lang: "ko",
        question: "생일이 언제입니까?",
        answer: "생일은 9월 19일과 5월 4일입니다.",
    },
    {
        lang: "km",
        question: "ថ្ងៃកំណើតរបស់អ្នកនៅពេលណា?",
        answer: "ថ្ងៃទី 19 ខែកញ្ញា និងថ្ងៃទី 4 ខែឧសភា 🌸",
    },
];

export function BirthdayInfo() {
    const [idx, setIdx] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const iv = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIdx((p) => (p + 1) % translations.length);
                setVisible(true);
            }, 380);
        }, 3200);
        return () => clearInterval(iv);
    }, []);

    const cur = translations[idx];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,500&family=DM+Sans:wght@300;400&display=swap');

        @keyframes bi-fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bi-fade-down {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-10px); }
        }
        .bi-visible {
          animation: bi-fade-up 0.38s cubic-bezier(.22,.68,0,1.2) both;
        }
        .bi-hidden {
          animation: bi-fade-down 0.38s ease both;
        }
        .bi-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #D4845A33;
          transition: all 0.35s ease;
          cursor: pointer;
        }
        .bi-dot.active {
          background: #C0614A;
          width: 22px;
          border-radius: 4px;
        }
      `}</style>

            <div style={{
                background: "linear-gradient(180deg, #FDF0E4 0%, #FDF6EE 100%)",
                borderTop: "1px solid #E8B86D33",
                padding: "28px 24px 24px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}>
                {/* Decorative line top */}
                <div style={{
                    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                    width: 60, height: 2,
                    background: "linear-gradient(90deg, transparent, #D4845A, transparent)",
                }} />

                <div className={visible ? "bi-visible" : "bi-hidden"}>
                    {/* Question */}
                    <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontStyle: "italic",
                        fontWeight: 300,
                        fontSize: "clamp(18px, 3.5vw, 28px)",
                        color: "#2C1810",
                        lineHeight: 1.3,
                        marginBottom: 8,
                    }}>
                        {cur.question}
                    </p>

                    {/* Answer */}
                    <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "clamp(14px, 2.5vw, 17px)",
                        color: "#7A4030",
                        fontWeight: 300,
                        letterSpacing: "0.02em",
                    }}>
                        {cur.answer}
                    </p>
                </div>

                {/* Dots */}
                <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 18 }}>
                    {translations.map((_, i) => (
                        <div
                            key={i}
                            className={`bi-dot ${i === idx ? "active" : ""}`}
                            onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true); }, 380); }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}