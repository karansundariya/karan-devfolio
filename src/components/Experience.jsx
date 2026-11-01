import { FaServer, FaCode, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheck, FaBuilding } from 'react-icons/fa';

const professionalExperiences = [
  {
    role: 'Software Engineering Analyst',
    company: 'Evernorth Health Services',
    parentCompany: 'The Cigna Group',
    type: 'Full-time',
    period: 'July 2026 – Present',
    location: 'Hyderabad, India',
    icon: FaServer,
    badgeBg: 'bg-slate-900 text-white',
    summary:
      'Architecting production Generative AI microservices, event-driven status tracking pipelines, and high-throughput data workflows for enterprise healthcare systems.',
    contributions: [
      'Built and deployed a production GenAI recommendation service utilizing LLMs to automate purge-or-hold compliance decisions on flagged healthcare files, replacing manual review cycles with auditable automated suggestions.',
      'Designed the backend recommendation pipeline using Java, Spring Boot, MongoDB, LiteLLM, and REST APIs, filtering historical records by hold reason and applying prompt engineering to produce suggested actions, confidence scores, seasonal patterns, and risk flags via event-driven workflows and cron batch jobs.',
      'Conducted systematic LLM evaluation across 5 models on production workloads for response consistency and token usage efficiency, configuring dynamic LiteLLM routing with automatic backup model fallbacks alongside unit, integration, and end-to-end test suites.',
      'Replaced static alert emails with context-rich decision emails and an interactive analyst dashboard (MERN) to review, accept, or override AI suggestions, persisting decision rationales for compliance auditability.',
      'Mapped 24 discrete file-processing stages and broadcast them as real-time Kafka status events into MongoDB, powering live file tracking that surfaces files nearing SLA deadlines first, integrated with OpenTelemetry distributed tracing (trace & span IDs) across microservices.',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'LiteLLM',
      'GenAI',
      'Apache Kafka',
      'MongoDB',
      'Distributed Tracing',
      'REST APIs',
      'Docker',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Evernorth Health Services',
    parentCompany: 'The Cigna Group',
    type: 'Internship',
    period: 'July 2025 – June 2026',
    location: 'Hyderabad, India',
    icon: FaBriefcase,
    badgeBg: 'bg-slate-100 text-slate-800 border border-slate-300',
    summary:
      'Engineered asynchronous cloud ingestion pipelines, automated batch routing with distributed locking, and resilient disaster recovery mechanisms.',
    contributions: [
      'Reduced file-processing latency by migrating legacy mainframe batch flows to an asynchronous cloud pipeline on AWS utilizing Amazon S3, AWS Lambda, Amazon SQS, and Apache Kafka.',
      'Automated detection and routing of unmatched medical-file cases with a scheduled Spring Boot batch service; implemented idempotent processing and ShedLock distributed locking to guarantee zero duplicate alerts across multi-node instances.',
      'Engineered automated disaster recovery pipelines with Python REST utilities and Amazon S3-based snapshot management for distributed OpenSearch index restoration, replacing error-prone manual steps with a repeatable automated workflow.',
      'Implemented blue-green AWS Lambda deployments and automated Artifactory-to-S3 artifact publishing pipelines using Terraform and infrastructure-as-code best practices.',
    ],
    techStack: [
      'AWS (S3, Lambda, SQS)',
      'Spring Boot',
      'Apache Kafka',
      'ShedLock',
      'Idempotent Processing',
      'Python',
      'OpenSearch',
      'Terraform',
    ],
  },
  {
    role: 'C++ Developer Intern',
    company: 'Neoned71 Tech Solutions',
    parentCompany: null,
    type: 'Internship',
    period: 'September 2024 – November 2024',
    location: 'Remote',
    icon: FaCode,
    badgeBg: 'bg-slate-100 text-slate-800 border border-slate-300',
    summary:
      'Engineered core graphical features and optimized layout algorithms for a desktop-based interactive node visualization application.',
    contributions: [
      'Contributed to WriterBoard, a node-based interactive storytelling platform, engineering core graphical modules using modern C++ and the Qt Framework.',
      'Optimized QGraphicsScene layouts, coordinate transforms, and item rendering to maintain fluid UI responsiveness on dense node networks.',
      'Leveraged C++ Standard Template Library (STL) algorithms and integrated application state with centralized relational database structures.',
      'Diagnosed and resolved 30+ critical bugs across the event dispatch and layout pipelines, significantly improving application stability and memory footprint.',
    ],
    techStack: [
      'C++',
      'Qt Framework',
      'QML',
      'STL',
      'OOP',
      'Relational Databases',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50/60 relative border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-slate-700 bg-white border border-gray-200 mb-3 shadow-xs">
            <FaBuilding className="text-slate-500 text-[11px]" />
            <span>Career Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real production engineering experience building distributed backend microservices, enterprise GenAI pipelines, and resilient cloud infrastructure.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-slate-300 via-slate-200 to-transparent" />

          <div className="space-y-10">
            {professionalExperiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <article
                  key={`${exp.company}-${exp.period}`}
                  className="relative sm:pl-20"
                >
                  {/* Timeline Node Icon (Desktop) */}
                  <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-xl bg-white border border-gray-300 shadow-xs items-center justify-center z-10 text-slate-800">
                    <Icon className="text-base" />
                  </div>

                  {/* Experience Card */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 hover:border-gray-300 hover:shadow-lg transition-all duration-300 shadow-xs">
                    
                    {/* Top Row: Title, Company, Period */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-gray-100">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                            {exp.role}
                          </h3>
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${exp.badgeBg}`}>
                            {exp.type}
                          </span>
                        </div>
                        <div className="text-base font-semibold text-slate-700">
                          {exp.company}{' '}
                          {exp.parentCompany && (
                            <span className="text-slate-500 font-normal">
                              ({exp.parentCompany})
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-slate-500">
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-gray-200/70">
                          <FaCalendarAlt className="text-slate-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-gray-200/70">
                          <FaMapMarkerAlt className="text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Role Overview */}
                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Responsibilities & Achievements */}
                    <div className="mt-6 space-y-3">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        Production Engineering Highlights:
                      </div>
                      <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                        {exp.contributions.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[9px] text-white">
                              <FaCheck />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-6 pt-5 border-t border-gray-100">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                        Technologies &amp; Architecture:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono rounded-full bg-slate-50 border border-gray-200 text-slate-700 hover:bg-slate-100 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
