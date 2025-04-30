import React, { useEffect, useState } from "react";

const CursorPointer = ({ position }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div>
      <div
        className="fixed w-24 h-24 z-[10000] bg-white/20 rounded-full pointer-events-none blur-xl"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};

export default CursorPointer;
