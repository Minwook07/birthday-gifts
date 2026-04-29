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