"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { AudioLines, Wind, Flame, PartyPopper } from "lucide-react"

export default function BlowOutCandle() {
    const router = useRouter()
    const [isBlownOut, setIsBlownOut] = useState(false)
    const [isBlowing, setIsBlowing] = useState(false)
    const [isListening, setIsListening] = useState(false)
    const recognitionRef = useRef<any>(null)

    useEffect(() => {
        if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
            recognitionRef.current = new SpeechRecognition()
            recognitionRef.current.continuous = true
            recognitionRef.current.interimResults = true
            recognitionRef.current.lang = "en-US"

            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase()
                console.log("[v0] Voice detected:", transcript)

                // Detect blowing sounds or words
                if (
                    transcript.includes("blow") ||
                    transcript.includes("whoosh") ||
                    transcript.includes("hoo") ||
                    transcript.includes("phoo")
                ) {
                    handleBlowCandle()
                }
            }

            recognitionRef.current.onerror = (event: any) => {
                console.log("[v0] Speech recognition error:", event.error)
                setIsListening(false)
            }
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop()
            }
        }
    }, [])

    const handleBlowCandle = () => {
        if (!isBlownOut) {
            setIsBlowing(true)
            if (recognitionRef.current && isListening) {
                recognitionRef.current.stop()
                setIsListening(false)
            }
            setTimeout(() => {
                setIsBlownOut(true)
                setIsBlowing(false)
                setTimeout(() => {
                    router.push("/home")
                }, 100)
            }, 500)
        }
    }

    const handleRelight = () => {
        setIsBlownOut(false)
    }

    const toggleVoiceListening = () => {
        if (!recognitionRef.current) {
            alert("Voice recognition not supported in this browser")
            return
        }

        if (isListening) {
            recognitionRef.current.stop()
            setIsListening(false)
        } else {
            recognitionRef.current.start()
            setIsListening(true)
        }
    }

    return (
        <div className="min-h-screen bg-purple-900 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
            <div className="text-center">
                <div className="relative">
                    {/* Cake Base */}
                    <div className="relative mx-auto">
                        {/* Bottom Cake Layer */}
                        <div className="w-72 h-24 bg-purple-900 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-lg mx-auto relative shadow-xl border-2 border-amber-700">
                            {/* Frosting */}
                            <div className="absolute -top-2 left-0 right-0 h-6 bg-purple-900 bg-gradient-to-r from-pink-300 via-pink-200 to-pink-300 rounded-t-lg border-2 border-pink-400"></div>
                            {/* Decorative dots */}
                            <div className="absolute top-2 left-4 w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="absolute top-2 right-4 w-3 h-3 bg-blue-400 rounded-full"></div>
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>

                        {/* Top Cake Layer */}
                        <div className="w-56 h-20 bg-purple-900 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 rounded-lg mx-auto relative -mt-2 shadow-xl border-2 border-orange-500">
                            {/* Frosting */}
                            <div className="absolute -top-2 left-0 right-0 h-6 bg-purple-900 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 rounded-t-lg border-2 border-blue-400"></div>
                            {/* Decorative swirls */}
                            <div className="absolute top-1 left-6 w-4 h-2 bg-white/80 rounded-full"></div>
                            <div className="absolute top-1 right-6 w-4 h-2 bg-white/80 rounded-full"></div>
                            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-white/80 rounded-full"></div>
                        </div>

                        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                            {/* Wick - more realistic black wick */}
                            <div className="w-1 h-3 bg-gray-800 mx-auto -mt-1 rounded-sm"></div>
                            {/* Candle stick - more realistic proportions and colors */}
                            <div className="w-4 h-16 bg-purple-900 bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-sm mx-auto shadow-lg border border-red-700 relative">
                                {/* Candle texture lines */}
                                <div className="absolute top-2 left-0 right-0 h-px bg-red-700/30"></div>
                                <div className="absolute top-6 left-0 right-0 h-px bg-red-700/30"></div>
                                <div className="absolute top-10 left-0 right-0 h-px bg-red-700/30"></div>
                                <div className="absolute top-14 left-0 right-0 h-px bg-red-700/30"></div>
                            </div>

                            {/* Melted wax drips */}
                            <div className="absolute top-0 left-0 w-1 h-3 bg-red-300/60 rounded-full"></div>
                            <div className="absolute top-2 right-0 w-1 h-2 bg-red-300/60 rounded-full"></div>



                            {/* Flame - corrected to be right-side up */}
                            {!isBlownOut && (
                                <div
                                    className={`absolute -top-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${isBlowing ? "animate-pulse scale-75 opacity-50" : ""}`}
                                >
                                    <div className="relative">
                                        {/* Outer flame - teardrop shape pointing up */}
                                        <div
                                            className="w-5 h-8 bg-gradient-to-t from-orange-600 via-yellow-400 to-yellow-200 rounded-full animate-pulse shadow-lg"
                                            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
                                        ></div>
                                        {/* Inner flame - smaller teardrop */}
                                        <div
                                            className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-5 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-100 rounded-full animate-pulse"
                                            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
                                        ></div>
                                        {/* Flame core - bright center */}
                                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-yellow-100 rounded-full animate-pulse"></div>
                                        {/* Flame glow */}
                                        <div className="absolute -inset-3 bg-yellow-300/20 rounded-full blur-md animate-pulse"></div>
                                    </div>
                                </div>
                            )}

                            {/* Smoke when blown out */}
                            {isBlownOut && (
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-1 h-10 bg-gradient-to-t from-gray-500/70 to-transparent rounded-full animate-pulse"></div>
                                    <div className="absolute top-0 left-1 w-1 h-8 bg-gradient-to-t from-gray-400/50 to-transparent rounded-full animate-pulse delay-100"></div>
                                    <div className="absolute top-2 left-2 w-1 h-6 bg-gradient-to-t from-gray-300/30 to-transparent rounded-full animate-pulse delay-200"></div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-20 space-y-4">
                        {!isBlownOut ? (
                            <div className="space-y-3">
                                <button
                                    onClick={handleBlowCandle}
                                    disabled={isBlowing}
                                    className="px-8 py-3 bg-purple-900 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {isBlowing ?
                                        (
                                            <>
                                                <Wind className="inline w-5 h-5 mr-2" />កំពុងផ្លុំ...
                                            </>
                                        )
                                        : (
                                            <>
                                                <Wind className="inline w-5 h-5 mr-2" />ផ្លុំទៀន
                                            </>
                                        )}
                                </button>

                                <button
                                    onClick={toggleVoiceListening}
                                    className={`px-6 py-2 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 cursor-pointer ${isListening
                                        ? "bg-purple-900 bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse"
                                        : "bg-purple-900 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
                                        }`}
                                >
                                    {isListening ? (
                                        <>
                                            <AudioLines className="inline w-5 h-5 mr-2" /> កំពុងស្តាប់... (និយាយ 'blow')
                                        </>
                                    ) : (
                                        <>
                                            <AudioLines className="inline w-5 h-5 mr-2" /> ប្រើសម្លេងសម្រាប់ផ្លុំ
                                        </>
                                    )}
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={handleRelight}
                                className="px-8 py-3 bg-purple-900 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 cursor-pointer"
                            >
                                <Flame size={30} className="inline mr-2" /> បំភ្លឺទៀនឡើងវិញ
                            </button>
                        )}
                    </div>

                    {/* Status Message */}
                    <div className="mt-6">
                        {isBlownOut ? (
                            <p className="text-2xl text-white animate-bounce"> <PartyPopper className="inline w-5 h-5 mr-2" /> ប៉ងបំណងប្រាថ្នា! <PartyPopper className="inline w-5 h-5 mr-2" /> </p>
                        ) : isListening ? (
                            <p className="text-xl text-green-300 animate-pulse"><AudioLines className="inline w-5 h-5 mr-2" /> និយាយ "blow" ដើម្បីផ្លុំពន្លត់ទៀន!</p>
                        ) : (
                            <p className="text-xl text-white/80">ចុចប៊ូតុងដើម្បីផ្លុំទៀន ឬប្រើសម្លេង (phoo/hoo/whoosh/blow)</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
