'use client';
import Image from "next/image";

const images = [
    "https://picsum.photos/200/600?random=1",
    "https://picsum.photos/200/600?random=2",
    "https://picsum.photos/200/600?random=3",
    "https://picsum.photos/200/600?random=4",
    "https://picsum.photos/200/600?random=5",
    "https://picsum.photos/200/600?random=6",
    "https://picsum.photos/200/600?random=7",
];

export default function Home() {
    return (
        <section id="home" className="w-full py-24">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth select-none">
                    <div className="flex gap-6 snap-x snap-mandatory w-max items-start">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`card bg-base-100 snap-start shrink-0 w-[200px] transition-transform duration-300 rounded-none
                                ${index % 2 === 0 ? "-translate-y-12" : "translate-y-12"} select-none`}
                            >
                                <figure className="relative w-[200px] h-[600px] overflow-hidden select-none">
                                    <Image
                                        src={src}
                                        alt={`Placeholder ${index + 1}`}
                                        width={200}
                                        height={600}
                                        className="object-cover select-none"
                                        draggable={false}
                                    />
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}