import { useState } from 'react';
import {
  FaJava,
  FaDatabase,
  FaServer,
  FaNetworkWired,
  FaCloud,
  FaBrain,
  FaCode,
  FaDocker,
  FaLayerGroup,
  FaCheckCircle,
  FaTools,
  FaLaptopCode,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiSpringboot,
  SiApachekafka,
  SiRedis,
  SiAwslambda,
  SiAmazons3,
  SiOpensearch,
  SiTerraform,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiJenkins,
  SiGit,
  SiLinux,
  SiPostman,
  SiLeetcode,
} from 'react-icons/si';

const skillCategories = [
  {
    id: 'backend-distributed',
    title: 'Backend & Distributed Systems',
    badge: 'Core Production Specialization',
    badgeStyle: 'bg-slate-950 text-white',
    icon: FaNetworkWired,
    summary:
      'Architecting decoupled, high-throughput microservices using event streaming, in-memory spatial indexing, distributed locking, and idempotent pipelines.',
    skills: [
      { name: 'Java & Spring Boot', icon: SiSpringboot, level: 'Expert', desc: 'Enterprise microservices, Spring Cloud Gateway, batch scheduling, dependency injection, REST APIs' },
      { name: 'Apache Kafka', icon: SiApachekafka, level: 'Production', desc: 'Event-driven streams, partitioned pub/sub topics, consumer groups, 24-stage status event mesh' },
      { name: 'Redis Geospatial', icon: SiRedis, level: 'Advanced', desc: 'In-memory geospatial indexing (GEOADD / GEORADIUS), sub-millisecond cache-aside layer' },
      { name: 'ShedLock & Distributed Locking', icon: FaServer, level: 'Production', desc: 'Multi-node cluster coordination, preventing duplicate scheduled batch execution across instances' },
      { name: 'Idempotent Processing & Tracing', icon: FaCheckCircle, level: 'Production', desc: 'Transactional deduplication gates, OpenTelemetry distributed tracing with trace & span IDs' },
      { name: 'System Design (HLD & LLD)', icon: FaLayerGroup, level: 'Strong', desc: 'Microservice domain decomposition, state machine transitions, high availability, fault tolerance' },
    ],
  },
  {
    id: 'cpp-systems',
    title: 'Systems Programming & Modern C++',
    badge: 'High Performance & Memory',
    badgeStyle: 'bg-blue-50 text-blue-900 border border-blue-200',
    icon: SiCplusplus,
    summary:
      'Engineering low-latency, memory-efficient systems with modern C++, strict memory management, multithreading primitives, and algorithmic optimization.',
    skills: [
      { name: 'Modern C++ (17/20)', icon: SiCplusplus, level: 'Advanced', desc: 'Object-oriented architecture, RAII, pointers, cache-conscious data structures, algorithmic speed' },
      { name: 'Multithreading & Concurrency', icon: FaCode, level: 'Production', desc: 'Thread-safe autosave and validation using mutexes, condition variables, and concurrency primitives' },
      { name: 'STL Containers & Algorithms', icon: FaLaptopCode, level: 'Expert', desc: 'Optimized standard library containers (vector, unordered_map), custom comparators, memory layout' },
      { name: 'Smart Pointers & Valgrind', icon: FaTools, level: 'Production', desc: 'Memory leak elimination, unique_ptr/shared_ptr lifecycle management, reducing memory footprint' },
      { name: 'Qt Framework & QML', icon: FaServer, level: 'Production', desc: 'Node-based graph rendering for 1,000+ nodes, QGraphicsScene coordinate transforms and UI performance' },
    ],
  },
  {
    id: 'mern-fullstack',
    title: 'Full-Stack Development & MERN Stack',
    badge: 'Web & Product Applications',
    badgeStyle: 'bg-emerald-50 text-emerald-900 border border-emerald-200',
    icon: SiReact,
    summary:
      'Building production-ready full-stack applications with React, Node.js, Express, and MongoDB, combining robust backend APIs with reactive client state.',
    skills: [
      { name: 'React.js', icon: SiReact, level: 'Advanced', desc: 'Component state machines, modern hooks, responsive layouts, interactive live previews' },
      { name: 'Node.js & Express.js', icon: SiNodedotjs, level: 'Advanced', desc: 'RESTful controllers, middleware pipelines, authentication gates, server-side validation' },
      { name: 'MongoDB', icon: SiMongodb, level: 'Advanced', desc: 'Document schemas, compound indexes for multi-filter queries, aggregation pipelines' },
      { name: 'Tailwind CSS & Modern UI', icon: SiTailwindcss, level: 'Expert', desc: 'Clean design systems, utility-first styling, mobile-first responsive interfaces' },
      { name: 'JWT & Role-Based Access (RBAC)', icon: FaLayerGroup, level: 'Production', desc: 'Cryptographically signed tokens, HTTP-only cookies, password hashing (bcrypt), auth middleware' },
      { name: 'JavaScript (ES6+) & HTML5/CSS3', icon: SiJavascript, level: 'Expert', desc: 'Asynchronous event loops, Promises, async/await, DOM APIs, semantic document structures' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, DevOps & Reliability',
    badge: 'AWS & Cloud Native',
    badgeStyle: 'bg-amber-50 text-amber-900 border border-amber-200',
    icon: FaCloud,
    summary:
      'Deploying resilient cloud infrastructure on AWS, automating deployments with Terraform, containerizing microservices, and orchestrating disaster recovery.',
    skills: [
      { name: 'AWS (Lambda, SQS, S3, EC2)', icon: SiAwslambda, level: 'Production', desc: 'Asynchronous serverless pipelines, SQS message queues, S3 storage, Step Functions, CloudWatch' },
      { name: 'Terraform (IaC)', icon: SiTerraform, level: 'Production', desc: 'Infrastructure as Code, automated blue-green Lambda deployments, Artifactory-to-S3 publishing' },
      { name: 'OpenSearch Disaster Recovery', icon: SiOpensearch, level: 'Production', desc: 'Automated snapshot restoration for distributed indexes, reducing recovery time from hours to minutes' },
      { name: 'Docker & Containerization', icon: FaDocker, level: 'Production', desc: 'Multi-stage Dockerfiles, Docker Compose local microservices orchestration, container lifecycle' },
      { name: 'Jenkins CI/CD & Linux Shell', icon: SiJenkins, level: 'Production', desc: 'Automated test execution, build packaging, bash scripting, Linux system administration' },
      { name: 'Python Automation Utilities', icon: SiPython, level: 'Production', desc: 'REST utilities, automated disaster recovery scripts, data migration and ingestion flows' },
    ],
  },
  {
    id: 'databases-storage',
    title: 'Databases & Data Stores',
    badge: 'Polyglot Persistence',
    badgeStyle: 'bg-slate-100 text-slate-800 border border-slate-300',
    icon: FaDatabase,
    summary:
      'Designing relational, document, key-value, and distributed search stores with schema optimization, indexing strategies, and transactional consistency.',
    skills: [
      { name: 'MySQL & Relational SQL', icon: SiMysql, level: 'Advanced', desc: 'Relational schema design, normalization, ACID transactions, complex JOINs, foreign key constraints' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', desc: 'WAL streaming replication, ACID transactions, Outbox pattern, JSONB operations' },
      { name: 'MongoDB (NoSQL)', icon: SiMongodb, level: 'Advanced', desc: 'High-throughput document storage, compound indexing, real-time change streams, replication' },
      { name: 'Amazon DynamoDB', icon: FaDatabase, level: 'Proficient', desc: 'NoSQL key-value store, partition key design, sub-10ms query access at scale' },
      { name: 'Redis In-Memory Store', icon: SiRedis, level: 'Advanced', desc: 'Geospatial coordinates, TTL cache eviction, atomic operations, distributed rate limiting' },
      { name: 'OpenSearch', icon: SiOpensearch, level: 'Production', desc: 'Distributed full-text search, snapshot repositories, cluster management and automated recovery' },
    ],
  },
  {
    id: 'genai-algorithms',
    title: 'Applied GenAI & Algorithmic Rigor',
    badge: 'Competitive & AI Systems',
    badgeStyle: 'bg-orange-50 text-orange-900 border border-orange-200',
    icon: FaBrain,
    summary:
      'Integrating enterprise LLMs into production workflows alongside computational speed from solving 1,100+ competitive algorithmic challenges.',
    skills: [
      { name: 'Enterprise GenAI & LiteLLM', icon: FaBrain, level: 'Production', desc: 'Multi-model evaluation across 5 models, dynamic fallback routing, token budget optimization' },
      { name: 'Prompt Engineering & JSON Schema', icon: FaCode, level: 'Production', desc: 'Few-shot guided prompts, anti-hallucination guardrails, deterministic JSON output enforcement' },
      { name: 'Data Structures & Algorithms', icon: SiLeetcode, level: 'Knight (1897)', desc: '1,100+ challenges solved across LeetCode & GeeksforGeeks, Dynamic Programming, Graphs, Trees' },
      { name: 'Developer Tools', icon: SiGit, level: 'Expert', desc: 'Git, GitHub, Postman API testing, Linux CLI, SDLC, code reviews, technical mentorship' },
    ],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-white relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 mb-3 shadow-xs">
            <FaLayerGroup className="text-slate-500 text-[11px]" />
            <span>Technical Stack &amp; Resume Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Engineering Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every technology, language, framework, database, and cloud tool verified from production systems, projects, and academic background.
          </p>
        </div>

        {/* Priority Focus Notice for Recruiters / HR Agents */}
        <div className="bg-slate-50 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm text-slate-800 font-mono">
              <strong className="text-slate-950 font-bold">Actively Open to Opportunities:</strong> Backend Software Engineer, Distributed Systems, Modern C++, Full-Stack MERN, and SDE I / II.
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 self-start sm:self-auto font-bold">
            100% Resume-Verified
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-slate-950 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.id}
                className="bg-white rounded-3xl border border-gray-200/90 hover:border-gray-300 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-200 flex items-center justify-center text-slate-800 shadow-2xs">
                        <CategoryIcon size={18} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${category.badgeStyle}`}>
                      {category.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {category.summary}
                  </p>

                  {/* Skills List in Category */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="p-3.5 rounded-2xl bg-slate-50/80 border border-gray-200/70 hover:bg-slate-100/70 hover:border-gray-300 transition-colors flex items-start gap-3.5 group shadow-2xs"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 group-hover:scale-105 transition-transform shadow-2xs">
                            <SkillIcon size={15} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                                {skill.name}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-gray-200 text-slate-600 font-medium shrink-0">
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 mt-1 leading-snug">
                              {skill.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Verified in Resume &amp; Production</span>
                  <span className="text-slate-700 font-semibold flex items-center gap-1">
                    <FaCheckCircle className="text-emerald-500 text-[10px]" /> High Signal
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
