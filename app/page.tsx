import SignUp from "@/app/components/form-components/SignUp";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="mx-auto w-fit">
                {/* Home Section */}
                <section id="home" className="flex items-center justify-center">
                    Placeholder
                </section>

                {/* About Section */}
                {/*<section id="about" className="min-h-screen flex items-center justify-center bg-gray-400">*/}
                {/*    <About />*/}
                {/*</section>*/}

                {/* Resources Section */}
                {/*<section id="resources" className="min-h-screen flex items-center justify-center bg-gray-400">*/}
                {/*    <Resources />*/}
                {/*</section>*/}

                {/* Signup Section */}
                {/*<section id="signup" className="min-h-screen flex items-center justify-center bg-gray-400">*/}
                {/*    <SignUp />*/}
                {/*</section>*/}

                {/* Contact Section */}
                <section id="contact" className="min-h-screen flex items-center justify-center">
                    <Contact />
                </section>
            </main>
        </>
  );
}
