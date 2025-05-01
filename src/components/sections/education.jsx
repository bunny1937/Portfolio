"use client";

import { educationData } from "../../lib/resume-data";
import { Card, CardContent } from "../ui/card";
import {
  BookOpen,
  Award,
  Calendar,
  MapPin,
  Trophy,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export function Education() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-110 h-96 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-medium mb-4 shadow-md">
            Educational Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Education & Qualifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped
            my expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Education Cards - Better Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card className="h-full overflow-hidden border-none rounded-xl shadow-lg hover:shadow-xl">
                {/* Decorative top accent */}
                <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                <CardContent className="p-6 relative">
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-purple-500/10 rounded-bl-full z-0"></div>

                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <div
                      className={`h-14 w-14 rounded-xl flex items-center justify-center shadow-md transform transition-all duration-300 ${
                        activeCard === index
                          ? "rotate-0 bg-gradient-to-br from-indigo-600 to-purple-600"
                          : "-rotate-3 bg-gradient-to-br from-indigo-500 to-purple-500"
                      }`}
                    >
                      {index % 2 === 0 ? (
                        <BookOpen className="h-7 w-7 text-white" />
                      ) : (
                        <Award className="h-7 w-7 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{item.degree}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mb-4 text-gray-700 dark:text-gray-300">
                    <MapPin className="h-4 w-4 text-indigo-500" />
                    <span className="font-medium">{item.institution}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-5">
                    {item.description}
                  </p>

                  {/* Key learnings with visual styling */}
                  {item.keyLearnings && (
                    <div className="mb-5 bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                        <Trophy className="h-4 w-4" /> Key Learnings
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        {item.keyLearnings.slice(0, 3).map((learning, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className=" h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-800/30 text-indigo-600 dark:text-indigo-400 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                              {i + 1}
                            </span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievement badges with visual styling */}
                  {item.achievements && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-100 dark:border-indigo-800/20 rounded-full text-xs font-medium text-indigo-700 dark:text-indigo-300"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link with visual styling */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mt-2 transition-colors"
                    >
                      View Certificate <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
