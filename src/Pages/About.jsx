import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import {
  Code,
  School,
  Brain,
  Languages,
  Paintbrush,
  ChefHat,
  Hourglass,
  Focus,
  SmartphoneNfc,
  Nfc,
} from "lucide-react";
import { useRef } from "react";

const About = () => {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleScroll = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4" ref={constraintsRef}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center mb-16"
      >
        <motion.p
          className="lg:text-xl text-xs text-slate-400 max-w-2xl mx-auto"
          // initial={{ scale: 0.95 }}
          // animate={{ scale: 1 }}
          // transition={{
          //   duration: 1,
          //   // repeat: Infinity,
          //   repeatType: "mirror",
          // }}
        >
          A self-taught developer from Avinashi creating digital solutions that
          combine usefulness and imagination.
        </motion.p>
      </motion.div>

      {/* Journey Timeline */}
      <div className="grid justify-center lg:grid-cols-2 gap-12">
        {/* Education Card */}
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="p-8 text-center  rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-slate-800"
        >
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ type: "spring" }}
          >
            <School className="lg:w-8 lg:h-8 text-purple-400" />
            <motion.h3
              className="lg:text-2xl text-[16px] font-semibold"
              animate={{ textShadow: "0 0 10px rgba(168,85,247,0.5)" }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Education Journey
            </motion.h3>
          </motion.div>

          <motion.ul
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "VVMHSS",
                text: "Graduating from school marks the beginning of chasing dreams",
                color: "bg-blue-400",
              },
              {
                title: "DRSNSRCAS",
                text: "BSc in Information Technology",
                color: "bg-purple-400",
              },
              {
                title: "Today",
                text: "Mastering Full Stack Development",
                color: "bg-blue-400",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex gap-4 "
                variants={fadeUpItem}
              >
                <div className="flex flex-col  items-center">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <div className="w-px h-full bg-slate-700 my-2" />
                </div>
                <div>
                  <motion.h4
                    className={` font-semibold text-start lg:text-[16px] text-xs relative ${item.pl} `}
                    whileHover={{ x: 5 }}
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    className={`text-slate-400 pt-1 lg:text-sm text-xs ${item.padding}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {item.text}
                  </motion.p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Skills Card */}
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="p-8  rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-slate-800"
        >
          <motion.div
            className="flex items-center gap-4 mb-6"
            // drag
            // dragConstraints={constraintsRef}
            whileDrag={{ scale: 1.05 }}
          >
            <Code className="lg:w-8 lg:h-8 text-blue-400" />
            <h3 className="lg:text-2xl text-[16px] font-extrabold">
              Technical Arsenal
            </h3>
          </motion.div>

          <motion.div
            className="space-y-6 text-start"
            initial="hidden"
            animate="visible"
            // repeat={Infinity}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpItem}>
              <h4 className="font-semibold mb-2 lg:text-[16px]  text-sm">
                Core Stack
              </h4>
              <div className="flex  flex-wrap gap-3">
                {["MongoDB", "Express", "React", "Node.js"].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 rounded-full  text-xs bg-slate-800 lg:text-sm hover:bg-blue-400/20 transition-colors"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(96,165,250,0.3)",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <h4 className="font-semibold mb-2 lg:text-inherit text-sm">
                Tools & Technologies
              </h4>
              <motion.div
                className="flex  justify-start flex-wrap gap-2 mb-3"
                whileInView={{
                  transition: { staggerChildren: 0.1 },
                }}
              >
                {["Tailwind", "Framer", "Git", "GitHub", "Postman"].map(
                  (tool, index) => (
                    <motion.span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-slate-800 text-xs lg:text-sm"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px rgba(96,165,250,0.3)",
                      }}
                    >
                      {tool}
                    </motion.span>
                  )
                )}
              </motion.div>
              <p className="text-slate-500 text-center text-[0.70rem] lg:text-sm">
                Acquired through documentation &amp; YouTube tutorials
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Unique Value Section */}

      <div className="mt-20 grid lg:grid-cols-3 gap-6">
        {[
          {
            icon: <Brain />,
            title: "Problem Solving",
            text: "Debugged 50+ errors in first week of MERN project",
          },
          {
            icon: <Languages />,
            title: "Bilingual",
            text: "Fluent in Tamil & English collaboration",
          },
          {
            icon: <Paintbrush />,
            title: "UI Design",
            text: "Doodle concepts before coding",
          },
          {
            icon: <ChefHat />,
            title: "Patience",
            text: "Learned through cooking experiments",
          },
          {
            icon: <Hourglass />,
            title: "Time Mgmt",
            text: "Balanced self-learning with academics",
          },
          {
            icon: <Focus />,
            title: "Detail Focus",
            text: "Pixel-perfect implementation enthusiast",
          },
        ].map((item, index) => {
          // Create unique motion values for each card
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          const rotateX = useTransform(y, [-100, 100], [15, -15]);
          const rotateY = useTransform(x, [-100, 100], [-15, 15]);

          return (
            <motion.div
              key={index}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - rect.width / 2);
                y.set(e.clientY - rect.top - rect.height / 2);
              }}
              onPointerLeave={() => {
                x.set(0);
                y.set(0);
              }}
              className="p-6 lg:w-full w-[80%] mx-auto rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group transform-gpu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-3xl mb-4 text-blue-400">{item.icon}</div>
              <h4 className="lg:text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-slate-400 lg:text-lg text-sm">{item.text}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-20"
      >
        <motion.p
          className="lg:text-xl text-xs text-slate-400 mb-8"
          animate={{
            textShadow: [
              "0 0 10px rgba(96,165,250,0)",
              "0 0 15px rgba(168,85,247,0.5)",
              "0 0 10px rgba(96,165,250,0)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          "Looking to collaborate on building impactful digital experiences"
        </motion.p>
        <motion.button
          onClick={handleScroll}
          className="px-12 py-3 lg:text-xl text-xs flex mx-auto rounded-full background hover:from-purple-400 hover:to-blue-400 transition-all ease-in-out duration-300 rlative"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(96,165,250,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative    z-10">Let's Connect</span>
          <motion.span
            className="absolte md:pt-1 "
            animate={{
              x: [0, 5, 0],
              transition: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
          >
            {/* <SmartphoneNfc /> */}
            <Nfc />
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;
