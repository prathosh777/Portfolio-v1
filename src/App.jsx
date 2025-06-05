
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import CursorPointer from "./components/CursorPointer.jsx";
import Contact from "./Pages/Contact.jsx";
import { Download } from "lucide-react";
import Footer from "./Pages/Footer.jsx";
import Loader from "./components/Loader-2.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

 
  useEffect(() => {
    // Show loader for 5 seconds
    const loaderTimer = setTimeout(() => setLoading(false), 5000);

    // Check for mobile devices only once during load
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      toast.warn("For the best experience, we recommend using a PC or Laptop", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastId: "mobile-warning",
      });
    }

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div
      className="bg-gray-950 text-white min-h-screen text-center lg:overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <ToastContainer />

      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <CursorPointer position={position} />
          <nav className="h-16 sticky top-0 z-[70000] flex justify-between lg:px-20 px-5 lg:text-3xl text-sm sm:text-lg font-bold items-center bg-slate-900">
            <h4>Prathosh Kumar</h4>
            {/* <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download={true}
              href="../public/Prathosh-Kumar-Resume.pdf"
              className="lg:px-4 lg:py-2 px-2 py-1 flex rounded-full background text-white font-semibold lg:text-xl hover:from-blue-500 hover:to-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} className="mr-1" />
              Download CV
            </motion.a> */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Prathosh-Kumar-Resume.pdf" // Adjusted path for public folder access
              download // Simplified download attribute
              className="lg:px-4 lg:py-2 px-2 py-1 flex rounded-full background text-white font-semibold lg:text-xl hover:from-blue-500 hover:to-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
{/*               <Download size={20} className="mr-1 md:pt-2" /> */}
              Download CV
            </motion.a>
          </nav>

          <Navbar />
          <main className="space-y-10 lg:space-y-20">
            <div className="lg:h-[80vh] lg:pt-0 pt-12 h-[95vh]">
              <Home />
            </div>
            <div className="w-full bg-gradient-to-r py-1 from-transparent via-slate-700 to-transparent" />

            {/* About Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
              className="relative lg:pb-36"
            >
              <motion.h2
                id="about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-4xl lg:text-5xl font-bold pb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <div className="lg:h-[115vh]">
                <About />
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
              id="project"
              className="relative"
            >
              <div className="w-full bg-gradient-to-r py-1 from-transparent via-slate-700 to-transparent my-4" />
              <motion.h2
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-4xl pb-2 pt-8 lg:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                Projects
              </motion.h2>
              <div className="group z-[99] w-full relative lg:h-[75vh] h-[150vh] flex justify-center items-center">
                <Projects />
              </div>
            </motion.section>
            <div className="w-full py-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent my-0" />

            {/* Contact Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pt-0 lg:pt-0"
            >
              <Contact />
              <Footer />
            </motion.section>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
