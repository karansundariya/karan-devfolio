import { FaTrophy, FaMedal, FaExternalLinkAlt, FaBrain, FaAward, FaCheckCircle, FaUsers } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiMedium } from 'react-icons/si';

const codingProfiles = [
  {
    platform: 'LeetCode',
    handle: 'karan__777',
    rating: '1897 Max Rating',
    rank: 'Knight · Top 4.7% Globally',
    solved: '500+ Contest & Practice Solved',
    url: 'https://leetcode.com/u/karan__777/',
    icon: SiLeetcode,
    badgeBg: 'bg-amber-100 text-amber-900 border border-amber-300',
  },
  {
    platform: 'Medium Engineering Blog',
    handle: '@karansundariya',
    rating: 'Tech Author',
    rank: 'Distributed Systems & Algorithms',
    solved: 'Technical deep-dives',
    url: 'https://medium.com/@karansundariya',
    icon: SiMedium,
    badgeBg: 'bg-slate-100 text-slate-800 border border-slate-300',
  },
  {
    platform: 'GeeksforGeeks',
    handle: 'karan__777',
    rating: '3★ Coder',
    rank: 'Institute Rank Holder',
    solved: '200+ Solved Challenges',
    url: 'https://www.geeksforgeeks.org/user/karan__777/',
    icon: SiGeeksforgeeks,
    badgeBg: 'bg-emerald-50 text-emerald-800 border border-emerald-300',
  },
  {
    platform: 'CodeChef',
    handle: 'karan__777',
    rating: '3-Star Coder',
    rank: 'Div 2 Algorithmic Contests',
    solved: 'Timed Contest Finishes',
    url: 'https://www.codechef.com/users/karan__777',
    icon: SiCodechef,
    badgeBg: 'bg-amber-50 text-amber-800 border border-amber-300',
  },
];

const contestHonors = [
  {
    title: 'Coding Club Lead — IIIT Bhagalpur',
    track: 'Leadership & Mentorship',
    standing: 'Student Lead',
    meta: 'Mentored 50+ engineering students',
    description:
      'Led the technical coding community at IIIT Bhagalpur, conducting workshops and mentoring 50+ students in Data Structures, Algorithms, competitive problem-solving, and backend architectures.',
    icon: FaUsers,
  },
  {
    title: 'Flipkart GRiD 6.0 (2024)',
    track: 'Software Development Track',
    standing: 'Top 1.65% Nationwide',
    meta: '8,000 / 484,308 participants',
    description:
      'Cleared multi-stage screening and solved complex algorithmic challenges under strict time constraints, evaluating distributed systems, data structures, and optimization.',
    icon: FaTrophy,
  },
  {
    title: 'CodeKaze 2024 by Naukri',
    track: 'National Competitive Programming Contest',
    standing: 'All India Rank 920',
    meta: 'Top 0.92% (100,000+ competitors)',
    description:
      'Achieved top 1,000 ranking nationwide by implementing optimized dynamic programming, graph algorithms, and edge-case handling under contest timers.',
    icon: FaMedal,
  },
  {
    title: 'HP Power Lab Challenge (2024)',
    track: 'Engineering Platform Challenge',
    standing: 'Quarterfinalist · Top 0.1%',
    meta: '180 / 129,288 participants',
    description:
      'Engineered an innovative software platform solution addressing business-critical challenges and presenting viable system architectures.',
    icon: FaBrain,
  },
  {
    title: 'Tata Imagination Challenge (2024)',
    track: 'National Innovation Challenge',
    standing: 'National Semi-Finalist',
    meta: 'Top 2.2% (312,540 participants)',
    description:
      'Applied critical thinking and problem-solving to design and pitch comprehensive technical solutions evaluating scalability and business value.',
    icon: FaAward,
  },
  {
    title: 'Smart India Hackathon (Internal)',
    track: 'IIIT Bhagalpur Internal Round',
    standing: '4th Place Team Finish',
    meta: 'College-wide evaluation',
    description:
      'Architected and implemented a museum ticketing platform with search, exploration, and intuitive workflows addressing public administration needs.',
    icon: FaTrophy,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-50/60 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-slate-700 bg-white border border-gray-200 mb-3 shadow-xs">
            <FaTrophy className="text-slate-500 text-[11px]" />
            <span>Problem Solving &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Competitive Programming &amp; Honors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Demonstrated computational rigor across weekly algorithmic contests, hackathons, technical writing, and leadership as Coding Club Lead at IIIT Bhagalpur.
          </p>
        </div>

        {/* LeetCode Knight Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-amber-50/80 via-white to-orange-50/30 border border-amber-200/90 p-6 sm:p-8 lg:p-10 mb-16 shadow-xs overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 text-3xl shrink-0 shadow-xs">
                <SiLeetcode />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                    Featured Credential
                  </span>
                  <span className="text-xs font-mono text-slate-600 font-semibold">
                    Max Contest Rating: 1897
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  LeetCode Knight Rank · Top 4.7% Globally
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                  1,100+ algorithmic problems solved across LeetCode &amp; GeeksforGeeks, demonstrating speed and optimization in Dynamic Programming, Graphs, and Trees.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="https://leetcode.com/u/karan__777/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs sm:text-sm font-semibold bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-xs"
              >
                <span>Verify LeetCode Profile</span>
                <FaExternalLinkAlt size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Coding Profiles 4-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {codingProfiles.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.platform}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-gray-300 hover:shadow-lg transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-center text-xl text-slate-800 group-hover:scale-105 transition-transform shadow-xs">
                      <Icon />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${p.badgeBg}`}>
                      {p.rating}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                    {p.platform}
                  </h4>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {p.handle}
                  </div>

                  <div className="text-xs font-semibold text-slate-700 mb-1">
                    {p.rank}
                  </div>
                  <div className="text-xs text-slate-500">
                    {p.solved}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-slate-600 group-hover:text-slate-950 group-hover:underline">
                  <span>Visit Profile</span>
                  <FaExternalLinkAlt size={10} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Major Competition & Leadership Recognitions */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Leadership &amp; Engineering Competitions
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Student leadership and top finishes across national engineering contests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contestHonors.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-gray-300 hover:shadow-md transition-all duration-300 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200">
                        {item.standing}
                      </span>
                      <ItemIcon className="text-slate-400 text-base" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <div className="text-xs font-mono text-slate-500 mb-3">
                      {item.track} · {item.meta}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-2 text-[11px] font-mono text-slate-600">
                    <FaCheckCircle className="text-emerald-500 text-xs" />
                    <span>Verified Result</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
