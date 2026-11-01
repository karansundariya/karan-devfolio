import { FaServer, FaBrain, FaCloud, FaCode, FaFileDownload, FaArrowRight, FaCheck } from 'react-icons/fa';

const strengths = [
  {
    icon: FaServer,
    title: 'Distributed Systems & Event Streams',
    desc: 'Designing decoupled, high-throughput microservices using Java, Spring Boot, Apache Kafka, and Redis Geospatial caching for low-latency coordination.',
  },
  {
    icon: FaBrain,
    title: 'Enterprise Generative AI with LiteLLM',
    desc: 'Deploying production LLM recommendation services, multi-model evaluation across 5 models, automatic fallback routing, and human-in-the-loop analyst dashboards.',
  },
  {
    icon: FaCloud,
    title: 'Cloud Architecture & Reliability',
    desc: 'Migrating legacy workflows to asynchronous AWS pipelines (S3, Lambda, SQS), automated OpenSearch disaster recovery, and blue-green deployments with Terraform.',
  },
  {
    icon: FaCode,
    title: 'Algorithmic Rigor & Technical Mentorship',
    desc: 'Solved 1,100+ competitive challenges (LeetCode Knight, 1897 Max Rating, Top 4.7% globally) and led the Coding Club at IIIT Bhagalpur, mentoring 50+ students.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold mb-2">
            Engineering Identity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Engineering for concurrency, high availability, and intelligence.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I am a Software Engineering Analyst at Evernorth Health Services (The Cigna Group) and a Computer Science graduate from IIIT Bhagalpur. I design decoupled microservices, asynchronous event-driven pipelines, and production Generative AI services.
          </p>
        </div>

        {/* 2-Column Layout (Like Sarvam AI in Screenshot 3) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-orange-50 via-amber-50/50 to-slate-50 border border-orange-100/80 shadow-sm overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-orange-700 font-bold mb-1">
                    Core Engineering Focus
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Backend Software Engineer
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Dedicated to distributed architectures, fault-tolerant state machines, and reliable enterprise AI that survives production traffic.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 shadow-2xs">
                    <span className="text-emerald-900 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Status:
                    </span>
                    <span className="font-bold text-emerald-800">Open to New Roles (SDE I / II)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                    <span className="text-slate-500">Current Employer:</span>
                    <span className="font-bold text-slate-900">Evernorth Health Services</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                    <span className="text-slate-500">Parent Company:</span>
                    <span className="font-bold text-slate-900">The Cigna Group</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                    <span className="text-slate-500">Academic Degree:</span>
                    <span className="font-bold text-slate-900">B.Tech CSE, IIIT Bhagalpur</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                    <span className="text-slate-500">Cumulative GPA:</span>
                    <span className="font-bold text-emerald-700">8.29 / 10.0</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                    <span className="text-slate-500">LeetCode Contest:</span>
                    <span className="font-bold text-amber-700">Knight · 1897 Max Rating</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="/assets/KaranSundariya_Resume.pdf"
                    download="KaranSundariya_Resume.pdf"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold bg-slate-950 text-white hover:bg-black transition-all shadow-sm"
                  >
                    <FaFileDownload size={13} />
                    <span>Download Full Resume PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clean Strength Rows (Sarvam AI style) */}
          <div className="lg:col-span-7 space-y-6">
            {strengths.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200/80 hover:border-gray-300 transition-all shadow-2xs group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0 mt-0.5 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {st.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-4 flex items-center gap-4 text-xs font-semibold">
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-slate-900 hover:text-orange-600 transition-colors"
              >
                <span>View Professional Timeline</span>
                <FaArrowRight size={11} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
