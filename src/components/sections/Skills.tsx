import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Paintbrush, Layers, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SCSS', level: 70 },
        { name: 'Flutter', level: 90 },
        { name: 'JavaScript', level: 60 },
        { name: 'React.js', level: 60 },
        
      ],
    },
    {
      title: 'UI/UX Design',
      icon: <Paintbrush size={24} />,
      skills: [
        { name: 'Figma', level: 55 },
        { name: 'Adobe XD', level: 50 },
        { name: 'Sketch', level: 40 },
        { name: 'User Research', level: 30 },
        { name: 'Wireframing', level: 20 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Database size={24} />,
      skills: [
        { name: 'Laravel', level: 88 },   // Added Laravel
        { name: 'PHP', level: 85 },
        { name: 'Node.js', level: 50 }, 
        { name: 'Express.js', level: 50 },      // Added PHP
        { name: 'MySQL', level: 90 },      // Emphasized MySQL
        { name: 'RESTful APIs', level: 90 },
        
      ],
    },
    {
      title: 'Others',
      icon: <Layers size={24} />,
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Responsive Design', level: 95 },
        { name: 'TailwindCSS', level: 90 },
        { name: 'Next.js', level: 52 },
        { name: 'Testing (Jest/RTL)', level: 48 },
      ],
    },
  ];

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
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"
          ></motion.div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills and expertise across various domains of web development and design.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-custom dark:shadow-custom-dark p-6"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;