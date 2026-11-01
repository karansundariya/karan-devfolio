import { FaGraduationCap, FaBookOpen } from 'react-icons/fa';

const coursework = [
  'Data Structures & Algorithms',
  'Distributed Systems',
  'Modern C++ & OOP',
  'Database Management Systems (DBMS)',
  'Operating Systems & Concurrency',
  'Computer Networks & Protocols',
  'System Design & Architecture',
  'Software Engineering & SDLC',
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white relative border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 mb-3 shadow-xs">
            <FaGraduationCap className="text-slate-500 text-[11px]" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education
          </h2>
        </div>

        {/* Minimal, High-Precision Education Bento Card */}
        <div className="bg-white rounded-3xl border border-gray-200/90 hover:border-gray-300 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 text-xl shadow-xs">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Indian Institute of Information Technology, Bhagalpur
                </h3>
                <div className="text-base font-semibold text-slate-700 mt-1">
                  Bachelor of Technology (B.Tech) — Computer Science and Engineering
                </div>
                <div className="text-xs font-mono text-slate-500 mt-1">
                  Graduated: September 2026 · Full-Time Four-Year Degree Program
                </div>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="inline-flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Cumulative GPA
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  8.29 <span className="text-base font-normal text-slate-400">/ 10.0</span>
                </span>
              </div>
            </div>
          </div>

          {/* Relevant Academic Coursework */}
          <div className="pt-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
              <FaBookOpen className="text-slate-400" />
              <span>Core Computer Science Foundations:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-slate-50 border border-gray-200 text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
