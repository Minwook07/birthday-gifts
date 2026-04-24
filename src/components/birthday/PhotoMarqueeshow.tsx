import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

const reviews = [
    { id: 1, img: "/sm-1.png" },
    { id: 2, img: "/mm.JPG" },
    { id: 3, img: "/d2.JPG" },
    { id: 4, img: "/flowershop.png" },
    { id: 5, img: "/d1.png" },
    { id: 6, img: "/d3.png" },
];

const SHAPES = ["180px 180px 120px 120px", "50%", "140px 80px 140px 80px", "50%", "120px 140px 80px 140px", "180px 120px 180px 60px"];

const PhotoCard = ({ img, index }: { img: string; index: number }) => {
    return (
        <>
            <style>{`
        @keyframes pm-hover-lift {
          to { transform: translateY(-6px) scale(1.03); }
        }
        .pm-card {
          position: relative;
          cursor: pointer;
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(.22,.68,0,1.2), box-shadow 0.4s ease;
        }
        .pm-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 20px 48px #2C181022;
        }
        .pm-card:hover .pm-overlay { opacity: 1; }
        .pm-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, #D4845A22, #2C181055);
          opacity: 0;
          transition: opacity 0.35s ease;
          border-radius: inherit;
        }
        .pm-tag {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: #2C1810cc;
          color: #E8B86D;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 999px;
          white-space: nowrap;
          font-family: 'DM Sans', sans-serif;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .pm-card:hover .pm-tag { opacity: 1; }
      `}</style>
            <figure
                className="pm-card"
                style={{
                    width: 200,
                    height: 240,
                    borderRadius: SHAPES[index % SHAPES.length],
                    overflow: "hidden",
                    border: "1.5px solid #E8B86D33",
                }}
            >
                <img
                    src={img}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div className="pm-overlay" />
                <span className="pm-tag">🌸 moment</span>
            </figure>
        </>
    );
};

export function PhotoMarqueeshow() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&family=DM+Sans:wght@300;400&display=swap');

        .pm-section {
          padding: 64px 0;
          position: relative;
          overflow: hidden;
        }
        .pm-eyebrow {
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9B5840;
          margin-bottom: 12px;
        }
        .pm-heading {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(28px, 5vw, 52px);
          color: #2C1810;
          text-align: center;
          margin-bottom: 48px;
          line-height: 1.15;
        }
        .pm-fade-l {
          pointer-events: none;
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 140px;
          background: linear-gradient(to right, #FDF6EE, transparent);
          z-index: 10;
        }
        .pm-fade-r {
          pointer-events: none;
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 140px;
          background: linear-gradient(to left, #FDF6EE, transparent);
          z-index: 10;
        }
        .pm-divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4845A, transparent);
          margin: 12px auto 0;
        }
      `}</style>

            <section className="pm-section">
                <p className="pm-eyebrow">memories & flowers</p>
                <h2 className="pm-heading">
                    꼬마아가씨, 사랑해
                </h2>
                <div className="pm-divider" style={{ marginBottom: 40 }} />

                <div style={{ position: "relative" }}>
                    <div className="pm-fade-l" />
                    <div className="pm-fade-r" />

                    <Marquee pauseOnHover className="[--duration:28s]">
                        {reviews.map((r, i) => (
                            <PhotoCard key={r.id} img={r.img} index={i} />
                        ))}
                    </Marquee>
                </div>
            </section>
        </>
    );
}