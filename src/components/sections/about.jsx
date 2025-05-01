"use client";

import { personalData } from "../../lib/resume-data";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, User } from "lucide-react";
import { Button } from "../ui/button";

export function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute top-10 right-10 text-indigo-300/10 dark:text-indigo-700/10 w-64 h-64"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M45.3,-78.2C58.3,-71.6,68.5,-59.5,76.4,-45.6C84.3,-31.7,89.9,-15.9,88.8,-0.6C87.7,14.6,79.9,29.3,70.8,42.5C61.7,55.7,51.3,67.4,38.3,74.8C25.2,82.2,9.6,85.2,-4.8,82.1C-19.1,79,-32.3,69.8,-43.2,59.5C-54.1,49.2,-62.8,37.9,-69.5,24.8C-76.2,11.7,-81,-3.1,-78.8,-16.9C-76.6,-30.7,-67.4,-43.5,-55.8,-53.5C-44.1,-63.5,-30,-70.8,-15.3,-76.2C-0.5,-81.7,14.8,-85.3,29.5,-83.8C44.2,-82.3,58.3,-75.7,45.3,-78.2Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full border-8 border-violet-200/20 dark:border-violet-700/10"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full text-sm font-medium mb-3">
            Discover My Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-indigo-500 rounded-tl-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-violet-500 rounded-br-xl"></div>

              <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-2xl p-2 relative z-10">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-violet-500 relative">
                  {/* Profile image or placeholder */}
                  <div className="absolute inset-1 rounded-lg overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* You can replace this with an actual image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30">
                        <User className="h-32 w-32 text-indigo-300 dark:text-indigo-700" />
                      </div>

                      {/* Animated particles */}
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-indigo-500/30"
                          initial={{
                            x: Math.random() * 100 - 50 + "%",
                            y: Math.random() * 100 - 50 + "%",
                            opacity: 0.3,
                          }}
                          animate={{
                            x: Math.random() * 100 - 50 + "%",
                            y: Math.random() * 100 - 50 + "%",
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full text-sm font-medium shadow-lg"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {personalData.title}
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-3 py-1 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium shadow-lg"
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {personalData.location}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">
              I'm a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">
                {personalData.title}
              </span>{" "}
              based in {personalData.location}
            </h3>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {personalData.about}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
