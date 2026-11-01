import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaServer, FaCogs, FaDatabase, FaLayerGroup, FaChevronDown, FaChevronUp, FaProjectDiagram } from 'react-icons/fa';
import { SiRedis, SiApachekafka, SiSpringboot, SiReact, SiMongodb, SiGooglegemini, SiNodedotjs, SiExpress } from 'react-icons/si';

const projects = [
  {
    id: 'uber-microservices',
    title: 'Uber Microservices',
    tagline: 'Event-driven, distributed ride-dispatching backend architecture',
    category: 'Distributed Systems & Microservices',
    badge: 'Backend Architecture',
    imageType: 'architecture',
    github: 'https://github.com/karansundariya/Uber-Microservices',
    demo: null,
    demoLabel: 'Backend Service (No UI)',
    summary:
      'A distributed microservices backend engineered to solve real-time geospatial driver discovery, dynamic ride matching, and asynchronous lifecycle state coordination at scale.',
    problem:
      'Coordinating ride requests with hundreds of moving drivers requires ultra-low latency proximity queries, fault-tolerant state transitions, and asynchronous messaging without cascading service failures.',
    architectureDecisions: [
      {
        title: 'Domain Decomposition',
        desc: 'Split monolith into 3 discrete Spring Boot services: Rider Service, Driver Service, Location Tracking Service, Matching Service, and API Gateway.',
      },
      {
        title: 'Redis Geospatial Indexing',
        desc: 'Leveraged Redis GEOADD and GEORADIUS commands for sub-millisecond driver proximity lookups instead of heavy relational table scans.',
      },
      {
        title: 'Kafka Event Streaming',
        desc: 'Used Apache Kafka topics (e.g. ride.requested, driver.assigned) to asynchronously decouple ride booking from notification dispatch and billing pipelines.',
      },
      {
        title: 'Deterministic State Machine',
        desc: 'Engineered a 5-state ride lifecycle model (REQUESTED → MATCHED → EN_ROUTE → IN_PROGRESS → COMPLETED) preventing race conditions.',
      },
    ],
    challenges: [
      {
        challenge: 'Driver Proximity Query Contention',
        solution: 'Cached driver coordinates into Redis with Geospatial indexing and TTL to offload spatial lookups from persistent storage.',
      },
      {
        challenge: 'Service Decoupling & Asynchrony',
        solution: 'Replaced synchronous REST calls between order creation and driver matching with Kafka message queues, ensuring the API responds instantly to riders.',
      },
    ],
    tech: [
      { name: 'Java', icon: FaServer },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Apache Kafka', icon: SiApachekafka },
      { name: 'Redis Geospatial', icon: SiRedis },
      { name: 'MySQL', icon: FaDatabase },
      { name: 'Docker', icon: FaCogs },
    ],
  },
  {
    id: 'joblex',
    title: 'JobLex',
    tagline: 'Full-stack MERN campus recruitment & hiring workflow platform',
    category: 'Full-Stack MERN Architecture',
    badge: 'MERN Stack Application',
    imageType: 'image',
    imageSrc: '/assets/joblex.png',
    github: 'https://github.com/karansundariya/JobLex',
    demo: 'https://joblex-vo9q.onrender.com/',
    demoLabel: 'Live Web App',
    summary:
      'A full-stack MERN campus recruitment platform featuring multi-criteria candidate discovery, automated listing lifecycle management, role-based workflows, and resume processing.',
    problem:
      'Campus placement and recruitment pipelines are often fragmented across spreadsheets and ad-hoc emails, lacking structured candidate tracking, verified listings, and automated expiry.',
    architectureDecisions: [
      {
        title: 'MERN Stack Core Architecture',
        desc: 'Structured a cohesive single-page application using React.js, Node.js, Express.js, and MongoDB with clean REST API conventions.',
      },
      {
        title: 'Role-Based Access Control (RBAC)',
        desc: 'Implemented secure authorization gates separating Students, Recruiters, and Placement Admins using cryptographically signed JWTs and HTTP-only cookies.',
      },
      {
        title: 'Optimized Compound Indexing',
        desc: 'Designed MongoDB collections with compound indexes on job category, location, salary tier, and active status for high-speed multi-filter queries.',
      },
      {
        title: 'Automated Lifecycle Management',
        desc: 'Implemented background expiration logic to automatically mark stale openings inactive and clean up deprecated applications.',
      },
    ],
    challenges: [
      {
        challenge: 'Multi-parameter Filter Latency',
        solution: 'Created targeted compound indexes in MongoDB on frequently co-queried fields, reducing query roundtrips across large job collections.',
      },
      {
        challenge: 'Secure Role Escalation Prevention',
        solution: 'Implemented strict middleware validation inspecting JWT claims on every sensitive mutation route rather than relying on client state.',
      },
    ],
    tech: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Express.js', icon: SiExpress },
      { name: 'React.js', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'JWT & bcrypt', icon: FaLayerGroup },
      { name: 'Tailwind CSS', icon: FaCogs },
    ],
  },
  {
    id: 'cvnirmaan-ai',
    title: 'CVNirmaan AI',
    tagline: 'Intelligent resume & cover letter generation platform powered by LLMs',
    category: 'GenAI & Applied Machine Learning',
    badge: 'GenAI Engineering',
    imageType: 'image',
    imageSrc: '/assets/cvnirmaan-ai.png',
    github: 'https://github.com/karansundariya/CVNirmaan_AI',
    demo: 'https://cvnirmaan-ai.vercel.app',
    demoLabel: 'Live Web App',
    summary:
      'An AI-powered document engineering platform that transforms unstructured candidate profiles into professional, ATS-optimized resumes tailored to target engineering roles.',
    problem:
      'Job applicants struggle to tailor resumes for ATS systems and specific job requirements, often spending hours rewriting bullet points manually without structured feedback.',
    architectureDecisions: [
      {
        title: 'Structured LLM Prompt Pipelines',
        desc: 'Constructed prompt templates using Google Gemini API to enforce strict JSON schemas for experience bullet points, skill categorizations, and executive summaries.',
      },
      {
        title: 'Real-time Interactive Preview',
        desc: 'Engineered a reactive React state management system that synchronizes AI output with a live PDF/print-ready DOM canvas without UI blocking.',
      },
      {
        title: 'Authentication & Session State',
        desc: 'Leveraged Firebase Auth and Cloud Firestore to allow secure profile persistence, multi-draft storage, and rapid document iteration.',
      },
      {
        title: 'Client-side PDF Compilation',
        desc: 'Structured clean semantic HTML print stylesheets for deterministic, high-fidelity PDF exports matching standard recruiter ATS dimensions.',
      },
    ],
    challenges: [
      {
        challenge: 'Unpredictable LLM Formats',
        solution: 'Implemented defensive prompt guardrails and schema validation to enforce standardized JSON output, ensuring zero UI rendering crashes.',
      },
      {
        challenge: 'Latency During Text Generation',
        solution: 'Utilized progressive loading indicators and segmented prompt calls so sections update incrementally rather than freezing the user interface.',
      },
    ],
    tech: [
      { name: 'Google Gemini API', icon: SiGooglegemini },
      { name: 'React.js', icon: SiReact },
      { name: 'Firebase Auth', icon: FaDatabase },
      { name: 'Tailwind CSS', icon: FaCogs },
      { name: 'Prompt Engineering', icon: FaServer },
    ],
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState('uber-microservices');

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 bg-slate-50/50 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-slate-700 bg-white border border-gray-200 mb-3 shadow-xs">
            <FaProjectDiagram className="text-slate-500 text-[11px]" />
            <span>Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In-depth architectural breakdowns showcasing distributed microservices, MERN full-stack development, and Generative AI integrations.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-10">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;

            return (
              <article
                key={project.id}
                className="bg-white rounded-3xl border border-gray-200/90 hover:border-gray-300 hover:shadow-xl transition-all duration-300 shadow-xs overflow-hidden"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  
                  {/* Top Bar: Badge, Category, Links */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="px-3 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-900 text-white">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* External Action Links */}
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-slate-950 text-white hover:bg-slate-800 transition-all shadow-xs"
                          aria-label={`${project.title} GitHub Source Code`}
                        >
                          <FaGithub size={15} />
                          <span>Code Repository</span>
                        </a>
                      )}

                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white border border-gray-300 text-slate-800 hover:bg-slate-50 transition-all shadow-xs"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <FaExternalLinkAlt size={12} />
                          <span>{project.demoLabel}</span>
                        </a>
                      ) : (
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-500 bg-slate-100 border border-slate-200">
                          {project.demoLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Main Grid: Media/Diagram + Executive Summary */}
                  <div className="grid lg:grid-cols-12 gap-8 my-8 items-center">
                    
                    {/* Visual Media Column */}
                    <div className="lg:col-span-5">
                      {project.imageType === 'architecture' ? (
                        <div className="bg-slate-50 rounded-2xl p-5 border border-gray-200">
                          <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                            <span className="font-semibold text-slate-700">System Topology</span>
                            <span>Event Mesh</span>
                          </div>

                          <div className="space-y-2.5 font-mono text-xs">
                            <div className="p-2.5 rounded-xl bg-white border border-gray-300 text-center text-slate-800 font-semibold shadow-xs">
                              API Gateway (Spring Cloud)
                            </div>
                            <div className="text-center text-slate-400 font-mono text-xs">↓ REST / Dispatch</div>
                            
                            <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                              <div className="p-2 rounded-lg bg-white border border-gray-200 text-slate-700 shadow-xs">
                                <div className="font-semibold">Rider Service</div>
                                <div className="text-[9px] text-slate-400 mt-0.5">Booking API</div>
                              </div>
                              <div className="p-2 rounded-lg bg-white border border-gray-200 text-slate-700 shadow-xs">
                                <div className="font-semibold">Driver Service</div>
                                <div className="text-[9px] text-slate-400 mt-0.5">Telemetry Feed</div>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-slate-900 text-white text-center font-semibold text-xs shadow-xs">
                              ⚡ Kafka Event Bus (Topics: ride-events)
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                              <div className="p-2 rounded-lg bg-white border border-gray-200 text-slate-700 shadow-xs">
                                <div className="font-semibold text-slate-900">Redis Geospatial</div>
                                <div className="text-[9px] text-slate-400 mt-0.5">GEOADD / Radius 5km</div>
                              </div>
                              <div className="p-2 rounded-lg bg-white border border-gray-200 text-slate-700 shadow-xs">
                                <div className="font-semibold text-slate-900">Matching Engine</div>
                                <div className="text-[9px] text-slate-400 mt-0.5">5-State Machine</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-slate-100 aspect-video group shadow-xs">
                          <img
                            src={project.imageSrc}
                            alt={`${project.title} Screenshot`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>

                    {/* Summary & Problem Column */}
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                          The Challenge &amp; Context:
                        </h4>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                          High-Level Overview:
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Tech Stack Chips */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                          Core Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => {
                            const TechIcon = t.icon;
                            return (
                              <span
                                key={t.name}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-100 border border-gray-200 text-slate-700"
                              >
                                <TechIcon size={12} className="text-slate-600" />
                                <span>{t.name}</span>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Expand / Collapse Toggle Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-50 border border-gray-200 hover:bg-slate-100 text-xs sm:text-sm font-mono text-slate-700 flex items-center justify-center gap-2 transition-colors font-medium"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded
                          ? 'Hide Technical Case Study Details'
                          : 'Read Full Architecture & Engineering Decisions'}
                      </span>
                      {isExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </button>
                  </div>

                  {/* Collapsible Deep-Dive Details */}
                  {isExpanded && (
                    <div className="pt-8 border-t border-gray-100 mt-6 space-y-8">
                      {/* Architecture Decisions */}
                      <div>
                        <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <FaServer className="text-slate-700" />
                          Key Architectural Decisions:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.architectureDecisions.map((dec, i) => (
                            <div
                              key={i}
                              className="p-4 rounded-xl bg-slate-50 border border-gray-200"
                            >
                              <div className="text-xs font-bold text-slate-900 mb-1 font-mono">
                                {i + 1}. {dec.title}
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {dec.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Challenges & Mitigations */}
                      <div>
                        <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <FaCogs className="text-slate-700" />
                          Challenges &amp; Solutions:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.challenges.map((item, i) => (
                            <div
                              key={i}
                              className="p-4 rounded-xl bg-slate-50 border border-gray-200 space-y-2"
                            >
                              <div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                                  Challenge:
                                </span>
                                <div className="text-xs font-medium text-slate-800 mt-0.5">
                                  {item.challenge}
                                </div>
                              </div>
                              <div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold">
                                  Solution Implemented:
                                </span>
                                <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                                  {item.solution}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
