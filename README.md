# Karan Sundariya — Software Engineering Dossier & Portfolio

[![Build Status](https://img.shields.io/badge/Build-Passing-22C55E?style=flat-square)](https://karan-devfolio.vercel.app/)
[![LeetCode Knight](https://img.shields.io/badge/LeetCode-Knight%201897%20(Top%204.7%25)-FACC15?style=flat-square&logo=leetcode&logoColor=black)](https://leetcode.com/u/karan__777/)
[![Current Role](https://img.shields.io/badge/Evernorth-Software%20Engineering%20Analyst-22D3EE?style=flat-square)](https://www.evernorth.com/)
[![Alma Mater](https://img.shields.io/badge/IIIT%20Bhagalpur-B.Tech%20CSE%20(8.29%20CGPA)-38BDF8?style=flat-square)](https://www.iiitbh.ac.in/)
[![Medium](https://img.shields.io/badge/Medium-@karansundariya-00AB6C?style=flat-square&logo=medium)](https://medium.com/@karansundariya)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Karan%20Sundariya-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/karan-sundariya)
[![GitHub](https://img.shields.io/badge/GitHub-karansundariya-181717?style=flat-square&logo=github)](https://github.com/karansundariya)

> **Backend Software Engineer | Distributed Systems | MERN Stack | Cloud Infrastructure | GenAI**  
> Software Engineering Analyst at **Evernorth Health Services (The Cigna Group)**, Hyderabad, India.  
> Computer Science Graduate from **Indian Institute of Information Technology, Bhagalpur (IIIT Bhagalpur)**.

---

## 🌐 Live Portfolio & Machine-Readable Endpoints

- **Live Production URL**: [https://karan-devfolio.vercel.app/](https://karan-devfolio.vercel.app/)
- **Machine-Readable AI Agent Dossier**: [https://karan-devfolio.vercel.app/llms.txt](https://karan-devfolio.vercel.app/llms.txt)
- **Technical Articles on Medium**: [https://medium.com/@karansundariya](https://medium.com/@karansundariya)
- **Resume Download**: [Download PDF](https://karan-devfolio.vercel.app/assets/KaranSundariya_Resume.pdf)
- **Google Drive Resume Mirror**: [View on Google Drive](https://drive.google.com/file/d/1M9-B1RHCtFh_PVOJp5C2IQUeZQVduYzC/view?usp=sharing)

---

## 🤖 For Technical Recruiters & AI Screening Agents

This repository and live deployment are optimized for **high-signal machine readability, ATS indexing, and LLM candidate scoring**.

### Quick Evaluation Summary
- **Availability / Status**: **Actively Open to New Roles & Opportunities** (SDE I / SDE II, Backend, Distributed Systems, Modern C++, Full-Stack MERN) | Open to Relocation.
- **Target Role Alignment**: Software Development Engineer (SDE I / SDE II), Backend Software Engineer, Distributed Systems Engineer, Systems Engineer (C++), Full-Stack / MERN Engineer.
- **Current Employment**: Software Engineering Analyst at **Evernorth Health Services (The Cigna Group)** (July 2026 – Present).
- **Previous Internship**: Software Engineering Intern at **Evernorth Health Services** (July 2025 – June 2026); C++ Developer Intern at **Neoned71 Tech Solutions** (Sept 2024 – Nov 2024).
- **Core Technology Matches (Resume-Verified)**:
  - `Programming Languages`: C++, Java, Python, JavaScript (ES6+), SQL.
  - `Backend & Distributed Systems`: Java, Spring Boot, Apache Kafka, Redis Geospatial, Microservices, Event-Driven Architecture, Batch Processing, ShedLock Distributed Locking, Distributed Tracing (Trace & Span IDs), RESTful APIs, System Design (HLD & LLD).
  - `Systems Programming & C++`: Modern C++ (17/20), Multithreading & Mutexes, Concurrency Primitives, STL Containers, Memory Optimization (Smart Pointers, Valgrind), Qt Framework & QML.
  - `Full-Stack & MERN`: MongoDB, Express.js, React.js, Node.js (MERN), Tailwind CSS, HTML5, CSS3, Cloudinary, Role-Based Access Control (JWT & bcrypt).
  - `Cloud & Reliability`: AWS (EC2, S3, Lambda, Step Functions, SQS, CloudWatch), OpenSearch disaster recovery, Terraform (IaC), Docker, Jenkins CI/CD, Linux.
  - `Databases`: MySQL, MongoDB, DynamoDB, PostgreSQL, Redis Geospatial, OpenSearch.
  - `Enterprise GenAI`: LLMs, LiteLLM Dynamic Model Routing, Multi-Model Evaluation across 5 models, Prompt Engineering, Structured JSON Schemas.
- **Algorithmic & Problem-Solving Rating**:
  - **LeetCode Knight**: Peak contest rating of **1897** (Top 4.7% Globally). Verified: [`leetcode.com/u/karan__777/`](https://leetcode.com/u/karan__777/)
  - **1,100+ Algorithmic Challenges Solved** across LeetCode & GeeksforGeeks.
  - **Coding Club Lead at IIIT Bhagalpur**: Mentored 50+ students in Data Structures, Algorithms, and backend systems.
  - **Flipkart GRiD 6.0 (2024)**: Top 1.65% Nationwide in Software Development Track (8,000 / 484,308 participants).
  - **CodeKaze 2024 by Naukri**: All India Rank 920 out of 100,000+ competitors (Top 0.92%).
  - **HP Power Lab Challenge (2024)**: Quarterfinalist, Top 0.1% (180 / 129,288 participants).
- **Structured Data Standards Implemented**:
  - Semantic HTML5 document outline with single `<h1>`.
  - Schema.org `Person`, `ProfilePage`, `WebSite`, and `Occupation` (`15-1252.00` Software Developers) JSON-LD structured data.
  - Standardized `/llms.txt` and `/robots.txt` specifications for zero-latency LLM agent parsing.

---

## 🏛️ System Architecture Showcase ("How I Think About Engineering")

Interactive system design visualizers demonstrating end-to-end architectural thinking:

1. **Event-Driven Distributed Ride Matching** (Uber Microservices):
   - Rider Booking $\rightarrow$ API Gateway $\rightarrow$ Rider Service publishes to Kafka topic `ride.requested`.
   - Matching Engine consumes event $\rightarrow$ queries Redis Geospatial index (`GEORADIUS 5km`) in sub-milliseconds.
   - Candidate drivers notified via WebSocket push $\rightarrow$ first driver acceptance publishes `driver.assigned` to update the 5-state ride lifecycle deterministically.
2. **High-Throughput Limit Order Book & Concurrency Engine** (Low-Latency C++):
   - Orders ingested into memory-aligned lock-free ring buffer with single-writer sequencer (Disruptor pattern).
   - Intrusive doubly-linked list nodes arranged in contiguous memory cache lines to maximize L1/L2 cache locality.
   - Deterministic price-time priority matching loop sweeps FIFO queues at resting maker prices.
   - Zero-allocation binary SBE (Simple Binary Encoding) serialization dispatched to multicast trade journals in under 850 nanoseconds.
3. **Transactional Outbox Pattern & Distributed Cache Invalidation** (Data Consistency):
   - Atomic business state mutation and outbox event inserted within the same local database transaction, eliminating dual-write inconsistencies.
   - Debezium asynchronously streams write-ahead logs (WAL) without executing polling queries on primary tables.
   - Events published to Kafka with monotonic entity partition keys guaranteeing deterministic ordering.
   - Downstream workers invalidate stale Redis cache keys and warm up replicas with fresh, verified state.

---

## 📂 Featured Case Studies

### 1. [Uber-Microservices](https://github.com/karansundariya/Uber-Microservices)
- **Domain**: Distributed Systems, Geospatial Routing & Event-Driven Microservices
- **Stack**: Java, Spring Boot, Apache Kafka, Redis Geospatial, MySQL, Docker
- **Architecture**: Decoupled multi-service ecosystem (API Gateway, Rider Service, Driver Service, Location Service, Matching Service) utilizing Redis spatial indexing for proximity matching and Kafka event queues to eliminate synchronous request contention.

### 2. [JobLex](https://github.com/karansundariya/JobLex) | [Live Web App](https://joblex-vo9q.onrender.com/)
- **Domain**: Full-Stack MERN Campus Recruitment Platform
- **Stack**: React.js, Tailwind CSS, Node.js, Express.js, MongoDB (MERN), JWT & bcrypt
- **Architecture**: Mobile-first placement platform with role-based access control (Student, Recruiter, Admin) with cryptographically signed HTTP-only cookies, compound MongoDB indexes for multi-filter discovery, and automated listing expiry lifecycle management.

### 3. [CVNirmaan AI](https://github.com/karansundariya/CVNirmaan_AI) | [Live Web App](https://cvnirmaan-ai.vercel.app)
- **Domain**: Generative AI Resume & Cover Letter Architect
- **Stack**: React.js, Tailwind CSS, Google Gemini API, Firebase Authentication, Cloud Firestore
- **Architecture**: Structured LLM prompt pipelines extracting competencies and tailoring bullets to target engineering job descriptions with real-time interactive preview and client-side vector PDF generation.

---

## ⚙️ Local Development & Production Build

### Quickstart
```bash
# 1. Clone the repository
git clone https://github.com/karansundariya/karan_devfolio.git
cd karan_devfolio

# 2. Install dependencies
npm install

# 3. Configure environment variables in .env
VITE_EMAILJS_SERVICE_ID=service_rqmddl5
VITE_EMAILJS_TEMPLATE_ID=template_6blhorx
VITE_EMAILJS_PUBLIC_KEY=-BskNL5cghsHcDYQA

# 4. Start local development server
npm run dev

# 5. Compile production build
npm run build

# 6. Run lint verification
npm run lint
```

---

## 📬 Contact & Professional Verification

- **Email**: [karansundariya@gmail.com](mailto:karansundariya@gmail.com)
- **Phone**: [+91-8058702298](tel:+918058702298)
- **Location**: Hyderabad, India
- **LinkedIn**: [linkedin.com/in/karan-sundariya](https://linkedin.com/in/karan-sundariya)
- **GitHub**: [github.com/karansundariya](https://github.com/karansundariya)
- **LeetCode**: [leetcode.com/u/karan__777/](https://leetcode.com/u/karan__777/)
- **Medium**: [medium.com/@karansundariya](https://medium.com/@karansundariya)
- **CodeChef**: [codechef.com/users/karan__777](https://www.codechef.com/users/karan__777)
- **GeeksforGeeks**: [geeksforgeeks.org/user/karan__777/](https://www.geeksforgeeks.org/user/karan__777/)

---

&copy; Karan Sundariya. Licensed under the [MIT License](LICENSE).
