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