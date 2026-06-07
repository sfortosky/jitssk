import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <section id="about" className="section-content w-full max-w-5xl mx-auto pt-12 pb-16 px-4 flex flex-col gap-16 lg:gap-24 text-left">

            {/* First Row Block */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">

                {/* Picture */}
                <div className="shrink-0 mx-auto lg:mx-0">
                    <Image
                        src="/placeholder1.png"
                        alt="placeholder1"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:max-w-[55%] flex flex-col gap-3">
                    <h2 className="text-3xl font-bold text-neutral">
                        Purus sagittis fringilla arcu neque.
                    </h2>
                    <p className="text-xl font-semibold text-base-content/90 leading-snug">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Bibendum amet at molestie mattis.
                    </p>
                    <p className="text-base text-base-content/80 leading-relaxed">
                        Rhoncus morbi et augue nec, in id ullamcorper at sit.
                        Condimentum sit nunc in eros scelerisque sed.
                        Commodo in viverra nunc, ullamcorper ut.
                        Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
                        Fermentum scelerisque sit consectetur hac mi.
                        Mollis leo eleifend ultricies purus iaculis.
                    </p>
                </div>
            </div>

            {/* Second Row Block */}
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-12 w-full">

                {/* Picture */}
                <div className="shrink-0 mx-auto lg:mx-0">
                    <Image
                        src="/placeholder2.png"
                        alt="placeholder2"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:max-w-[55%] flex flex-col gap-3 text-right">
                    <h2 className="text-3xl font-bold text-neutral">
                        Purus sagittis fringilla arcu neque.
                    </h2>
                    <p className="text-xl font-semibold text-base-content/90 leading-snug">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Bibendum amet at molestie mattis.
                    </p>
                    <p className="text-base text-base-content/80 leading-relaxed">
                        Rhoncus morbi et augue nec, in id ullamcorper at sit.
                        Condimentum sit nunc in eros scelerisque sed.
                        Commodo in viverra nunc, ullamcorper ut.
                        Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
                        Fermentum scelerisque sit consectetur hac mi.
                        Mollis leo eleifend ultricies purus iaculis.
                    </p>
                </div>
            </div>

        </section>
    );
}