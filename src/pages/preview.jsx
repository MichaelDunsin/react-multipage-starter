import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Zap,
  TrendingUp,
  ChevronDown,
  Globe,
  Briefcase,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { projects } from "../../public/data";
import { motion } from "motion/react";

export default function ProjectPreview() {
  const navigate = useNavigate();
  const { theme } = useStore();
  const { id } = useParams();
  const [expandedResult, setExpandedResult] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const proj = projects.find((s) => s.id === id);

  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      animate={{ opacity: 1, y: 0 }}
      className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-white via-blue-50/30 to-white px-2 px-4 py-16 py-20 dark:from-[#0f1724] dark:via-[#0a0f1a] dark:to-[#0f1724] md:px-0"
    >
      <div className="relative flex w-full max-w-6xl flex-col items-center gap-6 px-2 py-4 sm:px-4 md:py-10 2md:flex-row">
        <div className="w-full md:w-0">
          <button
            onClick={() => navigate(-1)}
            className="absolute -top-5 flex gap-2 rounded-full bg-slate-300 px-3 py-2 shadow-md transition-colors duration-200 hover:bg-slate-200 dark:bg-slate-800 dark:text-white hover:dark:bg-slate-900 sm:-top-6 sm:rounded-lg md:left-10"
          >
            <ArrowLeft /> <span className="hidden sm:block">Back</span>
          </button>
        </div>
        <div className="flex w-full flex-col gap-12 2md:flex-row">
          {/* Left: Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.3,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex w-full flex-col items-center 2md:w-[48%]"
          >
            <div className="text-left">
              <h1 className="mb-2 flex items-center gap-2 text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl">
                {proj.title}
              </h1>
              <p className="mb-5 text-sm text-gray-600 dark:text-gray-300">
                {proj.hook}
              </p>
            </div>

            <div className="relative m-2 h-[450px] w-full overflow-hidden rounded lg:h-[500px]">
              <img
                src={proj.smallImage}
                alt={proj.title}
                className="w-full object-cover object-top"
                style={{ objectPosition: "top center" }}
              />
              <span
                className="absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md"
                style={{ backgroundColor: proj.accent }}
              >
                {proj.industry}
              </span>
              {/* Bottom fade */}
              <div
                className={`pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#bababa] to-transparent dark:from-[#111]`}
              />
              {/* Subtle color overlay on hover */}
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                style={{ backgroundColor: proj.accent }}
              />
            </div>
          </motion.div>
          {/* Right: Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.5,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex w-full flex-col gap-4 2md:w-[45%]"
          >
            <motion.div
              className="mb-2 flex flex-col gap-4 sm:flex-row 2md:flex-col lg:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }}
            >
              <motion.a
                href={proj.hostedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white shadow transition-colors duration-200 hover:bg-blue-800"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Globe size={20} />
                View Live Demo
              </motion.a>
            </motion.div>
            <div className="space-y-4">
              {/* The Client Goal */}
              <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-[#071228]">
                <div className="mb-1 flex items-center gap-2">
                  <Briefcase
                    className="h-5 w-5"
                    style={{ color: proj.accent }}
                  />
                  <h3 className="text-md font-bold text-gray-900 dark:text-white">
                    Client Brief
                  </h3>
                </div>
                <p className="text-xs italic leading-relaxed text-gray-700 dark:text-gray-300">
                  {proj.brief}
                </p>
              </div>

              {/* Client-Focused Value & Results */}
              <div className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#071228]">
                <div className="mb-4 flex items-center gap-2">
                  <h3 className="text-md font-bold text-gray-900 dark:text-white">
                    Client-Focused Value & Results
                  </h3>
                </div>
                <ul className="space-y-3">
                  {proj.results && proj.results.length > 0 ? (
                    proj.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="-ml-4 cursor-pointer rounded border-l-4 border-blue-500 px-3 py-2 pl-4 transition-all hover:bg-gray-50 dark:hover:bg-[#0a1630]"
                      >
                        <button
                          onClick={() =>
                            setExpandedResult(
                              expandedResult === idx ? null : idx,
                            )
                          }
                          className="flex w-full items-start gap-3 text-left transition-opacity hover:opacity-80"
                        >
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                          <div className="flex-1">
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
                              {result.heading}
                            </h5>
                            {expandedResult === idx && (
                              <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                                {result.description.replace(/\*\*/g, "")}
                              </p>
                            )}
                          </div>
                          <ChevronDown
                            className={`mt-0.5 h-5 w-5 flex-shrink-0 text-gray-600 transition-transform dark:text-gray-400 ${expandedResult === idx ? "rotate-180" : ""}`}
                          />
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-700 dark:text-gray-300">
                      {proj.mainFeatures}
                    </li>
                  )}
                </ul>
              </div>

              {/* Technology Stack */}
              <div className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#071228]">
                <div className="mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-500" />
                  <h3 className="text-md font-bold text-gray-900 dark:text-white">
                    Technology Stack (How it was built)
                  </h3>
                </div>
                <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  {(proj.tech || []).map((tech, idx) => (
                    <li key={idx} className="text-xs">
                      {typeof tech === "string"
                        ? tech.replace(/\*\*/g, "")
                        : tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
