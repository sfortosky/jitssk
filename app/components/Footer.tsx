import React from "react";

const roygbivColors = [
    "bg-[#E51414]", // Red
    "bg-[#F15A24]", // Orange
    "bg-[#FFD100]", // Yellow
    "bg-[#00713D]", // Green
    "bg-[#1B75BC]", // Blue
    "bg-[#4F008C]", // Indigo
    "bg-[#8C0087]", // Violet
];

export default function Footer() {
    return (
        <footer className="w-full bg-transparent mt-auto block">
            {/* ROYGBIV Ribbon */}
            <div className="w-full flex h-6 md:h-6 overflow-hidden select-none">
                {roygbivColors.map((colorClass, index) => (
                    <div
                        key={index}
                        className={`${colorClass} h-full flex-1 transition-transform duration-300 hover:scale-y-110 origin-bottom`}
                    />
                ))}
            </div>
        </footer>
    );
}