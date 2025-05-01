"use client";

import { experienceData } from "../../lib/resume-data";
import { useState, useRef } from "react";
import { Badge } from "../ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "../ui/card";
import { cn } from "../../lib/utils";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute top-10 left-10 text-orange-300/10 dark:text-orange-700/10 w-64 h-64"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M39.9,-65.7C51.5,-60.5,60.8,-49.9,65.3,-37.8C69.8,-25.7,69.4,-12.8,68.2,-0.7C67,11.5,65,23,59.8,33.3C54.6,43.7,46.2,52.9,35.8,58.9C25.3,64.9,12.7,67.7,-0.2,68C-13,68.3,-26,66.1,-38.3,60.6C-50.6,55.1,-62.2,46.3,-68.1,34.7C-74,23,-74.2,8.5,-71.3,-4.7C-68.5,-17.9,-62.6,-29.8,-54.1,-39.4C-45.6,-49,-34.5,-56.3,-22.8,-61.1C-11.1,-65.9,1.2,-68.2,13.1,-67.9C25,-67.6,38.5,-64.7,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-8 border-amber-200/20 dark:border-amber-700/10"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-sm font-medium mb-3">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div
          ref={containerRef}
          className="relative pl-4 sm:pl-8 md:pl-16 max-w-4xl mx-auto"
        >
          {/* Timeline line with animation */}
          <motion.div
            className="absolute left-0 sm:left-4 md:left-8 top-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"
            style={{
              height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              top: 10,
              bottom: 10,
            }}
          />

          {/* Static timeline line (background) */}
          <div className="absolute left-0 sm:left-4 md:left-8 h-full w-1 bg-orange-200 dark:bg-orange-800/30 rounded-full"></div>

          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(
                "relative mb-16 pl-6 sm:pl-8",
                "before:absolute before:left-0 before:top-2 before:h-6 before:w-6 before:rounded-full before:border-4 before:border-background dark:before:border-gray-900 before:bg-gradient-to-r before:from-orange-500 before:to-amber-500 before:z-10",
                "before:transition-all before:duration-300",
                hoveredIndex === index ? "before:scale-125" : ""
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card
                className={cn(
                  "p-6 transition-all duration-500 overflow-hidden border-none",
                  hoveredIndex === index
                    ? "shadow-2xl -translate-y-1"
                    : "shadow-lg",
                  "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                )}
              >
                {/* Decorative corner shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-amber-500/10 rounded-bl-full"></div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-sm font-medium flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {experience.date}
                  </span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {experience.location}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shrink-0">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-1 text-orange-700 dark:text-orange-300">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg text-muted-foreground mb-4">
                      {experience.company}
                    </h4>

                    <div className="relative pl-6 border-l-2 border-orange-200 dark:border-orange-800/30 mb-6">
                      <p className="mb-4 text-muted-foreground">
                        {experience.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-700 dark:text-orange-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
