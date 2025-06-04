import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';


const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-dark">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl font-medium text-primary-600 dark:text-primary-400 mb-4">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Thisara Bodhithunga
            </h1>            
            <h3 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
  <span className="font-semibold">Full-Stack Developer</span> & <span className="font-semibold">Mobile App Specialist</span>
</h3>
<p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
   Developing pixel-perfect web solutions using cutting-edge patterns and workflows </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300"
>
  <Link 
    to="projects" 
    smooth={true} 
    duration={500} 
    offset={-70}
    className="cursor-pointer"
  >
    View My Work
  </Link>
</motion.button>
              <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-medium rounded-md hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors duration-300"
>
  <Link 
    to="contact" 
    smooth={true} 
    duration={500} 
    offset={-70}
    className="cursor-pointer"
  >
    Contact Me
  </Link>
</motion.button>
            </div>

            <div className="mt-12 flex space-x-6">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary-600 dark:text-primary-400">2+</span>
                <span className="text-gray-600 dark:text-gray-400">Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary-600 dark:text-primary-400">10+</span>
                <span className="text-gray-600 dark:text-gray-400">Projects</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary-600 dark:text-primary-400">3+</span>
                <span className="text-gray-600 dark:text-gray-400">Clients</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="order-1 lg:order-2 flex justify-center"
>
  <div className="relative w-80 h-80"> {/* Equal width and height */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full filter blur-3xl opacity-20 transform scale-110"></div>
    
    {/* Circular Image Container */}
    <div className="relative z-10 overflow-hidden rounded-full border-4 border-white/20 shadow-custom dark:shadow-custom-dark aspect-square">
      <img 
        src="assets\Hero-thisara-bodhithunga.jpg"
        alt="Portrait" 
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-gray-600 dark:text-gray-400 mb-2 animate-bounce">
            <ChevronDown size={24} />
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">Scroll Down</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;