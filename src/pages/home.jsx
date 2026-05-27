import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Header from "./components/header";
import Hero from "./components/hero";
import Problems from "./components/problems";
import Solutions from "./components/solutions";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import About from "./components/about";
import HowItWorks from "./components/howitworks";
import FAQ from "./components/faq";
import CTA from "./components/cta";
import Footer from "./components/footer";


export default function Home() {
  const [showScroll, setShowScroll] = useState(false);
  const page = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isPressed, setIsPressed] = useState(false);

  return (
    <div id="home" className="overflow-hidden">
      <Header />
      <motion.a
        href="https://wa.me/message/S6SWJ7SOXDBVH1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isPressed
            ? { scale: [1, 0.8, 1], transition: { duration: 0.2 } }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.15 }}
        onClick={(e) => {
          e.preventDefault();
          setIsPressed(true);
          setTimeout(() => {
            setIsPressed(false);
            window.open("https://wa.me/message/S6SWJ7SOXDBVH1", "_blank");
          }, 200);
        }}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:bg-green-600 hover:shadow-2xl md:bottom-8 md:right-8"
        title="Chat with us"
        aria-label="Contact us on WhatsApp"
      >
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-green-500 opacity-75"
          style={{ animationDuration: "3s" }}
        ></span>
        <FaWhatsapp size={32} className="text-white" />
      </motion.a>
      <AnimatePresence mode="wait">
        <motion.div>
          <Hero />
    <Problems />
    <Solutions />
    <Features />
    <Testimonials />
    <About />
    <HowItWorks />
    <FAQ />
    <CTA />
    <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
