import React from "react";
import { projects } from "../projects";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 gap-20 px-4 sm:px-8 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="card w-[250px] h-[250px] relative bg-gradient-to-br from-blue-400/10 to-purple-400/10  bg-black  flex flex-col justify-center p-[12px] gap-[12px] rounded-[8px] cursor-pointer text-center mx-auto  text-white shadow-lg"
          variants={cardVariants}
        >
          <motion.p
            className="card-p heading text-lg lg:text-xl font-bold mb-4"
            whileHover={{ scale: 1.02 }}
          >
            {project.name}
          </motion.p>
          <p className="text-gray-600 mb-4">{project.about}</p>

          <motion.button
            className="relative overflow-hidden"
            onClick={() =>
              window.open(project.link, "_blank", "noopener,noreferrer")
            }
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="shadow absolute inset-0 bg-black/10 rounded-lg" />
            <span className="edge absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
            <span className="front text relative block px-6 py-3 text-white rounded-lg">
              View Project
            </span>
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
