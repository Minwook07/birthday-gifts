import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
const reviews = [
    {
        id: 1,
        img: "/sm-1.png",
    },
    {
        id: 2,
        img: "/mm.JPG",
    },
    {
        id: 3,
        img: "/flowershop.png",
    },
    {
        id: 4,
        img: "/vercel.svg",
    },
    {
        id: 5,
        img: "/window.svg",
    },
    {
        id: 6,
        img: "/globe.svg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
}: {
    img: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <div className="h-[250px] rounded-3xl overflow-hidden">
                    <img className="w-full h-full object-cover" alt="" src={img} />
                </div>
            </div>
        </figure>
    );
};

export function PhotoMarqueeshow() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((id) => (
                    <ReviewCard key={id.id} {...id} />
                ))}
            </Marquee>
            {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((id) => (
                    <ReviewCard key={id.id} {...id} />
                ))}
            </Marquee> */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
        </div>
    );
}
