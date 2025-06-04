import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, User, Calendar, MapPin, Briefcase, GraduationCap, Mail } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto"
          ></motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            {/* Simple oval image container with hover effect */}
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px] overflow-hidden rounded-full transition-all duration-300 hover:scale-105">
              <img 
                src="assets/about-thisara-bodhithunga.jpg" 
                alt="Thisara Bodhithunga"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Full-Stack Web & Mobile Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate Software Engineering undergraduate at the University of Ruhuna, 
              specializing in the MERN stack (MongoDB, Express.js, React, Node.js). I love coding, 
              problem-solving, and building efficient web applications. Always eager to learn, 
              innovate, and contribute to real-world projects.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              With 3+ years of experience building robust applications, I create seamless digital 
              experiences that bridge mobile and web platforms. My development approach emphasizes 
              clean architecture, performance optimization, and user-centric design.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <User size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Thisara Bodhithunga</span>
              </div>
              <div className="flex items-center">
                <Calendar size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Born: Feb 18, 1999</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Ratnapura, Sri Lanka</span>
              </div>
              <div className="flex items-center">
                <Briefcase size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Freelance Available</span>
              </div>
              <div className="flex items-center">
                <GraduationCap size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">BICT (Hons)</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">thisarabodhithunga@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="./files/Thisara_CV.pdf" download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  <Download size={18} className="mr-2" />
                  Download CV
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;