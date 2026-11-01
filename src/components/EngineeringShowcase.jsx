import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaRedo, FaCheck, FaLayerGroup, FaBolt, FaExchangeAlt, FaArrowRight } from 'react-icons/fa';
import { SiApachekafka, SiRedis, SiCplusplus, SiPostgresql } from 'react-icons/si';

const architectureDemos = [
  {
    id: 'ride-matching',
    number: '01',
    tabLabel: 'Event-Driven Ride Matching',
    title: 'Event-Driven Ride Dispatch & Geospatial Querying',
    subtitle: 'Microservices, Apache Kafka, and Redis In-Memory Geospatial Indexing',
    icon: SiApachekafka,
    badge: 'Distributed Systems',
    description:
      'Decoupling write ingestion from spatial proximity discovery using Kafka topics and in-memory Redis spatial indexes, eliminating synchronous database blocking under bursty load.',
    steps: [
      {
        step: 1,
        title: 'Ride Request Ingestion',
        actor: 'Rider App → API Gateway',
        protocol: 'HTTP/2 REST (Spring Cloud Gateway)',
        payload: '{\n  "riderId": "usr_829",\n  "pickup": [17.4435, 78.3822],\n  "tier": "PREMIUM_SEDAN",\n  "timestamp": 1719830400\n}',
        explanation:
          'API Gateway validates JWT bearer tokens, checks token-bucket rate limits, and routes the request to Rider Service without holding database row locks.',
      },
      {
        step: 2,
        title: 'Kafka Event Publication',
        actor: 'Rider Service → Apache Kafka',
        protocol: 'Kafka Producer (Topic: ride.requested)',
        payload: 'Topic: ride.requested\nKey: usr_829 (MurmurHash2)\nHeaders: { "x-correlation-id": "corr_9a12bc" }\nStatus: HTTP 202 ACCEPTED returned to client',
        explanation:
          'Rider Service writes an immutable event to the partition. The API immediately responds with HTTP 202 Accepted, guaranteeing sub-15ms client response times.',
      },
      {
        step: 3,
        title: 'Redis Geospatial Proximity Query',
        actor: 'Match Engine → Redis In-Memory',
        protocol: 'RESP3 (GEORADIUSBYMEMBER)',
        payload: 'GEORADIUS drivers:geo:hld 78.3822 17.4435 5 km WITHDIST WITHCOORD ASC COUNT 5\n\n→ Candidate Drivers: ["drv_441", "drv_908", "drv_112"]',
        explanation:
          'Match Engine consumes the Kafka event and queries the Redis in-memory geohash skip list. Active driver telemetry coordinates return the nearest candidates in sub-milliseconds.',
      },
      {
        step: 4,
        title: 'Targeted Driver Dispatch Offer',
        actor: 'Dispatch Service → Candidate Drivers',
        protocol: 'WebSocket / SSE Bidirectional Stream',
        payload: '{\n  "rideId": "rd_1092",\n  "pickupAddress": "HITEC City, Hyderabad",\n  "distanceKm": 1.2,\n  "acceptanceTimeoutSec": 15\n}',
        explanation:
          'Dispatch pushes offers concurrently to candidate drivers. If the primary driver timer expires, dispatch cascades immediately to the next pre-computed candidate.',
      },
      {
        step: 5,
        title: 'Deterministic State Transition',
        actor: 'Driver Service → Kafka (driver.assigned)',
        protocol: 'Topic: ride.lifecycle (DRIVER_ASSIGNED)',
        payload: '{\n  "rideId": "rd_1092",\n  "driverId": "drv_441",\n  "status": "MATCHED",\n  "driverLocation": [17.4480, 78.3810]\n}',
        explanation:
          'Ride State Machine deterministically moves from REQUESTED to MATCHED. Real-time telemetry sockets stream vehicle coordinate updates to both rider and driver.',
      },
    ],
  },
  {
    id: 'order-matching',
    number: '02',
    tabLabel: 'Low-Latency Matching Engine',
    title: 'High-Throughput Order Book & Concurrency Engine',
    subtitle: 'Cache-Friendly Memory Layouts, Atomic CAS Operations, and Lock-Free Ring Buffers',
    icon: SiCplusplus,
    badge: 'Low Latency & Systems',
    description:
      'Designing a deterministic price-time priority limit order book with cache-friendly structures, lock-free ring buffers (Disruptor pattern), and sub-microsecond tick processing.',
    steps: [
      {
        step: 1,
        title: 'Order Ingestion & Lock-Free Ring Buffer',
        actor: 'Network Ingress → Sequencer Ring Buffer',
        protocol: 'Atomic CAS Ring Buffer (Zero-Copy)',
        payload: 'struct alignas(64) Order {\n  uint64_t orderId{1049281};\n  uint64_t timestampNs{1719830400123456};\n  int32_t  priceTicks{24550};\n  uint32_t quantity{500};\n  Side     side{Side::BUY};\n};',
        explanation:
          'Orders pass through a memory-aligned ring buffer. A single-writer sequencer assigns monotonic sequence numbers without mutex contention or kernel context switches.',
      },
      {
        step: 2,
        title: 'Price-Level Lookup via Intrusive Doubly-Linked List',
        actor: 'Matching Core → Order Book Memory Map',
        protocol: 'O(1) Radix Tree / Flat Memory Array',
        payload: '// Cache-line friendly price level lookup\nPriceLevel* level = book.getOrInsertPriceLevel(order.priceTicks);\nlevel->orderQueue.pushBack(&order); // O(1) pointer append',
        explanation:
          'Orders are placed into contiguous cache lines. Intrusive lists prevent heap reallocations during live matching, maximizing CPU L1/L2 cache hit ratios.',
      },
      {
        step: 3,
        title: 'Deterministic Price-Time Priority Matching',
        actor: 'Matching Engine Execution Loop',
        protocol: 'Continuous FIFO Sweep',
        payload: 'while (matchPossible && buyOrder.remQty > 0) {\n  uint32_t fillQty = std::min(buyOrder.remQty, bestAsk->remQty);\n  emitExecution(buyOrder.id, bestAsk->id, bestAsk->price, fillQty);\n  // Decrement remaining quantities\n}',
        explanation:
          'Matches execute at the maker resting order price with strict price-time priority. Unfilled portions rest in the book as resting liquidity.',
      },
      {
        step: 4,
        title: 'Zero-Allocation Execution Report Dispatch',
        actor: 'Match Core → Async Journaler & Market Data Stream',
        protocol: 'SBE (Simple Binary Encoding) Multicast',
        payload: '[Binary SBE Packet]\nMsgType: 8 (ExecutionReport)\nExecId: 882910\nLastQty: 500 @ 245.50\nLeavesQty: 0 (FILLED)\nTotalLatency: 850 nanoseconds',
        explanation:
          'Binary execution packets are serialized without dynamic string allocations and multicast directly to trade journals and market data listeners.',
      },
    ],
  },
  {
    id: 'outbox-pattern',
    number: '03',
    tabLabel: 'Transactional Outbox & CDC',
    title: 'Reliable Event Sourcing & Distributed Cache Invalidation',
    subtitle: 'PostgreSQL WAL, Debezium CDC, Kafka, and Redis Cache Invalidation',
    icon: SiPostgresql,
    badge: 'Data Consistency',
    description:
      'Eliminating dual-write race conditions and cache staleness using the Transactional Outbox Pattern, Change Data Capture (CDC), and idempotent Redis cache invalidation.',
    steps: [
      {
        step: 1,
        title: 'Atomic Business Mutation & Outbox Insert',
        actor: 'Backend Service → PostgreSQL Database',
        protocol: 'ACID Transaction (Single Unit of Work)',
        payload: 'BEGIN TRANSACTION;\n  UPDATE user_accounts SET balance = balance - 150 WHERE id = \'usr_99\';\n  INSERT INTO outbox_events (id, aggregate_type, event_type, payload)\n  VALUES (\'evt_441\', \'ACCOUNT\', \'DEBIT_RECORDED\', \'{"userId":"usr_99","amount":150}\');\nCOMMIT;',
        explanation:
          'Business state change and the event publication are saved in the same local database transaction. Dual-write inconsistencies are completely eliminated at the source.',
      },
      {
        step: 2,
        title: 'Change Data Capture (CDC) via Debezium',
        actor: 'PostgreSQL WAL → Debezium Connector',
        protocol: 'Streaming Replication Protocol',
        payload: 'WAL Log Sequence Number: 0/16B3740\nTable: public.outbox_events\nOperation: INSERT\nEvent: DEBIT_RECORDED (LSN Confirmed)',
        explanation:
          'Debezium tails the PostgreSQL write-ahead log (WAL) asynchronously without running polling queries on the primary database table, causing zero query overhead.',
      },
      {
        step: 3,
        title: 'Kafka Topic Publication with Monotonic Ordering',
        actor: 'Debezium → Kafka Topic (account.events)',
        protocol: 'Partition Key: userId (Guaranteed FIFO per user)',
        payload: 'Topic: account.events\nPartition: Hash(\'usr_99\') % 12\nPayload: { "userId": "usr_99", "action": "DEBIT", "delta": -150 }\nAck: all (In-sync replicas)',
        explanation:
          'The event is published to Kafka with partition key hashing on userId. This guarantees deterministic per-entity ordering across downstream microservices.',
      },
      {
        step: 4,
        title: 'Idempotent Cache Invalidation & Read-Through Refresh',
        actor: 'Cache Worker → Redis In-Memory Cluster',
        protocol: 'SETNX / DEL with Generation Versioning',
        payload: 'DEL cache:user:usr_99\nSET user:usr_99:version 42\n→ Subsequent API read performs clean cache-aside warm up',
        explanation:
          'Downstream consumer purges stale Redis entries using idempotent keys. Read queries fetch fresh, verified data from the read replica, preventing stale-cache anomalies.',
      },
    ],
  },
];

export default function EngineeringShowcase() {
  const [activeTab, setActiveTab] = useState('ride-matching');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const activeDemo = architectureDemos.find((d) => d.id === activeTab) || architectureDemos[0];
  const activeStep = activeDemo.steps[currentStepIndex];

  const handleTabChange = (id) => {
    setActiveTab(id);
    setCurrentStepIndex(0);
  };

  const handleNextStep = () => {
    setCurrentStepIndex((prev) => (prev + 1) % activeDemo.steps.length);
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <section id="architecture" className="py-24 bg-white relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 mb-3 shadow-xs">
            <FaLayerGroup className="text-slate-500 text-[11px]" />
            <span>Interactive Architecture Topologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How I Think About Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Interactive system architecture walkthroughs demonstrating how I design for scale, low latency, concurrency, and fault tolerance.
          </p>
        </div>

        {/* Sarvam AI Style Horizontal Tab Bar (Screenshot 2) */}
        <div className="border border-gray-200 rounded-2xl bg-slate-50/70 p-2 sm:p-2.5 mb-8 max-w-4xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {architectureDemos.map((demo) => {
              const isSelected = activeTab === demo.id;
              const Icon = demo.icon;

              return (
                <button
                  key={demo.id}
                  onClick={() => handleTabChange(demo.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-white text-slate-900 border border-gray-300 shadow-sm font-semibold'
                      : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-slate-900' : 'text-slate-400'}`}>
                      {demo.number}
                    </span>
                    <span className="text-xs sm:text-sm font-medium tracking-tight">
                      {demo.tabLabel}
                    </span>
                  </div>
                  <Icon className={`text-sm shrink-0 ${isSelected ? 'text-slate-900' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Stage */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-lg p-6 sm:p-8 lg:p-10">
          
          {/* Header of Active Architecture */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  System Architecture {activeDemo.number}
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {activeDemo.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeDemo.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-3xl leading-relaxed">
                {activeDemo.description}
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                title="Restart walkthrough from Step 1"
              >
                <FaRedo className="text-xs" />
                <span>Reset</span>
              </button>
              <button
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 shadow-sm transition-all"
              >
                <span>Advance Step</span>
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="py-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500">
              <span className="font-semibold text-slate-700">
                Stage {activeStep.step} of {activeDemo.steps.length}: {activeStep.title}
              </span>
              <span>
                Progress: {Math.round((activeStep.step / activeDemo.steps.length) * 100)}%
              </span>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {activeDemo.steps.map((st, idx) => {
                const isCompleted = idx < currentStepIndex;
                const isCurrent = idx === currentStepIndex;

                return (
                  <button
                    key={st.step}
                    onClick={() => setCurrentStepIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      isCurrent
                        ? 'bg-slate-900 ring-2 ring-slate-900/20'
                        : isCompleted
                        ? 'bg-slate-400'
                        : 'bg-slate-200 hover:bg-slate-300'
                    }`}
                    title={`Jump to Step ${st.step}: ${st.title}`}
                  />
                );
              })}
            </div>
          </div>

          {/* 2-Column Split: Step Details & Live Wire Payload Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left Column: Architectural Logic & Steps List */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Execution Pipeline:
              </div>

              <div className="space-y-2.5">
                {activeDemo.steps.map((st, idx) => {
                  const isActive = idx === currentStepIndex;
                  return (
                    <div
                      key={st.step}
                      onClick={() => setCurrentStepIndex(idx)}
                      className={`cursor-pointer rounded-xl p-4 transition-all border ${
                        isActive
                          ? 'bg-slate-50 border-slate-400 shadow-xs ring-1 ring-slate-400/20'
                          : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                              isActive
                                ? 'bg-slate-900 text-white'
                                : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {st.step}
                          </span>
                          <span className={`text-sm font-semibold tracking-tight ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                            {st.title}
                          </span>
                        </div>
                        {isActive && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-white font-medium">
                            ACTIVE
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-mono text-slate-500 mb-2 pl-7">
                        {st.actor}
                      </div>

                      {isActive && (
                        <p className="text-xs text-slate-600 leading-relaxed pl-7 pt-1 border-t border-gray-200/60 mt-2">
                          {st.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Wire Payload / Code Inspector */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center justify-between">
                <span>Protocol &amp; Wire Transmission:</span>
                <span className="text-slate-500 font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded">
                  {activeStep.protocol}
                </span>
              </div>

              {/* Inspector Terminal Box */}
              <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 text-slate-200 font-mono text-xs shadow-md border border-slate-800 flex-1 flex flex-col justify-between">
                
                {/* Terminal Title Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-400">
                      stage_{activeStep.step}_payload.wire
                    </span>
                  </div>
                  <span className="text-emerald-400">● LIVE INSPECTOR</span>
                </div>

                {/* Code / Payload Content */}
                <div className="my-5 overflow-x-auto">
                  <pre className="text-slate-100 leading-relaxed font-mono whitespace-pre-wrap">
                    {activeStep.payload}
                  </pre>
                </div>

                {/* Footer of Inspector */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-slate-400">
                  <div>
                    <span className="text-slate-500">Component:</span>{' '}
                    <span className="text-slate-300 font-semibold">{activeStep.actor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500">Status:</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <FaCheck className="text-[10px]" /> ACK_PROCESSED
                    </span>
                  </div>
                </div>

              </div>

              {/* Architectural Key Takeaway Card */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-gray-200 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
                <span className="mt-0.5 text-slate-900 font-bold">💡</span>
                <div>
                  <span className="font-semibold text-slate-900">Engineering Trade-off:</span>{' '}
                  {activeStep.explanation}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
