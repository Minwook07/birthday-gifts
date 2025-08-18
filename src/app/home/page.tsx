import { FlowerSummary } from "@/components/birthday/FlowerSummary";
import { BirthdayCard } from "../../components/birthday/BirthdayCard";
import HeroBanner from "../../components/birthday/HeroBanner";
import { PhotoMarqueeshow } from "@/components/birthday/PhotoMarqueeshow";

export default function HomePage() {
    return (
        <div className="relative min-h-screen bg-amber-50 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-10">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-6xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            transform: `rotate(${Math.random() * 360}deg)`,
                        }}
                    >
                        🌸
                    </div>
                ))}
            </div>

            <main className="relative z-10 space-y-10">                
                <HeroBanner />
                <BirthdayCard />
                <PhotoMarqueeshow />
                <FlowerSummary />
            </main>
        </div>
    );
}
