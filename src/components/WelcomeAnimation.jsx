import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const WelcomeAnimation = () => {
  const texts = [
    { content: "<HELLO>", delay: 1000 },
    { content: "I\n\n am \n\n Prathosh\n\n Kumar", delay: 2500 },
    { content: `A\n\n MERN\n\n Stack\n\n Developer`, delay: 4600 },
    { content: `console.log("Portfolio")`, delay: 7800 }
  ];

  const [visibleTexts, setVisibleTexts] = useState(Array(texts.length).fill(false));

  useEffect(() => {
    texts.forEach((text, index) => {
      setTimeout(() => {
        setVisibleTexts(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, text.delay);
    });
  }, []);

  const renderAnimatedText = (content) => {
    return content.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{
          delay: index * 0.08,
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        whileHover={{
          y: -2,
          scale: 1.1,
          color: "#c084fc",
          transition: { type: "spring", stiffness: 300 },
        }}
        className="inline-block mx-1 lg:mx-[2px]"
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div className="text-sm text-start text-slate-300 space-x-[1.5px] lg:space-x-1 space-y-2 lg:space-y-5 md:text-4xl sm:text-xl lg:text-5xl font-bold w-[100%]">
      {texts.map((text, index) => (
        <React.Fragment key={index}>
          {visibleTexts[index] && renderAnimatedText(text.content)}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default WelcomeAnimation;