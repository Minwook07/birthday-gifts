import { FlowerSummary } from "@/components/birthday/FlowerSummary";
import { BirthdayCard } from "@/components/birthday/BirthdayCard";
import HeroBanner from "@/components/birthday/HeroBanner";
import { PhotoMarqueeshow } from "@/components/birthday/PhotoMarqueeshow";

export default function HomePage() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

        .page-root {
          min-height: 100svh;
          background: #FDF6EE;
          position: relative;
          overflow-x: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        /* Subtle grain overlay on top of everything */
        .page-root::before {
          content: '';
          position: fixed;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
          z-index: 9999;
        }

        /* Section separators */
        .page-sep {
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        .page-sep svg {
          display: block;
          width: 100%;
        }

        /* Scroll reveal */
        @keyframes page-reveal {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .page-section {
          animation: page-reveal 0.8s cubic-bezier(.22,.68,0,1.2) both;
        }
        .page-section:nth-child(2) { animation-delay: 0.1s; }
        .page-section:nth-child(3) { animation-delay: 0.2s; }
        .page-section:nth-child(4) { animation-delay: 0.3s; }
        .page-section:nth-child(5) { animation-delay: 0.4s; }

        /* Marquee section background alternation */
        .page-marquee-bg {
          background: linear-gradient(180deg, #FDF6EE 0%, #FFF9F4 50%, #FDF6EE 100%);
        }
      `}</style>

            <div className="page-root">
                {/* <nav style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)", background: "#FDF6EEcc", borderBottom: "1px solid #E8B86D22" }}>
                    <Header />
                </nav> */}

                <main>
                    <section className="page-section">
                        <HeroBanner />
                    </section>

                    <div className="page-sep" style={{ marginTop: -2 }}>
                        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M0 0C240 48 480 48 720 24C960 0 1200 0 1440 24V48H0V0Z" fill="#FFF9F4" />
                        </svg>
                    </div>

                    <section className="page-section" style={{ background: "#FFF9F4", paddingTop: 16, paddingBottom: 16 }}>
                        <BirthdayCard />
                    </section>

                    <div className="page-sep">
                        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M0 24C240 0 480 48 720 24C960 0 1200 48 1440 24V48H0V24Z" fill="#FDF6EE" />
                        </svg>
                    </div>

                    <section className="page-section page-marquee-bg" style={{ paddingTop: 8, paddingBottom: 8 }}>
                        <PhotoMarqueeshow />
                    </section>

                    <div className="page-sep">
                        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M0 0C360 48 720 0 1080 24C1260 36 1380 12 1440 0V48H0V0Z" fill="#FDF0E4" />
                        </svg>
                    </div>

                    <section className="page-section" style={{ background: "#FDF0E4" }}>
                        <FlowerSummary />
                    </section>

                    <footer style={{
                        background: "#2C1810",
                        padding: "28px 24px",
                        textAlign: "center",
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        <p style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E8B86D", marginBottom: 6 }}>
                            ✦ May your day the luck one ✦
                        </p>
                        <p style={{ fontSize: 11, color: "#9B5840", letterSpacing: "0.1em" }}>
                            From 70 · 사랑해요 · Happy Birthday
                        </p>
                    </footer>
                </main>
            </div>
        </>
    );
}