import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaLaptopCode,
  FaServer,
  FaNetworkWired,
  FaCode,
  FaLeaf,
  FaDocker,
  FaCodeBranch,
  FaCogs,
  FaCloud,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiCplusplus, SiMysql, SiRedis } from 'react-icons/si';

const skillsData = {
  'Core CS Fundamentals': [
    { name: 'DSA', icon: FaLaptopCode, color: 'text-yellow-600' },
    { name: 'System Design', icon: FaLaptopCode, color: 'text-red-500' },
    { name: 'OOPS', icon: FaCode, color: 'text-purple-600' },
    { name: 'C/C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'DBMS', icon: FaDatabase, color: 'text-green-600' },
    { name: 'Operating Systems', icon: FaCogs, color: 'text-blue-700' },
    { name: 'Computer Networks', icon: FaNetworkWired, color: 'text-cyan-600' },
  ],
  'Backend': [
    { name: 'Java', icon: FaCodeBranch, color: 'text-orange-500' },
    { name: 'Spring Boot', icon: FaLeaf, color: 'text-green-600' },
    { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-500' },
    { name: 'Kafka', icon: FaCogs, color: 'text-gray-600' },
    { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
  ],
  'Frontend': [
    { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  ],
  'Database': [
    { name: 'SQL', icon: FaServer, color: 'text-indigo-600' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  ],
  'Cloud & DevOps': [
    { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
    { name: 'AWS', icon: FaCloud, color: 'text-orange-600' },
  ],
  'Tools & Version Control': [
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-700 dark:text-white' },
    { name: 'SDLC', icon: FaCode, color: 'text-indigo-700' },
  ],
};

// Flatten for animation purposes
const allSkills = Object.values(skillsData).flat();

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white relative inline-block">
            Skills
            <span className="block w-20 h-1 bg-indigo-600 rounded-full mt-3 mx-auto"></span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                {category}
              </h3>
              
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {skills.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    variants={item}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-110 duration-300 cursor-default border border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500"
                    title={name}
                    aria-label={name}
                  >
                    <Icon className={`text-4xl ${color} mb-2`} />
                    <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 text-center">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
