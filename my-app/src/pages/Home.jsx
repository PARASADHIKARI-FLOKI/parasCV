import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import Project from './Project'
import Contact from './Contact';
import image1 from '../assets/image1.png' 


const Home = () => {
  return (
    <div className="text-white min-h-screen bg-[#0a192f]">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Hello, I'm <span className="text-pink-500">Paras</span>
          </h1>

          {/* TypeAnimation replaces static h2 */}
          <TypeAnimation
            sequence={[
              'MERNSTACK DEVELOPER', 2000,
              '',1000,
              
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-4xl md:text-5xl font-bold mt-4 text-white"
          />

          <p className="text-gray-300 text-lg mt-6 leading-relaxed">
          I'm a passionate MERN Stack Developer eager to bring fresh energy and modern solutions to real-world problems. With hands-on experience building full-stack projects using React, Node.js, Express, and MongoDB, I focus on creating clean, scalable, and user-friendly applications. As a fast learner and problem solver, I'm ready to contribute, grow, and help turn great ideas into powerful digital products. Let’s build something impactful together.          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="/#contact" className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition">
              Hire Me
            </a>
            <a
              href="https://drive.google.com/drive/u/2/home"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition"
            >
              View CV
            </a>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-12 md:mb-0 flex justify-center"
        >
          <img
            src={image1}
            alt="Developer illustration"
            className="w-80 h-auto rounded-full bg-[#112240] p-6"
          />
        </motion.div>
      </div>

      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
