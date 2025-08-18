import { Heart, Star, Snowflake, Leaf, PartyPopper } from "lucide-react";
export default function HeroBanner() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 items-center sm:items-start relative z-10 py-20">

                <div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-normal lg:leading-30 bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 bg-clip-text text-transparent break-words">រីករាយថ្ងៃកំណើតមនុស្សពិសេស, <br /> 자기야</h1>
                    <div className="text-xl md:text-2xl text-pink-600 font-medium">老师, 你好 <Heart className="inline mr-2" size={35} fill="pink" /></div>
                </div>

                <div
                    className="flex justify-center lg:justify-end mb-12 transform transition-all duration-1000 delay-500"
                >
                    <div className="relative max-w-full sm:max-w-md mx-auto lg:mx-0">
                        <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-3xl blur-sm opacity-75"></div>
                        <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                            <img
                                src="/mm.JPG"
                                alt="Birthday celebration"
                                className="rounded-2xl w-full h-auto border-4 border-white shadow-lg"
                            />
                            {/* <div className="absolute -top-2 -left-2 text-3xl">🎈</div> */}
                            <div className="absolute -top-2 -left-2 text-3xl">
                                <Star color="purple" size={48} />
                            </div>
                            <div className="absolute -top-2 -right-2 text-3xl">
                                <PartyPopper color="purple" size={48} />
                            </div>
                            <div className="absolute -bottom-2 -left-2 text-3xl">
                                <Leaf color="purple" size={48} />
                            </div>
                            <div className="absolute -bottom-2 -right-2 text-3xl">
                                <Snowflake color="purple" size={48} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
