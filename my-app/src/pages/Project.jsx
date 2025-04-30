import React from 'react';
import { motion } from 'framer-motion';
import GitHubProjects from '../components/GitHubProjects';

const Projects = () => {
  return (
    <div id='projects' className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">My Projects</h1>
          <p className="text-gray-300 mb-12 text-lg">
            Here are some of the projects I've worked on using the MERN stack
          </p>

          <GitHubProjects />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
