import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header () {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav id="header" className="fixed top-0 left-0 w-full z-50 bg-neutral-50/95 backdrop-blur-sm">
      <div className="mx-auto 2md:px-16 px-4">
        <div className="flex items-center justify-between md:h-20 h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection("home")}>
            <span className="text-2xl font-bold text-gray-900">LOGO
              <span className="text-purple-700">.</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">

                  {[
                  { id: "problems", text: "Problems & Solutions" },
                  { id: "features", text: "Features" },
                  { id: "about", text: "About" },
                  { id: "how-it-works", text: "How It Works" },
                  { id: "faqs", text: "FAQs" }
                ].map((item => (
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.text}
            </button>
               )))}
                  <button onClick={() => scrollToSection("waitlist")} variant="hero"
              className="bg-purple-600 px-4 py-2 rounded-lg text-white hover:bg-purple-700 transition-colors">
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden bg-neutral-50/95 backdrop-blur-sm absolute w-full left-0 overflow-hidden border-t"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="py-4 space-y-4"
              >
                {[
                  { id: "problems", text: "Problems & Solutions" },
                  { id: "features", text: "Features" },
                  { id: "about", text: "About" },
                  { id: "how-it-works", text: "How It Works" },
                  { id: "faqs", text: "FAQs" }
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    
                     onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-accent rounded-lg transition-colors"
                  >
                    {item.text}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                  onClick={() => scrollToSection("waitlist")}
                  variant="hero"
                  className="bg-purple-600 px-4 py-2 rounded-lg mx-auto block text-white max-w-80 w-full hover:bg-purple-700 transition-colors"
                >
                  Join Waitlist
                </motion.button>
              </motion.div>
            </motion.div>
          )}
      </div>
    </nav>
  );
}