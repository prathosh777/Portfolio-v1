
import React from "react";
import { Instagram, Mail, Github, MessageCircle, Linkedin } from "lucide-react"; // Lucide icons
import { FaWhatsapp } from "react-icons/fa";

const SocialButtons = () => {
  const handleScroll = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex mx-auto justify-center  w-20 md:mt-5 mt-3 space-y-2">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/base__ment__fox__"
        className="flex justify-center mt-2 items-center h-10 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 rounded-l-lg hover:rounded-lg hover:scale-110 transition-transform duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="  md:px-5  w-10 md:w-20 h-6 text-white" />
      </a>

      {/* Gmail */}
      <a
        onClick={handleScroll}
        className="flex justify-center items-center h-10 bg-red-500 hover:rounded-lg hover:scale-110 transition-transform duration-200"
      >
        <Mail className="md:px-5 w-10 md:w-20 h-6 text-white" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/prathosh777"
        className="flex justify-center items-center h-10 bg-gray-800 hover:rounded-lg hover:scale-110 transition-transform duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="md:px-5 w-10 md:w-20 h-6 text-white" />
      </a>
      {/* Linkedin  */}

      <a
        href="https://www.linkedin.com/in/prathosh-kumar-5373ba248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="flex justify-center items-center h-10 bg-[#0A66C2] hover:rounded-lg hover:scale-110 transition-transform duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="md:px-5 w-10 md:w-20 h-6 text-white" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/8438014305?text=Hello%20I%20saw%20your%20portfolio!"
        className="flex justify-center items-center h-10 bg-green-500 rounded-r-lg hover:rounded-lg hover:scale-110 transition-transform duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="md:px-5 w-10 md:w-20 h-6 text-white" />
      </a>
    </div>
  );
};

export default SocialButtons;
