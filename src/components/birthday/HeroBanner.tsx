export default function HeroBanner() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 row-start-2 items-center sm:items-start relative z-10 py-20">
            <div>
                <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 bg-clip-text text-transparent break-words">រីករាយថ្ងៃកំណើតមនុស្សពិសេស, 너</h1>
                <div className="text-xl md:text-2xl text-pink-600 font-medium">사랑해요, 자기야 💕</div>
            </div>

            <div
                className="flex justify-center mb-12 transform transition-all duration-1000 delay-500"
            >
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 rounded-3xl blur-sm opacity-75"></div>
                    <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                        <img
                            src="/mm.jpg"
                            alt="Birthday celebration"
                            className="rounded-2xl w-80 h-80 object-cover border-4 border-white shadow-lg"
                        />
                        <div className="absolute -top-2 -left-2 text-3xl">🎈</div>
                        <div className="absolute -top-2 -right-2 text-3xl">🎉</div>
                        <div className="absolute -bottom-2 -left-2 text-3xl">🌟</div>
                        <div className="absolute -bottom-2 -right-2 text-3xl">💖</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
