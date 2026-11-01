import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaFileDownload,
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCopy,
  FaCheck,
  FaTimes,
  FaRobot,
  FaBriefcase,
  FaServer,
  FaCode,
  FaLayerGroup,
  FaCloud,
  FaDatabase,
} from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiMedium } from 'react-icons/si';

const coreTechTags = [
  'Java',
  'C++',
  'Spring Boot',
  'Apache Kafka',
  'AWS',
  'Python',
  'Redis Geospatial',
  'MERN (React · Node · Express)',
  'MongoDB',
  'MySQL / SQL',
  'Docker',
  'LiteLLM / GenAI',
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/karan-sundariya',
    icon: FaLinkedin,
    hoverClass: 'hover:text-blue-600 hover:bg-blue-50',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/karansundariya',
    icon: FaGithub,
    hoverClass: 'hover:text-black hover:bg-slate-100',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/karan__777/',
    icon: SiLeetcode,
    hoverClass: 'hover:text-amber-600 hover:bg-amber-50',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@karansundariya',
    icon: SiMedium,
    hoverClass: 'hover:text-emerald-600 hover:bg-emerald-50',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/karan__777',
    icon: SiCodechef,
    hoverClass: 'hover:text-amber-700 hover:bg-amber-50',
  },
  {
    name: 'Email',
    url: 'mailto:karansundariya@gmail.com',
    icon: FaEnvelope,
    hoverClass: 'hover:text-orange-600 hover:bg-orange-50',
  },
];

const credentialsBar = [
  { label: 'Current Employment', name: 'Evernorth Health Services', sub: 'The Cigna Group · Full-Time Analyst' },
  { label: 'Alma Mater', name: 'IIIT Bhagalpur', sub: 'B.Tech CSE · 8.29 / 10.0 CGPA' },
  { label: 'Algorithmic Rank', name: 'LeetCode Knight', sub: '1897 Max Rating · Top 4.7% Globally' },
  { label: 'National Recognition', name: 'Flipkart GRiD 6.0', sub: 'Top 1.65% (8,000 / 484,308)' },
];

export default function Hero() {
  const [showDossier, setShowDossier] = useState(false);
  const [copied, setCopied] = useState(false);

  const candidateSummaryText = `CANDIDATE SUMMARY — KARAN SUNDARIYA
--------------------------------------------------
Status: Actively Open to New Roles & Engineering Opportunities (SDE I / SDE II, Backend, Distributed Systems, Full-Stack)
Primary Position: Backend & Distributed Systems Software Engineer
Current Role: Software Engineering Analyst @ Evernorth Health Services (The Cigna Group)
Location: Hyderabad, Telangana, India | Open to Relocation

CORE TECHNICAL COMPETENCIES (From Resume):
• Programming Languages: C++, Java, Python, JavaScript (ES6+), SQL
• Backend & Distributed Systems: Spring Boot, Apache Kafka, Redis Geospatial, ShedLock Distributed Locking, Idempotent Processing, Microservices, RESTful APIs, System Design (HLD & LLD)
• Full-Stack & MERN: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, HTML5, CSS3, Cloudinary, JWT & bcrypt
• Cloud & DevOps: AWS (EC2, S3, Lambda, Step Functions, SQS, CloudWatch), Terraform (IaC), Docker, Jenkins CI/CD, Linux
• Databases: MySQL, MongoDB, DynamoDB, PostgreSQL, Redis, OpenSearch
• Systems & Performance: Modern C++, Multithreading & Mutexes, STL Containers, Memory Optimization (Smart Pointers, Valgrind), Qt Framework
• Enterprise GenAI: LiteLLM Multi-Model Routing, Prompt Engineering, Structured JSON Schema Validation
• Problem Solving & Algorithmic Rigor: 1,100+ Solved Challenges | LeetCode Knight (Peak Rating: 1897, Top 4.7% Globally) | Flipkart GRiD 6.0 Top 1.65% | CodeKaze AIR 920

Verified Links:
- Live Portfolio: https://karan-devfolio.vercel.app/
- GitHub: https://github.com/karansundariya
- LinkedIn: https://linkedin.com/in/karan-sundariya
- LeetCode: https://leetcode.com/u/karan__777/
- Medium Tech Articles: https://medium.com/@karansundariya
- Email: karansundariya@gmail.com | Phone: +91-8058702298`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(candidateSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-white sarvam-sunrise-glow"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center my-auto pt-6">
        
        {/* Availability Status Pill Indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-emerald-300 shadow-sm text-slate-800 mb-8 hover:border-emerald-400 transition-all">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-800 font-bold uppercase tracking-wider text-[11px]">Available for New Roles:</span>
          <span>Software Engineering Analyst · Evernorth (The Cigna Group)</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
            Hi, I'm{' '}
            <span className="text-slate-900">
              Karan Sundariya
            </span>
            .
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 tracking-tight max-w-3xl mx-auto leading-snug">
            Building reliable backend systems, distributed architectures, and intelligent software.
          </p>
        </div>

        {/* Concise Description */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Software Engineering Analyst at Evernorth Health Services &amp; Computer Science graduate from IIIT Bhagalpur. Experienced across Java, C++, Spring Boot, Kafka, AWS, MERN stack, and applied GenAI.
        </p>

        {/* Technology Highlights (Comprehensive & Balanced) */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            {coreTechTags.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:bg-slate-100 hover:border-slate-300 transition-colors shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons (Solid Black Pill + Outline Pill + Recruiter Dossier) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-slate-950 text-white hover:bg-black transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Explore Architecture</span>
            <FaArrowRight size={12} />
          </a>

          <a
            href="/assets/KaranSundariya_Resume.pdf"
            download="KaranSundariya_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-white border border-gray-300 text-slate-800 hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm active:scale-95"
          >
            <FaFileDownload size={13} className="text-slate-600" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => setShowDossier(true)}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-xs font-mono bg-orange-50 border border-orange-200 text-orange-900 hover:bg-orange-100 transition-all shadow-sm active:scale-95"
          >
            <FaRobot size={13} className="text-orange-600" />
            <span>Recruiter &amp; AI Dossier</span>
          </button>
        </div>

        {/* Social Icons Bar */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {socialLinks.map(({ name, url, icon: IconComponent, hoverClass }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-500 transition-all shadow-xs ${hoverClass}`}
              aria-label={name}
              title={name}
            >
              {IconComponent({ size: 16 })}
            </a>
          ))}
        </div>

      </div>

      {/* Institutional Ribbon Below Hero */}
      <div className="mt-16 pt-8 border-t border-gray-200/60 max-w-5xl mx-auto w-full px-4 sm:px-6">
        <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-4 text-center">
          Verified Credentials &amp; Industry Experience
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {credentialsBar.map((cred) => (
            <div key={cred.label} className="p-3 rounded-2xl bg-white/70 border border-gray-100 shadow-2xs">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                {cred.label}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                {cred.name}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {cred.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recruiter & AI Fast-Track Dossier Modal */}
      <AnimatePresence>
        {showDossier && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl border border-gray-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                    <FaRobot size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Technical Recruiter &amp; AI Evaluation Dossier
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      Factual candidate profile for hiring managers &amp; ATS parsers
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowDossier(false)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close dossier"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {/* Body */}
              <div className="py-6 space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-500 font-medium">Availability / Status:</div>
                    <div className="text-emerald-700 font-bold mt-0.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      Actively Open to New Roles (SDE I / II)
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-500 font-medium">Current Position:</div>
                    <div className="text-slate-950 font-bold mt-0.5">Software Engineering Analyst @ Evernorth</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-500 font-medium">Academic Credentials:</div>
                    <div className="text-slate-950 font-bold mt-0.5">B.Tech CSE, IIIT Bhagalpur (8.29 CGPA)</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-slate-500 font-medium">Algorithmic Rank:</div>
                    <div className="text-amber-700 font-bold mt-0.5">LeetCode Knight (1897 Rating, Top 4.7%)</div>
                  </div>
                </div>

                {/* Comprehensive Skills from Resume */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                    <FaBriefcase className="text-orange-600" />
                    <span>Executive Candidate Technical Summary (Resume-Verified):</span>
                  </div>
                  
                  <div className="space-y-2 text-slate-700 leading-relaxed text-xs">
                    <div>
                      • <strong className="text-slate-900">Programming Languages:</strong> C++, Java, Python, JavaScript (ES6+), SQL.
                    </div>
                    <div>
                      • <strong className="text-slate-900">Backend &amp; Distributed Systems:</strong> Java, Spring Boot, Apache Kafka, Redis Geospatial indexing, ShedLock distributed locking, Idempotent Processing, RESTful APIs, System Design (HLD &amp; LLD).
                    </div>
                    <div>
                      • <strong className="text-slate-900">Systems &amp; C++:</strong> Modern C++, Multithreading &amp; Mutexes, STL Containers, Memory Optimization (Smart Pointers, Valgrind), Qt Framework &amp; QML.
                    </div>
                    <div>
                      • <strong className="text-slate-900">Full-Stack &amp; MERN:</strong> React.js, Node.js, Express.js, MongoDB, Tailwind CSS, HTML5, CSS3, Cloudinary, Role-Based Access (JWT &amp; bcrypt).
                    </div>
                    <div>
                      • <strong className="text-slate-900">Cloud &amp; DevOps:</strong> AWS (EC2, S3, Lambda, Step Functions, SQS, CloudWatch), Terraform (IaC), Docker, Jenkins CI/CD, Linux.
                    </div>
                    <div>
                      • <strong className="text-slate-900">Databases:</strong> MySQL, MongoDB, DynamoDB, PostgreSQL, Redis, OpenSearch.
                    </div>
                    <div>
                      • <strong className="text-slate-900">Enterprise GenAI:</strong> Production recommendation pipelines with LiteLLM, prompt engineering, multi-model evaluation across 5 models, structured JSON schemas.
                    </div>
                    <div>
                      • <strong className="text-slate-900">Problem Solving &amp; Leadership:</strong> 1,100+ solved DSA challenges (LeetCode Knight 1897 rating, Top 4.7%), Coding Club Lead at IIIT Bhagalpur, Flipkart GRiD 6.0 Top 1.65%, CodeKaze AIR 920.
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs font-mono flex items-center justify-between">
                  <span>Machine-readable endpoint: /llms.txt</span>
                  <a
                    href="/llms.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-orange-700 hover:text-orange-900"
                  >
                    Open Raw llms.txt &rarr;
                  </a>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-bold bg-slate-900 text-white hover:bg-black transition-all shadow-sm"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  <span>{copied ? 'Summary Copied to Clipboard!' : 'Copy Summary for Hiring Manager / Slack'}</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="/assets/KaranSundariya_Resume.pdf"
                    download="KaranSundariya_Resume.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold border border-gray-300 text-slate-800 hover:bg-gray-50"
                  >
                    <FaFileDownload size={12} />
                    <span>Download CV</span>
                  </a>
                  <button
                    onClick={() => setShowDossier(false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-900"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
