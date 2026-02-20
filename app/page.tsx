import SignUp from "@/app/components/form-components/SignUp";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";
import Resources from "@/app/components/Resources";
import About from "@/app/components/About";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                {/* Home Section */}
                <section id="home" className="flex items-center justify-center"/>

                {/* About Section */}
                <About />

                {/* Resources Section */}
                <Resources/>

                {/* Signup Section */}
                <SignUp />

                {/* Contact Section */}
                <Contact />
            </main>
        </>
  );
}
