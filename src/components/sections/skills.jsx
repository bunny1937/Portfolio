"use client";

import { skillsData } from "../../lib/resume-data";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion, useInView } from "framer-motion";
import { Code, Palette, Server } from "lucide-react";

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillsData[0].category);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Get icon for category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend":
        return <Palette className="h-5 w-5" />;
      case "Backend":
        return <Server className="h-5 w-5" />;
      case "Other":
        return <Code className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-8 border-cyan-200/20 dark:border-cyan-700/10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-8 border-blue-200/20 dark:border-blue-700/10"></div>
        <svg
          className="absolute top-1/4 right-1/4 text-cyan-300/10 dark:text-cyan-700/10 w-64 h-64"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M44.5,-76.3C59.3,-69.9,74,-60.5,83.4,-46.6C92.8,-32.7,96.9,-14.3,94.1,2.8C91.3,19.9,81.6,35.6,69.8,48.5C58,61.4,44.1,71.3,28.8,76.9C13.6,82.5,-3,83.7,-18.3,79.5C-33.6,75.3,-47.5,65.7,-58.3,53.3C-69.1,40.9,-76.8,25.8,-79.8,9.2C-82.8,-7.3,-81.1,-25.3,-73.3,-39.8C-65.5,-54.3,-51.6,-65.3,-37,-73.1C-22.4,-80.9,-7.1,-85.5,7.2,-86.9C21.6,-88.3,29.7,-82.7,44.5,-76.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div
        ref={containerRef}
        className="container max-w-6xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium mb-3">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <Tabs
          defaultValue={skillsData[0].category}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsList className="grid w-full grid-cols-3 mb-12 p-1 bg-cyan-100/50 dark:bg-cyan-900/20 rounded-full">
              {skillsData.map((category, index) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  className={`text-sm sm:text-base py-3 rounded-full transition-all duration-300 ${
                    activeTab === category.category
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                      : "text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/30"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(category.category)}
                    {category.category}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {skillsData.map((category, categoryIndex) => (
            <TabsContent key={category.category} value={category.category}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView && activeTab === category.category
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5 }}
              >
                <Card className="border-none shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-200 dark:border-cyan-800/30">
                    <CardTitle className="text-2xl text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
                      {getCategoryIcon(category.category)}
                      {category.category} Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="space-y-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            isInView && activeTab === category.category
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-xs">
                                  {skill.name.charAt(0)}
                                </span>
                              </div>
                              <span className="font-bold text-lg">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-sm font-medium px-2 py-1 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="h-3 w-full bg-cyan-100 dark:bg-cyan-900/30 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={
                                isInView && activeTab === category.category
                                  ? { width: `${skill.level}%` }
                                  : { width: 0 }
                              }
                              transition={{
                                duration: 1,
                                delay: 0.2 + index * 0.1,
                              }}
                            />
                          </div>

                          {/* Skill tags */}
                          <div className="flex flex-wrap gap-2">
                            {["Beginner", "Experienced"].map(
                              (tag, i) =>
                                Math.random() > 0.5 && (
                                  <span
                                    key={i}
                                    className="px-2 py-0.5 bg-cyan-100/50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 rounded-full text-xs"
                                  >
                                    {tag}
                                  </span>
                                )
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full border-4 border-cyan-200/20 dark:border-cyan-700/10"></div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
