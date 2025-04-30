import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const GitHubProjects = () => {
  const repositories = [

    {
      name: 'spotify-clone',
      description: 'Spotify clone application',
      url: 'https://github.com/PARASADHIKARI-FLOKI/spotify-clone'
    },
    {
      name: 'Realtime-Chat',
      description: 'Real-time chat application',
      url: 'https://github.com/PARASADHIKARI-FLOKI/Realtime-Chat'
    },
     
    {
      name: 'LMSFULL',
      description: 'lms application',
      url: 'https://github.com/PARASADHIKARI-FLOKI/LMSFULL.git'
    },
  
    {
      name: 'Educational Platform',
      description: 'Educational Platform application',
      url: 'https://github.com/PARASADHIKARI-FLOKI/sipalaya.git'
    },
    {
      name: 'Prime-Finder-app',
      description: 'prime-finder-app',
      url: 'https://github.com/PARASADHIKARI-FLOKI/prime-finder-app.git'
    },
    {
      name: 'E-commerce',
      description: 'E-commerce platform',
      url: 'https://github.com/PARASADHIKARI-FLOKI/E-commerce'
    },
   
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-8">
            <CodeBracketIcon className="h-8 w-8 text-[#64ffda] mr-2" />
            <h2 className="text-3xl font-bold text-white">GitHub Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#112240] p-6 rounded-lg hover:transform hover:scale-105 transition-transform"
              >
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="block">
                  <h3 className="text-xl font-semibold text-white mb-2">{repo.name}</h3>
                  <p className="text-gray-300 mb-4">{repo.description}</p>
                  <div className="flex items-center">
                  
                    <span className="ml-auto text-[#64ffda] hover:underline">View on GitHub →</span>
                  </div>
                </a>
               
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
      <div className="mt-8 flex justify-center">
  <a
    href="https://github.com/PARASADHIKARI-FLOKI"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#64ffda] hover:text-blue-600 text-lg font-medium"
  >
     see more
  </a>
</div>
    </div>
  );
};

export default GitHubProjects; 