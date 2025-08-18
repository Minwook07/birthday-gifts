const summaryImg = [
    {
        id: 1,
        img: '/sunflower/d.png'
    },
    {
        id: 2,
        img: '/sunflower/d2.png'
    },
    {
        id: 3,
        img: '/sunflower/d1.png'
    },
    {
        id: 4,
        img: '/sunflower/d4.png'
    },
    {
        id: 5,
        img: '/sunflower/d3.png'
    },
    {
        id: 6,
        img: '/sunflower/d5.png'
    },
]

export function FlowerSummary() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-6xl text-center mb-20 text-pink-400">ផ្កាស្រស់ស្អាត នៅចាញ់សម្រស់មាសស្ងួន</h1>
            <div className="flex flex-wrap justify-center">
                {summaryImg.map((item) => (
                    <div key={item.id} className="w-100 h-100 bg-amber-300">
                        <img src={item.img} alt={item.img} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}