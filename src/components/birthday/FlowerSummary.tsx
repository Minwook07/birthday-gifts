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

export function FlowerSummary() {
    const [current, setCurrent] = useState(0);
    const [open, setOpen] = useState(false);

    const nextImage = () => {
        setCurrent((prev) => (prev + 1) % summaryImg.length);
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl md:text-6xl text-center mb-10 text-orange-500 break-words">
                꼬마아가씨
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 items-center sm:items-start relative z-10">

                {/* Desktop */}
                <div className="hidden md:flex flex-wrap justify-center gap-4">
                    {summaryImg.map((item) => (
                        <div
                            key={item.id}
                            className="w-40 h-40 md:w-60 md:h-60 bg-amber-300 rounded-xl overflow-hidden shadow border-transparent hover:border-yellow-500 hover:border-4 cursor-pointer"
                            onClick={() => setOpen(true)}
                        >
                            <img
                                src={item.img}
                                alt={item.img}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Mobile view */}
                <div className="block md:hidden text-center order-2 md:order-1">
                    <div
                        className="w-100 h-64 mx-auto bg-amber-300 rounded-xl overflow-hidden shadow cursor-pointer"
                        onClick={() => setOpen(true)}
                    >
                        <img
                            src={summaryImg[current].img}
                            alt={summaryImg[current].img}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button
                        onClick={nextImage}
                        className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-lg active:scale-95 transition cursor-pointer"
                    >
                        បន្ទាប់
                    </button>

                </div>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={current}
                    slides={summaryImg.map((item) => ({ src: item.img }))}
                    plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
                />
                {/* Birthday Quote Section */}
                <div className="text-center mt-10 space-y-6 order-1 md:order-2 ">
                    <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 italic">
                        "너는 나의 sunshine, my sunflower, my happiness."
                    </h2>

                    <p className="text-lg md:text-xl text-gray-700">
                        🌻 May your heart always bloom with joy and love.
                    </p>

                    <p className="text-lg md:text-xl text-gray-700">
                        🎂 Another year older, wiser, and more beautiful than ever.
                    </p>

                    <p className="text-lg md:text-xl text-gray-700">
                        ✨ May your dreams shine as bright as the stars above.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700">
                        ✨ 祝你生日快樂
                    </p>

                    <p className="text-2xl font-bold text-orange-500 mt-6">
                        🎉 生日快樂! 🎉
                    </p>
                </div>

            </div>
        </div>
    );
}
