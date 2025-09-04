import { BirthdayInfo } from "../birthday/BirthdayInfo"
export default function Header() {
    return (
        <header className="bg-orange-500 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg">
            <div className="mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="text-white font-bold text-2xl">
                    🎂 ស្រីម៉ៅ
                </div>

                {/* Action / Highlight */}
                <div className="text-white font-semibold bg-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-colors">
                    ថ្ងៃពិសេសរបស់អ្នក!
                </div>
            </div>

            {/* Birthday Info Section */}
            <BirthdayInfo />
        </header>
    )
}
