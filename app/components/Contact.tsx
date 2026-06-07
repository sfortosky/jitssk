import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact" className="flex-1 flex flex-col justify-center items-center py-12 px-4 w-full">
            <div className="section-content flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start text-center lg:text-left w-full max-w-4xl lg:justify-between">

                {/* Information Block */}
                <div className="flex flex-col gap-6 max-w-sm w-full mx-auto lg:mx-0">
                    <h1 className="text-4xl font-extrabold tracking-tight text-black pb-2 text-center lg:text-left">
                        Get in touch!
                    </h1>

                    <div className="flex flex-col gap-4 text-base text-gray-700 leading-relaxed font-medium">
                        <p>
                            If you have any questions or need assistance,
                            please feel free to reach out to us.
                        </p>
                        <p>
                            You can also email us at:<br/>
                            <a href="mailto:email@example.com" className="text-primary hover:underline font-semibold block mt-1">
                                email@example.com
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 mt-2 items-center mx-auto lg:mx-auto">
                        <span className="text-sm font-bold tracking-wide uppercase text-gray-500">
                            Connect with us
                        </span>
                        <div className="flex gap-5 bg-base-100 p-2 rounded-xl border border-base-200 shadow-sm w-fit">
                            <Link href="#" className="hover:scale-110 transition-transform">
                                <Image src="/fbook-logo.png" alt="facebook" width={24} height={24}/>
                            </Link>
                            <Link href="#" className="hover:scale-110 transition-transform">
                                <Image src="/insta-logo.png" alt="instagram" width={24} height={24}/>
                            </Link>
                            <Link href="#" className="hover:scale-110 transition-transform">
                                <Image src="/ytube-logo.png" alt="youtube" width={24} height={24}/>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Google Form */}
                <div className="w-full max-w-md mx-auto lg:mx-0 bg-base-100 rounded-2xl border border-base-200 shadow-sm overflow-hidden">
                    <iframe
                        /* Form link goes here */
                        src="https://docs.google.com/forms/d/e/YourContactFormIDHere/viewform?embedded=true"
                        className="w-full h-[600px] border-0 block"
                        title="Contact Us Form"
                        loading="lazy"
                    >
                        Loading form...
                    </iframe>
                </div>

            </div>
        </section>
    );
}