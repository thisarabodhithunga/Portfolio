export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
  category: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    demoLink: 'https://example.com',
    repoLink: 'https://github.com',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A sleek portfolio website template with smooth animations and responsive design.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Framer Motion', 'TailwindCSS'],
    demoLink: 'https://example.com',
    repoLink: 'https://github.com',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop functionality and team collaboration features.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'TypeScript', 'Firebase'],
    demoLink: 'https://example.com',
    repoLink: 'https://github.com',
    category: 'fullstack',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather dashboard with location search, 7-day forecast, and dynamic weather maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['JavaScript', 'HTML/CSS', 'OpenWeatherAPI'],
    demoLink: 'https://example.com',
    repoLink: 'https://github.com',
    category: 'frontend',
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    description: 'An online reservation system for restaurants with table management and customer notifications.',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'https://example.com',
    repoLink: 'https://github.com',
    category: 'fullstack',
  },
  {
    id: 6,
    title: 'Social Media Dashboard',
    description: 'A dashboard for managing social media accounts with analytics and post scheduling.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React', 'Redux', 'Chart.js'],
    demoLink: 'https://example.com',
    repoLink: 'https://github.com',
    category: 'frontend',
  },
];