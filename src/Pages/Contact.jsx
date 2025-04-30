import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { buildGraph } from "@react-three/fiber";
import Background from "three/src/renderers/common/Background.js";
import { SendHorizontal } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_zehhwuy",
        "template_rhranf9",
        formData,
        "WEJFesRXefUHiJUhj"
      )
      .then(() => {
        setIsSubmitted(true);
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch(console.error);
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Floating background elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute -left-20 top-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute -right-20 bottom-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
      />

      <div className="w-full max-w-2xl space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg text-gray-400 max-w-md mx-auto"
          >
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="p-8 backdrop-blur-lg bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl border border-blue-400/20 text-center space-y-4"
            >
              <motion.svg
                className="w-16 h-16 text-emerald-400 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-semibold text-emerald-400"
              >
                Message Sent!
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-500"
              >
                Talk to you soon 👋
              </motion.p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="backdrop-blur-lg text-start bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-2xl shadow-2xl p-8 sm:p-10 space-y-6 border border-slate-700/20 relative overflow-hidden"
            >
              {/* Animated border gradient */}
              <motion.div
                className=" inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0"
                // whileHover={{ opacity: isHovered ? 1 : 0 ,Background: linear-gradient("45deg", "#4a00e0", "#8e2de2") }}
                animate={{
                  opacity: isHovered ? 0.1 : 0,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.4 }}
              />

              <AnimatePresence>
                <motion.div
                  variants={formItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.div
                    variants={formItemVariants}
                    custom={0}
                    className="space-y-3"
                  >
                    <label className="block text-sm lg:text-lg font-medium text-gray-300 mb-2 ml-1">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="user_name"
                      placeholder="Name"
                      name="user_name"
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 placeholder-slate-400 transition-all duration-200"
                      value={formData.user_name}

                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div
                    variants={formItemVariants}
                    custom={1}
                    className="space-y-3"
                  >
                    <label className="block text-sm lg:text-lg font-medium text-gray-300 mb-2 ml-1">
                      Email
                    </label>
                    <motion.input
                      type="email"
                     id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 placeholder-slate-400 transition-all duration-200"
                      placeholder="your@email.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div
                    variants={formItemVariants}
                    custom={2}
                    className="space-y-3"
                  >
                    <label className="block text-sm lg:text-lg font-medium text-gray-300 mb-2 ml-1">
                      Message
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 placeholder-slate-400 transition-all duration-200"
                      placeholder="What's on your mind?"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              <motion.button
                type="submit"
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.02,
                  background: [
                    "linear-gradient(45deg, #4a00e0, #8e2de2);",
                    // " linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                  ],
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.4,
                  background: { duration: 1.5, repeat: Infinity },
                }}
                className="w-full background text-white font-semibold py-4 px-8 rounded-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <SendHorizontal />
                </motion.span>
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactPage;
