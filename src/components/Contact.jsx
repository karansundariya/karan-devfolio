import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {  FaPhone } from "react-icons/fa";

import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const service_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const public_Key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/karansundariya',
    icon: FaGithub,
    color: 'text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/karan-sundariya',
    icon: FaLinkedin,
    color: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500',
  },
  {
    name: 'Email',
    url: 'mailto:karansundariya@gmail.com',
    icon: FaEnvelope,
    color: 'text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/karan101032',
    icon: FaTwitter,
    color: 'text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/karan_choudhary__777/',
    icon: FaInstagram,
    color: 'text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-500',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/karan__777/',
    icon: SiLeetcode,
    color: 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-500',
  },
];

export default function Contact() {
  const form = useRef();

  useEffect(() => {
    if (public_Key) {
      emailjs.init(public_Key);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_ID, template_ID, form.current)
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Failed to send message. Try again later.');
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white relative inline-block">
            Get in Touch
            <span className="block w-20 h-1 bg-indigo-600 rounded-full mt-3"></span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-10">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
             <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
  Contact Information
</h3>

<p className="flex items-center gap-3 text-gray-800 dark:text-gray-200 mb-4">
  <FaEnvelope className="text-indigo-600 text-xl" />
  <a
    href="mailto:karansundariya@gmail.com"
    className="hover:text-indigo-700 transition-colors"
  >
    karansundariya@gmail.com
  </a>
</p>

<p className="flex items-center gap-3 text-gray-800 dark:text-gray-200 mb-6">
  <FaPhone className="text-indigo-600 text-xl" />
  <a
    href="tel:+918058702298"
    className="hover:text-indigo-700 transition-colors"
  >
    +91-8058702298
  </a>
</p>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                Social Links
              </h3>
              <div className="flex flex-wrap gap-6 text-3xl">
                {socialLinks.map(({ name, url, icon: Icon, color }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${color} hover:scale-110 transition-transform duration-300`}
                    aria-label={name}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-5 py-3 rounded-2xl border border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-5 py-3 rounded-2xl border border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full px-5 py-3 rounded-2xl border border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 text-gray-900 dark:text-gray-100 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-3xl shadow-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
