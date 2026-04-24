"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const summaryImg = [
    { id: 1, img: "/sunflower/d.png" },
    { id: 2, img: "/sunflower/d2.png" },
    { id: 3, img: "/sunflower/d1.png" },
    { id: 4, img: "/sunflower/d4.png" },
    { id: 5, img: "/sunflower/d3.png" },
    { id: 6, img: "/sunflower/d5.png" },
];

const WISHES = [
    { icon: "🌻", text: "May your heart always bloom with joy and love." },
    { icon: "🎂", text: "Another year older, wiser, and more beautiful than ever." },
    { icon: "✨", text: "May your dreams shine as bright as the stars above." },
    { icon: "🌸", text: "祝你生日快樂 · 生日快樂！, 고마워 자기야" },
];

export function FlowerSummary() {
    const [current, setCurrent] = useState(0);
    const [open, setOpen] = useState(false);

    const next = () => setCurrent((p) => (p + 1) % summaryImg.length);
    const prev = () => setCurrent((p) => (p - 1 + summaryImg.length) % summaryImg.length);

    const openAt = (i: number) => {
        setCurrent(i);
        setOpen(true);
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .fs-section {
          font-family: 'DM Sans', sans-serif;
          padding: 80px 0 96px;
          background: linear-gradient(160deg, #FDF6EE 0%, #FFF9F4 50%, #FDF0E4 100%);
          position: relative;
          overflow: hidden;
        }
        .fs-bg-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .fs-eyebrow {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9B5840;
          text-align: center;
          margin-bottom: 10px;
        }
        .fs-heading {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(32px, 6vw, 64px);
          color: #2C1810;
          text-align: center;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .fs-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(18px, 3vw, 28px);
          color: #C0614A;
          text-align: center;
          margin-bottom: 60px;
        }
        .fs-divider {
          width: 60px; height: 1px;
          background: linear-gradient(90deg, transparent, #D4845A, transparent);
          margin: 0 auto 60px;
        }

        /* Desktop grid */
        .fs-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .fs-grid-item {
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 1;
          cursor: pointer;
          position: relative;
          border: 1.5px solid #E8B86D22;
          transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease;
        }
        .fs-grid-item:first-child {
          grid-column: span 2;
          aspect-ratio: 2/1;
          border-radius: 28px;
        }
        .fs-grid-item:hover {
          transform: scale(1.025) translateY(-4px);
          box-shadow: 0 16px 40px #2C181022;
        }
        .fs-grid-item img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .fs-grid-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, transparent 50%, #2C181055);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .fs-grid-item:hover .fs-grid-overlay { opacity: 1; }

        /* Mobile slider */
        .fs-slider-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 4/3;
          cursor: pointer;
          border: 1.5px solid #E8B86D33;
          box-shadow: 0 12px 40px #2C181018;
        }
        .fs-slider-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: opacity 0.35s ease;
        }
        .fs-slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px; height: 40px;
          background: #2C1810cc;
          border: none;
          border-radius: 50%;
          color: #E8B86D;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .fs-slider-btn:hover { background: #4A2518ee; }
        .fs-slider-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 16px;
        }
        .fs-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #D4845A44;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .fs-dot.active {
          background: #C0614A;
          width: 20px;
          border-radius: 3px;
        }

        /* Wishes */
        .fs-wish-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 640px) {
          .fs-wish-grid { grid-template-columns: 1fr; }
        }
        .fs-wish-card {
          background: #fff;
          border: 1px solid #E8B86D33;
          border-radius: 16px;
          padding: 18px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .fs-wish-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px #D4845A18;
        }
        .fs-wish-icon {
          width: 40px; height: 40px;
          background: linear-gradient(135deg, #FDF0E4, #F2C99A);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        .fs-wish-text {
          font-size: 14px;
          color: #5A2E1A;
          line-height: 1.65;
          font-weight: 300;
        }

        .fs-cta {
          text-align: center;
          margin-top: 48px;
        }
        .fs-cta-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(22px, 4vw, 38px);
          color: #C0614A;
          font-weight: 300;
        }
        .fs-cta-sub {
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9B5840;
          margin-top: 8px;
        }
      `}</style>

            <section className="fs-section">
                {/* BG decorations */}
                <div className="fs-bg-circle" style={{ width: 400, height: 400, background: "radial-gradient(circle, #F2C99A18, transparent 70%)", top: -100, right: -100 }} />
                <div className="fs-bg-circle" style={{ width: 280, height: 280, background: "radial-gradient(circle, #C0614A12, transparent 70%)", bottom: -60, left: -60 }} />

                <div className="container mx-auto px-6 md:px-12">
                    <p className="fs-eyebrow">with love, from 70</p>
                    <h2 className="fs-heading">너는 나의 sunshine,</h2>
                    <p className="fs-sub">나의 sunflower, 나의 happiness.</p>
                    <div className="fs-divider" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        {/* Photos */}
                        <div>
                            {/* Desktop bento grid */}
                            <div className="hidden md:grid fs-grid">
                                {summaryImg.map((item, i) => (
                                    <div key={item.id} className="fs-grid-item" onClick={() => openAt(i)}>
                                        <img src={item.img} alt="" />
                                        <div className="fs-grid-overlay" />
                                    </div>
                                ))}
                            </div>

                            {/* Mobile slider */}
                            <div className="md:hidden">
                                <div className="fs-slider-wrap" onClick={() => openAt(current)}>
                                    <img className="fs-slider-img" src={summaryImg[current].img} alt="" />
                                    <button className="fs-slider-btn" style={{ left: 12 }} onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
                                    <button className="fs-slider-btn" style={{ right: 12 }} onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
                                </div>
                                <div className="fs-slider-dots">
                                    {summaryImg.map((_, i) => (
                                        <div key={i} className={`fs-dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Wishes */}
                        <div>
                            <div className="fs-wish-grid">
                                {WISHES.map((w, i) => (
                                    <div key={i} className="fs-wish-card">
                                        <div className="fs-wish-icon">{w.icon}</div>
                                        <p className="fs-wish-text">{w.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="fs-cta">
                                <p className="fs-cta-text">🎉 生日快樂！🎉</p>
                                <p className="fs-cta-sub">forever yours</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={current}
                    slides={summaryImg.map((item) => ({ src: item.img }))}
                    plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
                />
            </section>
        </>
    );
}