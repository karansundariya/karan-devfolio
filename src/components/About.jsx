import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="section bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20"
    >
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 text-center"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white relative inline-block">
            About Me
            <span className="block w-16 h-1 bg-indigo-600 rounded-full mt-2 mx-auto"></span>
          </h2>

          <p className="text-lg leading-relaxed mb-8">
            I'm a passionate <span className="font-semibold text-indigo-600">Web Developer</span> and Software Engineer
            currently studying in the Final year of the Computer Science and Engineering Department (2022-26), at
            <span className="font-semibold text-pink-500"> Indian Institute of Information Technology (IIIT) Bhagalpur</span>.
            I enjoy building efficient and user-centric web solutions.With a strong grasp
            <span className="font-semibold text-green-600"> Data Structures, Algorithms</span>, and core CS fundamentals,
            I've contributed to startups, participated in <span className="font-semibold text-yellow-500"> national-level hackathons</span>,
            and developed full-stack applications addressing real-world problems.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href = "https://drive.google.com/file/d/1XxtMW1_tlUfAQM-_98xtlKz3vrO_E9CW/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg"
            >
              View Resume
            </a>

            <a
              href="assets/KaranSundariya_Resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg"
            >
              <FaDownload className="text-xl" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
