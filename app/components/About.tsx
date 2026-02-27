import Image from "next/image";
import React from "react";


export default function About() {
    return (
        <section id="about" className="text-center">
            <div className="flex gap-10 mb-20 justify-center">
                <Image src="/placeholder1.png" alt="placeholder1" width={300} height={300} />
                <div className="max-w-[50%]">
                    <h2 className="text-3xl font-bold">Purus sagittis fringilla arcu neque.</h2>
                    <p className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Bibendum amet at molestie mattis.</p>
                    <p>
                        Rhoncus morbi et augue nec, in id ullamcorper at sit.
                        Condimentum sit nunc in eros scelerisque sed.
                        Commodo in viverra nunc, ullamcorper ut.
                        Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
                        Fermentum scelerisque sit consectetur hac mi.
                        Mollis leo eleifend ultricies purus iaculis.
                    </p>
                </div>

            </div>
            <div className="flex gap-10 justify-center">
                <div className="max-w-[50%] ">
                    <h2 className="text-3xl font-bold">Purus sagittis fringilla arcu neque.</h2>
                    <p className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Bibendum amet at molestie mattis.</p>
                    <p>
                        Rhoncus morbi et augue nec, in id ullamcorper at sit.
                        Condimentum sit nunc in eros scelerisque sed.
                        Commodo in viverra nunc, ullamcorper ut.
                        Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
                        Fermentum scelerisque sit consectetur hac mi.
                        Mollis leo eleifend ultricies purus iaculis.
                    </p>
                </div>
                <Image src="/placeholder2.png" alt="placeholder2" width={300} height={300} />
            </div>
        </section>
    );
}