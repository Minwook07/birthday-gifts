'use client'
import { useState, useEffect } from "react";

export function BirthdayInfo() {
    const translations = [
        {
            lang: "zh",
            question: "你的生日是什么时候？",
            answer: "生日是9月19日和5月4日。",
        },
        {
            lang: "ko",
            question: "생일이 언제입니까?",
            answer: "생일은 9월 19일과 5월 4일입니다.",
        },
        {
            lang: "km",
            question: "ថ្ងៃកំណើតរបស់អ្នកនៅពេលណា?",
            answer: "ថ្ងៃកំណើតរបស់ខ្ញុំគឺថ្ងៃទី 19 ខែកញ្ញា និងថ្ងៃទី 4 ខែឧសភា!",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % translations.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const current = translations[currentIndex];

    return (
        <div className="bg-yellow-100 text-center py-6 transition-all duration-700 ease-in-out">
            <h1 className="text-3xl font-bold text-orange-500 mb-2">
                {current.question}
            </h1>
            <p className="text-xl text-gray-700">
                {current.answer}
            </p>
        </div>
    );
}
