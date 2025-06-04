import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Cpu, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'Dart' },
        { name: 'PHP' },
        { name: 'Java' },
        { name: 'Python' },
        { name: 'JavaScript' }
      ],
    },
    {
      title: 'Frameworks',
      icon: <Cpu size={24} />,
      skills: [
        { name: 'Flutter' },
        { name: 'Laravel' },         
        { name: 'React.js' }
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: <Server size={24} />,
      skills: [
        { name: 'Git/GitHub' },
        { name: 'Firebase (Auth, DB)' },
        { name: 'Stripe API (Payments)' },
        { name: 'MySQL' },
        { name: 'Figma (UI/UX)' }
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: [
        { name: 'Team Collaboration' },
        { name: 'Agile/Scrum' },
        { name: 'Problem-Solving' },
        { name: 'Debugging' }
      ],
    },
  ];

  const filterCategories = ['All', ...skillCategories.map(category => category.title)];

  const filteredCategories = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(category => category.title === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My <span className="text-primary-600 dark:text-primary-400">Toolkit</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"
          ></motion.div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and skills I use to build solutions
          </p>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-custom dark:shadow-custom-dark p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Add a subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.1 * skillIndex }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "var(--primary-100)",
                      color: "var(--primary-800)",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                    }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Carousel */}
        <motion.div
          className="mt-16 overflow-hidden w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Outer container (needed for group hover) */}
          <div className="relative w-full overflow-hidden whitespace-nowrap group">
            {/* Scrolling area */}
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...Array(2)].flatMap((_, repeatIndex) =>
                [
                  "android", "java", "dart", "php", "python", "javascript", "flutter",
                  "laravel", "react", "github", "firebase", "mysql", "figma"
                ].map((icon, index) => (
                  <div
                    key={`${repeatIndex}-${icon}-${index}`}
                    className="w-12 h-12 mx-8 transition-transform duration-300 ease-in-out hover:scale-125 group-hover:[animation-play-state:paused]"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
                      alt={icon}
                      className="w-full h-full"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;