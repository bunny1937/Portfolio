"use client";

import { projectsData } from "../../lib/resume-data";
import { useState, useRef } from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const tags = [
    "All",
    ...new Set(projectsData.flatMap((project) => project.tags)),
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-8 border-teal-200/20 dark:border-teal-700/10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-8 border-blue-200/20 dark:border-blue-700/10"></div>
        <svg
          className="absolute top-1/4 right-1/4 text-teal-300/10 dark:text-teal-700/10 w-64 h-64"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M44.5,-76.3C59.3,-69.9,74,-60.5,83.4,-46.6C92.8,-32.7,96.9,-14.3,94.1,2.8C91.3,19.9,81.6,35.6,69.8,48.5C58,61.4,44.1,71.3,28.8,76.9C13.6,82.5,-3,83.7,-18.3,79.5C-33.6,75.3,-47.5,65.7,-58.3,53.3C-69.1,40.9,-76.8,25.8,-79.8,9.2C-82.8,-7.3,-81.1,-25.3,-73.3,-39.8C-65.5,-54.3,-51.6,-65.3,-37,-73.1C-22.4,-80.9,-7.1,-85.5,7.2,-86.9C21.6,-88.3,29.7,-82.7,44.5,-76.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full text-sm font-medium mb-3">
            My Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            A curated selection of my most innovative work and personal
            projects. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tags.slice(0, 8).map((tag, index) => (
            <motion.div
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Badge
                variant={filter === tag ? "default" : "outline"}
                className={`cursor-pointer text-sm py-2 px-4 ${
                  filter === tag
                    ? "bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 border-transparent"
                    : "hover:bg-teal-100 dark:hover:bg-teal-900/30"
                }`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden transition-all duration-500 hover:shadow-2xl group border-none bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="relative h-56 overflow-hidden">
                  {/* Project image with overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="object-cover h-full w-full"
                    />
                  </motion.div>

                  {/* Hover overlay with buttons */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="default"
                      className="bg-teal-500 hover:bg-teal-600"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30 hover:text-white"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4 relative">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-30 bg-gradient-to-bl from-teal-500/10 to-blue-500/10 rounded-bl-full"></div>

                  <h3 className="text-xl font-bold mb-2 text-teal-700 dark:text-teal-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    className="w-full gap-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
