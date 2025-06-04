import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Info } from 'lucide-react';

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
  category: string;
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projectData: ProjectType[] = [
    {
      id: 1,
      title: 'Wenujaya Rent Car Website',
      description: 'Developed a full-stack car rental platform using Laravel and MySQL backend with Tailwind CSS frontend. Implemented Jetstream authentication for secure user roles (customer/admin) and Stripe integration for payment processing.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Laravel',' Tailwind CSS',' MySQL',' Stripe',' Jetstream', 'Filament'],
      demoLink: '#',
      repoLink: 'https://github.com/thisarabodhithunga/car-rent-management-system.git',
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'Conversation Analytics Recording App',
      description: "Developed a Flutter-based mobile app for quantitative conversation analysis using Google's Speech-to-Text API and speaker diarization. Processes audio to calculate speaking time metrics (WTA/WTB), silence intervals (STA/STB/STM), and turn-taking patterns. Features real-time analytics dashboard with 8 conversational KPIs, Firebase-backed session history, and exportable reports. Integrated audio waveform visualization and minimalist recording controls to meet clinical research requirements for measurable dialogue assessment",
      image: './assets/conversation-analyze-app-flutter.jpeg',
      tags: ['Flutter',' Dart',' Firebase', 'Google Speech-to-Text', 'Audio Diarization',' Real-time Analytics'],
      demoLink: '#',
      repoLink: '#',
      category: 'fullstack',
    },
    {
      id: 3,
      title: ' Order Processing System',
      description: "Full-stack order management system combining a Flutter mobile app (QR code scanning, offline stock updates, and invoice generation for field teams), Laravel admin dashboard (real-time order tracking/product assignment with Bootstrap UI), and Node.js REST API middleware. Automated stock reconciliation and geotagged task alerts reduced fulfillment delays by 30%, while PDF report generation and MySQL data synchronization streamlined warehouse-retailer communications across 150+ stores.",
      image: './assets/order-processing-flutter-app.png',
      tags: ['Flutter','Laravel',' Node.js',' MySQL',' Bootstrap',' REST API'],
      demoLink: '#',
      repoLink: 'https://github.com/sasankadeshapriya/order-processing-app-flutter.git',
      category: 'fullstack',
    },
    {
      id: 4,
      title: 'University Management Information System',
      description: "Desktop application built with Java Swing and MySQL for centralized academic operations. Manages student enrollments, course scheduling, and faculty workloads with CRUD interfaces. Features gradebook management, attendance tracking, and automated timetable generation, reducing administrative data entry time by 50% through batch processing and CSV imports/exports.",
      image: './assets/techmis-java-mysql-thisarabodhithunga.png',
      tags: ['Java',' Swing','MySQL','Desktop Application'],
      demoLink: '#',
      repoLink: 'https://github.com/sasankadeshapriya/tecmis.git',
      category: 'fullstack',
    },
    {
  "id": 5,
  "title": "Flutter To-Do App with Firebase",
  "description": "A cross-platform to-do application with real-time synchronization, user authentication, and cloud data storage using Firebase.",
  "image": "./assets/to-do-app-flutter-thisarabodhithunga.jpeg",
  "tags": ["Flutter", "Firebase", "Dart", "Firestore", "Authentication"],
  "demoLink": "#",
  "repoLink": "https://github.com/thisarabodhithunga/flutter-todo-app.git",
  "category": "mobile"
},
    // {
    //   id: 6,
    //   title: 'Social Media Dashboard',
    //   description: 'A dashboard for managing social media accounts with analytics and post scheduling.',
    //   image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   tags: ['React', 'Redux', 'Chart.js'],
    //   demoLink: 'https://example.com',
    //   repoLink: 'https://github.com',
    //   category: 'frontend',
    // },
  ];

  const filterButtons = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Full Stack', value: 'fullstack' },
  ];

  const filteredProjects = projectData.filter(
    (project) => filter === 'all' || project.category === filter
  );

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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"
          ></motion.div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            A collection of my recent projects, showcasing my skills in web development and design.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterButtons.map((button) => (
              <button
                key={button.value}
                onClick={() => setFilter(button.value)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  filter === button.value
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-custom dark:shadow-custom-dark overflow-hidden group"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300">
                      <Info size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;