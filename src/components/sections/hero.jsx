"use client";

import { personalData } from "../../lib/resume-data";
import { Button } from "../ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "../../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const textToType = personalData.title;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    if (typedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText, textToType]);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determine which social icon to use
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github":
        return <Github className="h-5 w-5" />;
      case "Linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "Twitter":
        return <Twitter className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-sky-50 dark:from-rose-950/20 dark:via-gray-900 dark:to-sky-950/20 z-0"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-sky-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 1.5, 1, 0],
              opacity: [0, 0.8, 1, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-8 border-rose-200/20 dark:border-rose-700/10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-8 border-sky-200/20 dark:border-sky-700/10"></div>
      <svg
        className="absolute bottom-10 left-1/4 text-sky-300/10 dark:text-sky-700/10 w-64 h-64"
        viewBox="0 0 200 200"
      >
        <path
          fill="currentColor"
          d="M44.3,-76.1C58.9,-69.9,73.4,-60.1,81.3,-46.2C89.3,-32.3,90.7,-14.3,88.9,3.1C87.1,20.5,82.1,37.3,72.2,50.3C62.3,63.3,47.6,72.5,31.8,77.4C16.1,82.3,-0.7,82.9,-17.8,79.7C-34.9,76.5,-52.3,69.5,-65.2,57.4C-78.1,45.3,-86.5,28.1,-88.9,9.8C-91.3,-8.5,-87.8,-27.8,-78.2,-42.8C-68.6,-57.8,-53,-68.5,-37.4,-74.2C-21.8,-79.9,-6.2,-80.6,8.9,-79.7C24,-78.8,29.7,-82.3,44.3,-76.1Z"
          transform="translate(100 100)"
        />
      </svg>

      <motion.div
        style={{ opacity, y }}
        className="container max-w-6xl mx-auto flex flex-col items-center md:items-start  md:text-left relative z-10 w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8"
        >
          Hello, I'm{" "}
          <span className="relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500">
              {personalData.name}
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-sky-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="h-10 md:h-12 mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80">
            {typedText}
            <span
              className={cn(
                "ml-1 inline-block w-1 h-8 bg-gradient-to-r from-rose-500 to-sky-500 align-middle",
                typingComplete ? "animate-pulse" : "animate-blink"
              )}
            ></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 text-base sm:text-lg md:text-xl max-w-full mx-auto mb-6 sm:mb-8 md:mb-10 text-muted-foreground leading-relaxed"
        >
          {personalData.about}
          <div className="">
            <div className="flex items-center gap-3 mt-4 first:mt-0">
              <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <Mail className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Email</span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {personalData.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 first:mt-0">
              <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Location</span>
                <p className="font-medium">{personalData.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 first:mt-0">
              <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <Phone className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Phone</span>
                <a
                  href={`tel:${personalData.phone}`}
                  className="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {personalData.phone}
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="flex flex- items-center  md:justify-start gap-3 sm:gap-4 mb-4 sm:mb-12 md:mb-6 flex-wrap mt-6"
            >
              {personalData.socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-rose-200 dark:border-rose-800 hover:border-sky-400 dark:hover:border-sky-600 hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </motion.div>
            <div className="pt-4 sm:pt-0">
              <Button className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 transition-all duration-300">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
