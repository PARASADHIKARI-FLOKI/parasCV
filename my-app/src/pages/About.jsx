import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  ServerIcon,
  CircleStackIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';
import image from '../assets/image.png' 

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
      icon: CodeBracketIcon,
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js'],
      icon: ServerIcon,
    },
    {
      category: 'Database',
      items: ['MongoDB'],
      icon: CircleStackIcon,
    },
    {
      category: 'Tools',
      items: ['VS Code', 'Postman', 'Git'],
      icon: CommandLineIcon,
    },
  ];

  return (
    <div id="about" className="min-h-screen py-16 bg-primary text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left: Image */}
        <div className="flex-1">
          <img
            src={image}
            alt="Workspace"
            className=" bg-[#112240] w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right: About Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-secondary mb-6">About Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl">
            I am a <span className="text-secondary font-semibold">motivated and enthusiastic MERN Stack Developer</span> 
            with a strong passion for learning and building meaningful web applications. 
            As a fresher, I bring a solid foundation in full stack development, with hands-on experience 
            in projects using <span className="text-secondary">MongoDB</span>, <span className="text-secondary">Express.js</span>, <span className="text-secondary">React.js</span>, and <span className="text-secondary">Node.js</span>. 
            I thrive on solving real-world problems through clean, scalable code and enjoy turning ideas into user-friendly digital experiences. 
            Eager to work with collaborative teams, I am committed to <span className="text-secondary font-semibold">continuous learning</span>, 
            adapting to challenges, and growing as a developer while contributing to impactful projects.
          </p>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#112240] p-5 rounded-lg shadow-md"
              >
                <skill.icon className="h-7 w-7 text-secondary mb-3" />
                <h3 className="text-xl font-semibold mb-3">{skill.category}</h3>
                <ul className="space-y-1 text-gray-300">
                  {skill.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
