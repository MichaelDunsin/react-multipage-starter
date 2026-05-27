import { motion } from "framer-motion";

export default function Solutions(){

 const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="solutions"
      className="overflow-x-hidden bg-gray-50 sm:scroll-mt-20"
    >

</motion.section>
)
};
