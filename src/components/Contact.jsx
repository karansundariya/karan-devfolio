import { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiMedium } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const service_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const public_Key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const verifiedProfiles = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/karan-sundariya',
    icon: FaLinkedin,
    label: 'linkedin.com/in/karan-sundariya',
    color: 'text-slate-900',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/karansundariya',
    icon: FaGithub,
    label: 'github.com/karansundariya',
    color: 'text-slate-900',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/karan__777/',
    icon: SiLeetcode,
    label: 'leetcode.com/u/karan__777 (Knight)',
    color: 'text-amber-600',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@karansundariya',
    icon: SiMedium,
    label: 'medium.com/@karansundariya',
    color: 'text-slate-900',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/karan__777',
    icon: SiCodechef,
    label: 'codechef.com/users/karan__777 (3-Star)',
    color: 'text-amber-700',
  },
];

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    if (public_Key) {
      emailjs.init(public_Key);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      if (!service_ID || !template_ID) {
        console.warn('EmailJS environment variables missing, simulated locally.');
        setTimeout(() => {
          setFormStatus('success');
          setIsSubmitting(false);
          formRef.current?.reset();
        }, 1000);
        return;
      }

      await emailjs.sendForm(service_ID, template_ID, formRef.current, public_Key);
      setFormStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('Email send failed:', err);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 mb-3 shadow-xs">
            <FaEnvelope className="text-slate-500 text-[11px]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect &amp; Start an Engineering Conversation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Open to discussing backend engineering challenges, distributed architectures, cloud systems, and high-impact engineering opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Verified Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">
                  Contact Coordinates
                </h3>
                <p className="text-sm text-slate-600">
                  Direct channels for engineering leaders, recruiters, and collaborators.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <a
                  href="mailto:karansundariya@gmail.com"
                  className="p-3.5 rounded-2xl bg-slate-50 border border-gray-200 hover:border-gray-300 hover:bg-slate-100/70 flex items-center gap-3 text-slate-800 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-slate-800 shrink-0 shadow-xs">
                    <FaEnvelope size={13} />
                  </div>
                  <span className="truncate">karansundariya@gmail.com</span>
                </a>

                <a
                  href="tel:+918058702298"
                  className="p-3.5 rounded-2xl bg-slate-50 border border-gray-200 hover:border-gray-300 hover:bg-slate-100/70 flex items-center gap-3 text-slate-800 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-slate-800 shrink-0 shadow-xs">
                    <FaPhone size={13} />
                  </div>
                  <span>+91-8058702298</span>
                </a>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-gray-200 flex items-center gap-3 text-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-slate-800 shrink-0 shadow-xs">
                    <FaMapMarkerAlt size={13} />
                  </div>
                  <span>Hyderabad, India (IST / UTC+5:30)</span>
                </div>
              </div>

              {/* Professional Status */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-emerald-200 text-xs">
                <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="uppercase tracking-wider text-[11px] font-mono">Open to New Roles &amp; Opportunities</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Currently Software Engineering Analyst at <strong>Evernorth Health Services (The Cigna Group)</strong>. Actively open to high-impact opportunities across Backend Engineering, Distributed Systems, Modern C++, and SDE I / II roles (Hyderabad / Open to Relocation).
                </p>
              </div>
            </div>

            {/* Verified Profiles Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xs">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                Verified Technical Profiles
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {verifiedProfiles.map(({ name, url, icon: IconComponent, color }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-slate-50 border border-gray-200 hover:border-gray-300 hover:bg-slate-100/70 flex items-center gap-2.5 transition-all group"
                  >
                    {IconComponent({ size: 15, className: `${color} group-hover:scale-105 transition-transform` })}
                    <span className="text-xs font-semibold text-slate-800 group-hover:text-slate-950">
                      {name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Direct Email Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                Your message is sent directly to my personal inbox via EmailJS.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-medium"
                  >
                    Your Full Name <span className="text-slate-400">*</span>
                  </label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    required
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-300 text-slate-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-medium"
                  >
                    Email Address <span className="text-slate-400">*</span>
                  </label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-300 text-slate-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 mb-2 font-medium"
                  >
                    Message / Opportunity Brief <span className="text-slate-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder="Describe your engineering role, distributed systems challenge, or conversation topic..."
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-300 text-slate-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors resize-none shadow-xs"
                  ></textarea>
                </div>

                {/* Form status alerts */}
                {formStatus === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono flex items-center gap-2.5">
                    <FaCheckCircle size={15} className="shrink-0 text-emerald-600" />
                    <span>Message delivered successfully! I will respond promptly.</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-mono flex items-center gap-2.5">
                    <FaExclamationCircle size={15} className="shrink-0 text-red-600" />
                    <span>Transmission error. Please email directly at karansundariya@gmail.com</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm font-mono tracking-wide transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <FaPaperPlane size={12} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
