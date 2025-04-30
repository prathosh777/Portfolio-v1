import React, { useState, useEffect } from "react";
import { CircleUser, FolderKanban, House, SmartphoneNfc } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { icon: <House size={20} />, id: "home", title: "Home" },
    { icon: <CircleUser size={20} />, id: "about", title: "Profile" },
    { icon: <FolderKanban size={20} />, id: "project", title: "Projects" },
    { icon: <SmartphoneNfc size={20} />, id: "contact", title: "Contact" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const detectMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|iPhone|iPad|iPod|Windows Phone|Mobile/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

    detectMobile(); 

    window.addEventListener("resize", detectMobile);

    return () => window.removeEventListener("resize", detectMobile);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      threshold: 0.5, // 50% of the section must be visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section); 
    });

    return () => observer.disconnect();
  }, [navItems]);

  return (
    <header
      className={
        isMobile
          ? "fixed bottom-0 left-0 w-full flex justify-around  bg-gradient-to-br from-blue-400/10 to-purple-400/10 backdrop-blur-sm py-2 px-4 border border-slate-800 z-[500000]"
          : "fixed top-[20vh] left-5 text-white lg:py-8 lg:px-4  bg-gradient-to-br from-blue-400/10 to-purple-400/10 backdrop-blur-sm border border-slate-800 py-8 px-4 rounded-lg z-[500000]"
      }
    >
      <nav
        className={
          isMobile ? "flex justify-around w-full" : "flex flex-col gap-20"
        }
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            // className={`cursor-pointer w-8 h-8 flex items-center justify-center transition-colors ${
            //   activeSection === item.id
            //     ? "text-purple-400 bg-gray-400 rounded-full" // Active styles
            //     : "text-white rounded-full" // Default styles
            // }`}
            className={`p-2 transition-all duration-300 ${
              activeSection === item.id
                ? "text-white background rounded-full shadow-lg shadow-purple-400/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rotate-45 before:-translate-x-full before:animate-shine" // Active state
                : "text-white/80 hover:text-purple-300 hover:bg-purple-400/10 rounded-full border border-transparent hover:border-purple-400/20" // Default state
            }`}
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {item.icon}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
