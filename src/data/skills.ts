export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: 'code',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3/SCSS', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'React.js', level: 88 },
      { name: 'TypeScript', level: 85 },
    ],
  },
  {
    title: 'UI/UX Design',
    icon: 'paintbrush',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Sketch', level: 75 },
      { name: 'User Research', level: 82 },
      { name: 'Wireframing', level: 90 },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'database',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'RESTful APIs', level: 90 },
    ],
  },
  {
    title: 'Others',
    icon: 'layers',
    skills: [
      { name: 'Git/GitHub', level: 92 },
      { name: 'Responsive Design', level: 95 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Next.js', level: 82 },
      { name: 'Testing (Jest/RTL)', level: 78 },
    ],
  },
];