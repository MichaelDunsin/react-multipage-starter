import { motion } from "framer-motion";

export default function Features(){

 const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <section
      id="about"
      className="overflow-x-hidden bg-gray-50 sm:scroll-mt-20"
    >

</section>
)
};
