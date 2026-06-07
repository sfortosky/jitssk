import SignUp from "@/app/components/SignUp";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";
import Resources from "@/app/components/Resources";
import About from "@/app/components/About";
import Home from "@/app/components/Home";
import Footer from "@/app/components/Footer";

export default function Page() {
    return (
        <>
            <Navbar />
            <main>
                {/* Home Section */}
                <Home />

                {/* About Section */}
                <About />

                {/* Resources Section */}
                <Resources/>

                {/* Signup Section */}
                <SignUp />

                {/* Contact Section */}
                <Contact />

                {/* Contact Section */}
                <Footer />
            </main>
        </>
  );
}
