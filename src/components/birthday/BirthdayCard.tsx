"use client"

import { useState, useEffect } from "react"

export function BirthdayCard() {
    const [showConfetti, setShowConfetti] = useState(false)
    const [balloonAnimation, setBalloonAnimation] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setBalloonAnimation(true), 500)
        return () => clearTimeout(timer)
    }, [])

    const handleCelebrate = () => {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
    }

    return (
        <div className="relative container mx-auto px-4">
            {showConfetti && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(40)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-3 h-3 bg-pink-300 rounded-full animate-bounce opacity-80"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${1 + Math.random()}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {["bg-orange-300", "bg-pink-300", "bg-orange-400", "bg-pink-200", "bg-orange-200"].map((color, i) => (
                    <div
                        key={i}
                        className={`w-8 h-10 ${color} rounded-full relative transition-all duration-1000 ${balloonAnimation ? "animate-bounce" : "translate-y-10 opacity-0"
                            }`}
                        style={{
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: "2s",
                        }}
                    >
                        <div className="absolute top-full left-1/2 w-px h-8 bg-gray-400 transform -translate-x-1/2" />
                    </div>
                ))}
            </div>

            <div className="w-full max-w-md mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl border-2 border-orange-200 dark:border-orange-500 rounded-2xl">
                <div className="p-8 text-center space-y-6">
                    <div className="text-6xl animate-pulse">🌸</div>

                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
                            រីករាយថ្ងៃកំណើត, My Lotus 🌸
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Wishing you love as bright as orange, beauty as pure as lotus petals, and joy as endless as our moments together. 💖
                        </p>
                    </div>

                    <div className="flex justify-center space-x-4 text-2xl">
                        <span className="animate-bounce" style={{ animationDelay: "0s" }}>🌸</span>
                        <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>💐</span>
                        <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>🧡</span>
                        <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>🌷</span>
                        <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>🌸</span>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/30 dark:to-pink-900/30 rounded-lg p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-300 italic">
                            "Like the lotus that blooms pure in the water, like the sunflower facing the sun, may your life always be filled with grace, love, and beauty. Happy Birthday, my dearest!"
                        </p>
                    </div>

                    <div
                        onClick={handleCelebrate}
                        className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold py-3 rounded-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        🌸 Celebrate with Petals 🌸
                    </div>

                    <div className="text-xs text-gray-400">From me, with endless love 💕</div>
                </div>
            </div>
        </div>
    )
}
