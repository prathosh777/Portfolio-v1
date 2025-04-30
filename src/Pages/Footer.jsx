
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { FileText, ArrowUp } from "lucide-react";
const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative border-t border-slate-800 bg-gradient-to-b from-slate-900/50 to-slate-900 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pb-0 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prathosh Kumar
            </h3>
            <p className="text-slate-400 text-sm">
              Turning ideas into interactive experiences
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-slate-300 font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {["Projects", "About", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-slate-300 font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mx-auto justify-center">
              {[
                {
                  icon: <Github />,
                  label: "GitHub",
                  link: "https://github.com/prathosh777",
                },
                {
                  icon: <Linkedin />,
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/in/prathosh-kumar-5373ba248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
                {
                  icon: <FaWhatsapp />,
                  label: "Whatsapp",
                  link: "https://wa.me/8438014305?text=Hello%20I%20saw%20your%20portfolio!",
                },
                {
                  icon: <Mail />,
                  label: "Email",
                  link: "mailto:prathosh166@gmail.com?subject=Portfolio%20Contact&body=Hello%20Prathosh,",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2  rounded-lg text-2xl bg-slate-800 hover:bg-purple-400/10 border border-slate-700 hover:border-purple-400/30 transition-all"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="space-y-4" whileHover={{ scale: 1.02 }}>
            <h4 className="text-slate-300 font-semibold mb-4">Quick Actions</h4>
            <div className="flex flex-col space-y-3 ml-24 md:ml-0">
              <motion.a
                href="/Prathosh-Kumar-Resume.pdf"
                download
                whileHover={{ x: 5 }}
                className="flex items-center text-slate-400 hover:text-purple-400 transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>

              {/* <motion.button
                onClick={scrollToTop}
                whileHover={{ x: 5 }}
                className="flex items-center text-slate-400 hover:text-purple-400 transition-colors"
              >
                <ArrowUp className="w-5 h-5 mr-2" />
                Back to Top
              </motion.button> */}
            </div>
          </motion.div>

          {/* Floating Scroll-to-Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-slate-700 backdrop-blur-lg hover:border-purple-400/30 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6 text-purple-400" />
          </motion.button>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-slate-800 mt-12 pt-8 text-center"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Prathosh Kumar. Crafted with ♥ and
            React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
