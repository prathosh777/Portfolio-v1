import React, { Suspense, useEffect, useState } from "react";
import WelcomeAnimation from "../components/WelcomeAnimation.jsx";
import ScrollDownButton from "../components/ScrollDownButton.jsx";
import { motion } from "framer-motion";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Welcome from "../../public/Welcome.jsx";
import "../App.css";
import Loader from "../components/Loader-1.jsx";

import SocialButtons from "../components/SocialLinks.jsx";

const Home = () => {
  const [loading, setLoading] = useState(true); // Initialize as true
  useEffect(() => {
    // Simulate loading assets or data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id="home"
      className=" lg:h-[100vh] h-[90vh] flex items-center px-4 md:px-8 lg:px-16 bg-gray-950"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/*-------------------------------------Left Column-------------------------------------*/}
          {loading ? (
            <div className="flex md:h-screen h-[50vh] items-center justify-center">
              {" "}
              <Loader />
            </div>
          ) : (
            <div>
              <div
                className=" order-1 lg:order-2 lg:w-[100%]  h-[50vh] lg:h-[80vh] lg:mt-[200px] mt-[100px] 1/4 "
                alt="I am actually a 3d Dog"
              >
                <Canvas>
                  <ambientLight intensity={0} />
                  <OrbitControls enableZoom={false} />
                  <Suspense fallback={null}>
                    {/* <Cup /> */}
                    <Welcome />
                  </Suspense>
                  <Environment preset="sunset" />
                  <ContactShadows
                    position={[0, -1, 0]}
                    opacity={2}
                    scale={50}
                    blur={2}
                    far={20}
                    resolution={256}
                    color="#fff"
                  />
                </Canvas>
              </div>{" "}
            </div>
          )}

          {/*-------------------------------------Right Column-------------------------------------*/}
          <div className="order-2 w-[90%] md:w-full   lg:order-2 ">
            <motion.div
              whileHover={{
                scale: 1.01,
                boxShadow: "5px 10px 15px #000",
                transition: { duration: 0.5 },
              }}
              className="order-2 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-slate-800 lg:order-2  rounded-3xl lg:text-left space-y-6  lg:w-[110%] mx-auto   sm:w-[80%] p-3 lg:space-y-8 relative"
            >
              <WelcomeAnimation />
            </motion.div>
            <SocialButtons />
          </div>

          {/*-------------------------------------Scroll Button-------------------------------------*/}
          <div className="order-3 col-span-full flex justify-center mt-8  lg:absolute  lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2">
            <ScrollDownButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
