'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Added the specific bar colors to the array config
    const navLinks = [
        { name: "Home", href: "#home", barColor: "bg-[#E51414]" }, // Red
        { name: "About", href: "#about", barColor: "bg-[#F15A24]" }, // Orange
        {
            name: "Resources",
            href: "#resources",
            /* Hard-stop 50/50 split gradient: Yellow up to 50%, Green starting instantly at 50% */
            barColor: "bg-gradient-to-r from-[#FFD100] from-50% to-[#00713D] to-50%"
        },
        { name: "Sign Up", href: "#signup", barColor: "bg-[#1B75BC]" }, // Blue
        { name: "Contact", href: "#contact", barColor: "bg-[#8C0087]" }, // Purple (Violet)
    ];

    return (
        <nav className="bg-neutral-primary sticky top-0 z-20 border-b border-default bg-base-100">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Logo */}
                <Link
                    href="#home"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://www.svgrepo.com/show/503061/music.svg"
                        className="h-7"
                        alt="Jazz Logo"
                    />
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
                        JITSSK
                    </span>
                </Link>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Menu */}
                <div
                    className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
                    id="mobile-menu"
                >
                    <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 border border-default rounded-base bg-neutral-secondary-soft md:border-0 md:bg-neutral-primary">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {/* Added 'group' class to the Link so children can listen for hover states */}
                                <Link
                                    href={link.href}
                                    className="group block relative py-2 px-3 text-heading rounded md:hover:bg-transparent md:border-0 md:p-0 font-bold text-black"
                                >
                                    {/* Link Text remains solid black */}
                                    <span>{link.name}</span>

                                    {/*
                                      HOVER ACCENT BAR:
                                      - Positioned absolutely at the bottom of the layout container.
                                      - Height is h-1.5 (6px), similar to your geometric picture frames.
                                      - Uses scale-x-0 by default and animates to scale-x-100 when the link group is hovered.
                                    */}
                                    <div
                                        className={`absolute bottom-[-6px] left-0 right-0 h-1.5 transform scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100 ${link.barColor}`}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    );
}