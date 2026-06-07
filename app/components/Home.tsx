'use client';
import Image from "next/image";

const images = [
    "https://picsum.photos/200/380?random=1",
    "https://picsum.photos/200/380?random=2",
    "https://picsum.photos/200/380?random=3",
    "https://picsum.photos/200/380?random=4",
    "https://picsum.photos/200/380?random=5",
    "https://picsum.photos/200/380?random=6",
    "https://picsum.photos/200/380?random=7",
];

const roygbivColors = [
    "bg-[#E51414]", // Red
    "bg-[#F15A24]", // Orange
    "bg-[#FFD100]", // Yellow
    "bg-[#00713D]", // Green
    "bg-[#1B75BC]", // Blue
    "bg-[#4F008C]", // Indigo
    "bg-[#8C0087]", // Violet
];

export default function Home() {
    const continuousTrack = [...images, ...images, ...images, ...images];

    return (
        <section id="home" className="w-full max-w-full py-12 overflow-hidden bg-white">

            {/* Logo */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 mb-15 px-6 max-w-full mx-auto select-none text-center lg:text-left">
                {/* Title */}
                <h2 className="font-bold tracking-tighter leading-none text-black break-words text-[clamp(4rem,4rem+5vw,8rem)] w-full lg:w-auto">
                    JITSSK
                </h2>
                {/* Subtitle */}
                <h2 className="font-bold max-w-xs md:max-w-sm pt-0 lg:pt-3 leading-tight text-black break-words text-[clamp(1.5rem,1rem+1.5vw,2.25rem)] mx-auto lg:mx-0">
                    Jazz in the Schools Saskatchewan
                </h2>
            </div>

            {/* Scrolling Images */}
            <div className="max-w-6xl mx-auto relative overflow-hidden py-8 px-6">

                {/* Animation Styling */}
                <style jsx global> {`
                    @keyframes marquee-flip {
                        0% { transform: translate3d(0, 0, 0); }
                        100% { transform: translate3d(-50%, 0, 0); }
                    }
                    .animate-marquee-flip {
                        display: flex;
                        width: max-content;
                        animation: marquee-flip 90s linear infinite;
                    }
                `} </style>

                {/* Image Map */}
                <div className="animate-marquee-flip gap-12 select-none">
                    {continuousTrack.map((src, index) => {
                        const colorIndex = index % images.length;
                        const colorClass = roygbivColors[colorIndex];
                        const isTop = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`card bg-base-100 shrink-0 w-[200px] min-w-[200px] rounded-none flex flex-col relative
                                ${isTop ? "-translate-y-6" : "translate-y-6"} select-none`}
                            >
                                {/* Color Bar - Top */}
                                {isTop && (
                                    <div className={`w-full h-6 ${colorClass} shrink-0`} />
                                )}

                                <figure className="relative w-[200px] h-[380px] overflow-hidden select-none">
                                    <Image
                                        src={src}
                                        alt={`Placeholder ${colorIndex + 1}`}
                                        width={200}
                                        height={380}
                                        className="object-cover select-none"
                                        draggable={false}
                                    />
                                </figure>

                                {/* Color Bar - Bottom */}
                                {!isTop && (
                                    <div className={`w-full h-6 ${colorClass} shrink-0`} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}