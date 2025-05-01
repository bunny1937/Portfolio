"use client";

import { personalData } from "../../lib/resume-data";
import { useState, useRef } from "react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full border-8 border-emerald-200/20 dark:border-emerald-700/10"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full border-8 border-teal-200/20 dark:border-teal-700/10"></div>
        <svg
          className="absolute bottom-10 right-1/4 text-emerald-300/10 dark:text-emerald-700/10 w-64 h-64"
          viewBox="0 0 200 200"
        >
          <path
            fill="currentColor"
            d="M44.3,-76.1C58.9,-69.9,73.4,-60.1,81.3,-46.2C89.3,-32.3,90.7,-14.3,88.9,3.1C87.1,20.5,82.1,37.3,72.2,50.3C62.3,63.3,47.6,72.5,31.8,77.4C16.1,82.3,-0.7,82.9,-17.8,79.7C-34.9,76.5,-52.3,69.5,-65.2,57.4C-78.1,45.3,-86.5,28.1,-88.9,9.8C-91.3,-8.5,-87.8,-27.8,-78.2,-42.8C-68.6,-57.8,-53,-68.5,-37.4,-74.2C-21.8,-79.9,-6.2,-80.6,8.9,-79.7C24,-78.8,29.7,-82.3,44.3,-76.1Z"
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
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-medium mb-3">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-300">
              Contact Info
            </h3>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="p-6 flex items-start gap-4 border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden relative">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-tl from-emerald-500/10 to-teal-500/10"></div>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg transform rotate-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-1 text-emerald-700 dark:text-emerald-300">
                      Email
                    </h4>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-muted-foreground hover:text-emerald-500 transition-colors flex items-center gap-1"
                    >
                      {personalData.email}
                      <Send className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="p-6 flex items-start gap-4 border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden relative">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-tl from-emerald-500/10 to-teal-500/10"></div>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg transform -rotate-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-1 text-emerald-700 dark:text-emerald-300">
                      Phone
                    </h4>
                    <a
                      href={`tel:${personalData.phone}`}
                      className="text-muted-foreground hover:text-emerald-500 transition-colors flex items-center gap-1"
                    >
                      {personalData.phone}
                      <Send className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="p-6 flex items-start gap-4 border-none shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden relative">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-tl from-emerald-500/10 to-teal-500/10"></div>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg transform rotate-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-1 text-emerald-700 dark:text-emerald-300">
                      Location
                    </h4>
                    <p className="text-muted-foreground">
                      {personalData.location}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-none shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-br-full"></div>
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-tl from-emerald-500/10 to-teal-500/10"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-emerald-700 dark:text-emerald-300">
                  Send Me a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 p-8 rounded-lg text-center"
                  >
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-emerald-500" />
                      </div>
                      <h4 className="text-xl font-bold">Message Sent!</h4>
                      <p>
                        Thank you for reaching out. I'll get back to you as soon
                        as possible.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-emerald-700 dark:text-emerald-300 font-medium"
                        >
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-emerald-200 dark:border-emerald-800 focus-visible:ring-emerald-500"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-emerald-700 dark:text-emerald-300 font-medium"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-emerald-200 dark:border-emerald-800 focus-visible:ring-emerald-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-emerald-700 dark:text-emerald-300 font-medium"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-emerald-200 dark:border-emerald-800 focus-visible:ring-emerald-500"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-emerald-700 dark:text-emerald-300 font-medium"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-emerald-200 dark:border-emerald-800 focus-visible:ring-emerald-500 resize-none"
                        placeholder="Your message here..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
