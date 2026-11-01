import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiMedium } from 'react-icons/si';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Honors', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-gray-200 py-16 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-gray-200">
          
          {/* Identity & Positioning */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-950 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                KS
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                Karan Sundariya
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-700">
              Backend Software Engineer | Distributed Systems | Cloud Infrastructure | Applied GenAI
            </p>
            <p className="text-xs font-mono text-slate-500">
              Software Engineering Analyst @ Evernorth Health Services (The Cigna Group) · Hyderabad, India
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/karansundariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:bg-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-xs"
              title="GitHub"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="https://linkedin.com/in/karan-sundariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:bg-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-xs"
              title="LinkedIn"
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href="https://leetcode.com/u/karan__777/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:bg-slate-100 flex items-center justify-center text-amber-600 hover:text-amber-700 transition-colors shadow-xs"
              title="LeetCode (Knight 1897)"
            >
              <SiLeetcode size={17} />
            </a>
            <a
              href="https://medium.com/@karansundariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium Profile"
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:bg-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-xs"
              title="Medium Tech Blog"
            >
              <SiMedium size={17} />
            </a>
            <a
              href="https://www.codechef.com/users/karan__777"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodeChef Profile"
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:bg-slate-100 flex items-center justify-center text-amber-700 hover:text-amber-800 transition-colors shadow-xs"
              title="CodeChef (3-Star)"
            >
              <SiCodechef size={17} />
            </a>
            <a
              href="mailto:karansundariya@gmail.com"
              aria-label="Email Karan Sundariya"
              className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:bg-slate-100 flex items-center justify-center text-slate-700 hover:text-slate-950 transition-colors shadow-xs"
              title="Email"
            >
              <FaEnvelope size={15} />
            </a>
          </div>

        </div>

        {/* Navigation Quick Links & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-slate-950 text-slate-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors group font-semibold"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <FaArrowUp size={11} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Karan Sundariya. Built with modern React &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Calibrated for Tech Recruiters, ATS &amp; AI Agents</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
