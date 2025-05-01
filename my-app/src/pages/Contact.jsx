import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#0a192f] text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#64ffda]">
          Let's Connect
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300">
          As a budding MERN Stack Developer, I’m eager to collaborate, learn,
          and contribute to meaningful projects. Whether you’re hiring,
          mentoring, or just want to chat—feel free to reach out!
        </p>

        <div className="flex justify-center gap-8 text-3xl mb-6">
          <a
            href="https://mail.google.com/mail/?view=cm&to=adhikariparasr@gmail.com"
            aria-label="Send an email via Gmail"
            className="text-blue-300 hover:text-purple-500 transition-transform transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineMailOutline />
          </a>

          <a
            href="https://www.linkedin.com/in/paras-adhikari-9a5158322/"
            aria-label="Visit LinkedIn profile"
            className="text-blue-300 hover:text-purple-500 transition-transform transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/PARASADHIKARI-FLOKI"
            aria-label="Visit GitHub profile"
            className="text-blue-300 hover:text-purple-500 transition-transform transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <h1 className="border border-[#203b6a]"></h1>
    </div>
  );
};

export default Contact;
