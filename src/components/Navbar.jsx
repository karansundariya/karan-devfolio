import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiMedium } from 'react-icons/si';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Skills', href: '#skills' },
  { name: 'Honors', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 text-left focus:outline-none rounded-lg p-1 group"
            aria-label="Karan Sundariya - Home"
          >
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-black transition-colors">
              KS
            </div>
            <div>
              <span className="block text-sm font-bold tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                Karan Sundariya
              </span>
              <span className="block text-[11px] font-mono text-slate-500">
                Backend Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com/karansundariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              title="GitHub"
            >
              <FaGithub size={17} />
            </a>
            <a
              href="https://linkedin.com/in/karan-sundariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href="https://leetcode.com/u/karan__777/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-2 text-slate-500 hover:text-amber-600 hover:bg-slate-100 rounded-full transition-colors"
              title="LeetCode Knight (Rating: 1897)"
            >
              <SiLeetcode size={17} />
            </a>
            <a
              href="https://medium.com/@karansundariya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium Profile"
              className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-slate-100 rounded-full transition-colors"
              title="Medium Articles"
            >
              <SiMedium size={17} />
            </a>

            <a
              href="/assets/KaranSundariya_Resume.pdf"
              download="KaranSundariya_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-slate-900 text-white hover:bg-black transition-all shadow-sm active:scale-95 ml-2"
              title="Download Resume PDF"
            >
              <FaFileDownload size={12} />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/assets/KaranSundariya_Resume.pdf"
              download="KaranSundariya_Resume.pdf"
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold rounded-full bg-slate-900 text-white"
            >
              <FaFileDownload size={11} />
              <span>CV</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-orange-600 bg-orange-50 font-bold'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/karansundariya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-black"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/karan-sundariya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-blue-600"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="https://leetcode.com/u/karan__777/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-amber-600"
                    aria-label="LeetCode"
                  >
                    <SiLeetcode size={18} />
                  </a>
                </div>
                <a
                  href="/assets/KaranSundariya_Resume.pdf"
                  download="KaranSundariya_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-slate-900 text-white hover:bg-black"
                >
                  <FaFileDownload size={12} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
