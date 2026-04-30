"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { AudioLines, Wind, Flame, PartyPopper } from "lucide-react";

const PETALS = [
    { color: "#D4845A", left: "5%", size: 10, dur: 7.2, delay: 0, rot: 25 },
    { color: "#E8B86D", left: "18%", size: 8, dur: 9.1, delay: 1.3, rot: -40 },
    { color: "#C0614A", left: "32%", size: 12, dur: 8.4, delay: 0.6, rot: 60 },
    { color: "#D4845A", left: "48%", size: 9, dur: 6.9, delay: 2.1, rot: -20 },
    { color: "#E8B86D", left: "63%", size: 11, dur: 8.8, delay: 0.9, rot: 45 },
    { color: "#C0614A", left: "77%", size: 8, dur: 7.5, delay: 1.7, rot: -55 },
    { color: "#D4845A", left: "91%", size: 10, dur: 9.3, delay: 0.3, rot: 30 },
];

export default function BlowOutCandle() {
    const router = useRouter();
    const [isBlownOut, setIsBlownOut] = useState(false);
    const [isBlowing, setIsBlowing] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const micStreamRef = useRef<MediaStream | null>(null);
    const animationRef = useRef<number | null>(null);

    // --- FIXED BLOW/SOUND LOGIC (NO CHANGES) ---
    useEffect(() => {
        if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.lang = "en-US";

            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
                if (transcript.includes("blow") || transcript.includes("whoosh") || transcript.includes("hoo") || transcript.includes("phoo")) {
                    handleBlowCandle();
                }
            };

            recognitionRef.current.onerror = () => setIsListening(false);
        }
        return () => {
            if (recognitionRef.current) recognitionRef.current.stop();
        };
    }, []);

    const startMicrophoneDetection = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            micStreamRef.current = stream;
            audioContextRef.current = new AudioContext();
            analyserRef.current = audioContextRef.current.createAnalyser();
            const source = audioContextRef.current.createMediaStreamSource(stream);
            analyserRef.current.fftSize = 256;
            source.connect(analyserRef.current);
            const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);

            const detectBlow = () => {
                if (!analyserRef.current || isBlownOut || !isListening) return;
                analyserRef.current.getByteFrequencyData(dataArray);
                const avg = dataArray.reduce((s, v) => s + v, 0) / dataArray.length;
                if (avg > 55) handleBlowCandle();
                animationRef.current = requestAnimationFrame(detectBlow);
            };
            detectBlow();
        } catch (err) {
            alert("Please allow microphone access.");
        }
    };

    const handleBlowCandle = () => {
        if (isBlownOut || isBlowing) return;
        setIsBlowing(true);

        if (recognitionRef.current && isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        }

        setTimeout(() => {
            setIsBlownOut(true);
            setIsBlowing(false);
            setTimeout(() => router.push("/home"), 100);
        }, 500);
    };

    const handleRelight = () => setIsBlownOut(false);

    const toggleVoiceListening = () => {
        if (!recognitionRef.current) {
            alert("Voice recognition not supported");
            return;
        }
        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
            micStreamRef.current?.getTracks().forEach(t => t.stop());
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        } else {
            recognitionRef.current.start();
            setIsListening(true);
            startMicrophoneDetection();
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
            {/* --- BEAUTIFUL BACKGROUND (Aesthetic + Match Hero) --- */}
            <div className="absolute inset-0 bg-[#FDF6EE] bg-[radial-gradient(circle_at_top_right,#F2C99A33_0%,transparent_40%),radial-gradient(circle_at_bottom_left,#C0614A22_0%,transparent_40%)]" />

            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: "180px",
                }} />

            {/* --- FLOATING PETALS (DREAMY) --- */}
            {PETALS.map((p, i) => (
                <div key={i} className="absolute top-0 pointer-events-none"
                    style={{
                        left: p.left,
                        width: p.size,
                        height: p.size * 1.4,
                        background: p.color,
                        borderRadius: "60% 10% 60% 10%",
                        animation: `petal ${p.dur}s infinite ease-in`,
                        animationDelay: `${p.delay}s`,
                        transform: `rotate(${p.rot}deg)`,
                        opacity: 0.8,
                    }} />
            ))}

            <div className="relative z-10 bg-white/70 backdrop-blur-sm rounded-4xl shadow-[0_20px_60px_-15px_rgba(192,97,74,0.15)] p-10 md:p-12 border border-[#E8B86A]/20 text-center max-w-md w-full">

                <div className="relative mx-auto transform transition-all duration-700 hover:scale-105" style={{ animation: "float 6s ease-in-out infinite" }}>
                    <div className="relative mx-auto">
                        <div className="w-72 h-24 bg-linear-to-br from-amber-600 via-yellow-500 to-amber-600 rounded-lg mx-auto relative shadow-xl border-2 border-amber-700">
                            <div className="absolute -top-2 left-0 right-0 h-6 bg-linear-to-br from-pink-300 via-pink-200 to-pink-300 rounded-t-lg border-2 border-pink-400"></div>
                            <div className="absolute top-2 left-4 w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="absolute top-2 right-4 w-3 h-3 bg-blue-400 rounded-full"></div>
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>

                        <div className="w-56 h-20 bg-linear-to-br from-orange-400 via-yellow-400 to-orange-400 rounded-lg mx-auto relative -mt-2 shadow-xl border-2 border-orange-500">
                            <div className="absolute -top-2 left-0 right-0 h-6 bg-linear-to-br from-blue-300 via-blue-200 to-blue-300 rounded-t-lg border-2 border-blue-400"></div>
                            <div className="absolute top-1 left-6 w-4 h-2 bg-white/80 rounded-full"></div>
                            <div className="absolute top-1 right-6 w-4 h-2 bg-white/80 rounded-full"></div>
                            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-white/80 rounded-full"></div>
                        </div>

                        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                            <div className="w-1 h-3 bg-gray-800 mx-auto -mt-1 rounded-sm"></div>
                            <div className="w-4 h-16 bg-linear-to-br from-red-400 via-red-500 to-red-600 rounded-sm mx-auto shadow-lg border border-red-700 relative">
                                <div className="absolute top-2 left-0 right-0 h-px bg-red-700/30"></div>
                                <div className="absolute top-6 left-0 right-0 h-px bg-red-700/30"></div>
                                <div className="absolute top-10 left-0 right-0 h-px bg-red-700/30"></div>
                                <div className="absolute top-14 left-0 right-0 h-px bg-red-700/30"></div>
                            </div>
                            <div className="absolute top-0 left-0 w-1 h-3 bg-red-300/60 rounded-full"></div>
                            <div className="absolute top-2 right-0 w-1 h-2 bg-red-300/60 rounded-full"></div>

                            {!isBlownOut && (
                                <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${isBlowing ? "animate-pulse scale-75 opacity-50" : ""}`}>
                                    <div className="relative">
                                        <div className="w-5 h-8 bg-linear-to-t from-orange-600 via-yellow-400 to-yellow-200 rounded-full animate-pulse shadow-lg" style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}></div>
                                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-5 bg-linear-to-t from-red-500 via-orange-400 to-yellow-100 rounded-full animate-pulse" style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}></div>
                                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-yellow-100 rounded-full animate-pulse"></div>
                                        <div className="absolute -inset-3 bg-yellow-300/20 rounded-full blur-md animate-pulse"></div>
                                    </div>
                                </div>
                            )}

                            {isBlownOut && (
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                    <div className="w-1 h-10 bg-linear-to-t from-gray-500/70 to-transparent rounded-full animate-pulse"></div>
                                    <div className="absolute top-0 left-1 w-1 h-8 bg-linear-to-t from-gray-400/50 to-transparent rounded-full animate-pulse delay-100"></div>
                                    <div className="absolute top-2 left-2 w-1 h-6 bg-linear-to-t from-gray-300/30 to-transparent rounded-full animate-pulse delay-200"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-10 space-y-3">
                    {!isBlownOut ? (
                        <>
                            <button
                                onClick={handleBlowCandle}
                                disabled={isBlowing}
                                className="w-full py-3.5 bg-[#2C1810] text-[#E8B86D] font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none cursor-pointer"
                                style={{ fontFamily: "Kantumruy Pro, sans-serif" }}>
                                {isBlowing ? (
                                    <> <Wind className="inline w-5 h-5 mr-2" /> កំពុងផ្លុំ... </>
                                ) : (
                                    <> <Wind className="inline w-5 h-5 mr-2" /> ផ្លុំទៀន </>
                                )}
                            </button>

                            <button
                                onClick={toggleVoiceListening}
                                className={`w-full py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer ${isListening
                                    ? "bg-[#D4845A] text-white shadow-md animate-pulse"
                                    : "bg-white border border-[#D4845A]/40 text-[#9B5840]"
                                    }`}
                                style={{ fontFamily: "Kantumruy Pro, sans-serif" }}>
                                {isListening ? (
                                    <> <AudioLines className="inline w-5 h-5 mr-2" /> កំពុងស្តាប់... </>
                                ) : (
                                    <> <AudioLines className="inline w-5 h-5 mr-2" /> ប្រើសម្លេងផ្លុំ </>
                                )}
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleRelight}
                            className="w-full py-3.5 bg-[#2C1810] text-[#E8B86D] font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            style={{ fontFamily: "Kantumruy Pro, sans-serif" }}>
                            <Flame size={20} className="inline mr-2" /> បំភ្លឺទៀនឡើងវិញ
                        </button>
                    )}
                </div>

                <div className="mt-5">
                    {isBlownOut ? (
                        <p className="text-xl text-[#C0614A] animate-bounce font-medium" style={{ fontFamily: "Kantumruy Pro, sans-serif" }}>
                            <PartyPopper className="inline w-5 h-5 mr-2" /> ប៉ងបំណងប្រាថ្នា!
                        </p>
                    ) : isListening ? (
                        <p className="text-[#D4845A] animate-pulse" style={{ fontFamily: "Kantumruy Pro, sans-serif" }}>
                            ផ្លុំខ្លាំង ឬនិយាយ “blow”
                        </p>
                    ) : (
                        <p className="text-[#7A4030] opacity-80" style={{ fontFamily: "Kantumruy Pro, sans-serif" }}>
                            ចុចប៊ូតុង ឬប្រើសម្លេងដើម្បីផ្លុំ
                        </p>
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-[linear-gradient(90deg,#C0614A,#E8B86D,#D4845A,#E8B86D,#C0614A)] bg-size-[300%_100%] animate-[shimmer_4s_linear_infinite]" />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600&display=swap');
                @keyframes petal {
                0% { transform: translateY(-40px) rotate(0) scale(0); opacity: 0; }
                8% { opacity: 0.85; transform: scale(1); }
                100% { transform: translateY(110vh) rotate(720deg) scale(0.6); opacity: 0; }
                }
                @keyframes float {
                0%,100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                }
                @keyframes shimmer { 0%{background-position:100% 0}100%{background-position:-100% 0} }
      `}</style>
        </div>
    );
}