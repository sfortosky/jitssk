import ContactForm from "@/app/components/form-components/ContactForm";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <section id="contact">
            <div className="hero-content">
                <div className="lg:text-left">
                    <h1>Get in touch!</h1>
                    <div className="join join-vertical gap-2">
                        <span>If you have any questions or need assistance,<br/>please feel free to reach out to us.</span>
                        <span>You can also email us at<br/><a href="mailto:email@example.com">email@example.com</a></span>
                        <div>
                            <span>Connect with us on social media:</span>
                            <div className="flex gap-5">
                                <Link href="#"><Image src="/fbook-logo.png" alt="facebook" width={24} height={24}/></Link>
                                <Link href="#"><Image src="/insta-logo.png" alt="instagram" width={24} height={24}/></Link>
                                <Link href="#"><Image src="/ytube-logo.png" alt="youtube" width={24} height={24}/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}