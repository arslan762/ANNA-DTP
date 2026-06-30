"use client";

import { motion } from "framer-motion";

import {
  Cpu,
  BrainCircuit,
  Database,
  Workflow,
  Network,
  Activity,
  Layers3,
  Radar,
  Globe,
  Zap,
  BarChart3,
  Orbit,
} from "lucide-react";

const architecture = [
  {
    title: "Realism",
    icon: Globe,
    points: [
      "3GPP-compliant modelling",
      "Mobility & handover dynamics",
      "Realistic RF propagation",
      "NTN-aware infrastructure",
    ],
  },
  {
    title: "Completeness",
    icon: Layers3,
    points: [
      "RAN / Edge / Core modelling",
      "Open RAN integration",
      "AI-native orchestration",
      "1000+ KPIs & COPs",
    ],
  },
  {
    title: "Efficiency",
    icon: Zap,
    points: [
      "Distributed simulation",
      "ML surrogate models",
      "Parallel execution",
      "Reduced compute overhead",
    ],
  },
];

const technologies = [
  {
    title: "Digital Twin Synchronization",
    icon: Activity,
    desc: "Continuously synchronizes telecom digital twins with operational KPIs and live network environments.",
  },
  {
    title: "AI-Native Orchestration",
    icon: BrainCircuit,
    desc: "Enables autonomous telecom optimization through continuous closed-loop orchestration.",
  },
  {
    title: "Synthetic Data Infrastructure",
    icon: Database,
    desc: "Scalable telecom synthetic data pipelines for AI training and benchmarking.",
  },
  {
    title: "Propagation & Ray Tracing",
    icon: Radar,
    desc: "AI-assisted RF propagation modelling with computationally efficient execution.",
  },
  {
    title: "Distributed Simulation",
    icon: Workflow,
    desc: "Cloud-native distributed telecom experimentation architecture.",
  },
  {
    title: "Open RAN Integration",
    icon: Network,
    desc: "Supports Open RAN, SD-RAN, UC-RAN, and programmable orchestration.",
  },
];

const metrics = [
  {
    value: "10–100×",
    label: "Faster Simulation Runtime",
  },
  {
    value: "12–13×",
    label: "Faster Propagation Modelling",
  },
  {
    value: "80%",
    label: "Lower Compute Overhead",
  },
];

export default function TechnologyPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]"></div>

        <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-8 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[700px]"
          >

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-black leading-[1]">

              AI Native Network

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Automation Digital
              </span>

              <span className="block">
                Twin Platform
              </span>

            </h1>

            {/* FULL FORM SECTION */}

            <div className="mt-8 md:mt-10 rounded-[24px] md:rounded-[28px] border border-cyan-500/20 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-8">

              <p className="text-cyan-400 text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 md:mb-5">
                Platform Definition
              </p>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight">

                ANNA-DTP

                <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  AI Native Network Automation
                </span>

                <span className="block mt-2 text-white">
                  Digital Twin Platform
                </span>

              </h3>

            </div>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-8 md:mt-10 max-w-2xl">
              ANNA-DTP combines digital twinning,
              scalable simulation, synthetic telecom intelligence,
              and autonomous orchestration into a unified REC architecture
              engineered for 5G, 6G, and future AI-native telecom ecosystems.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full rounded-[30px] md:rounded-[40px] p-5 sm:p-6 md:p-10 border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >

            {/* TOP CARDS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mb-6 md:mb-8">

              {/* CARD 1 */}

              <div className="rounded-[24px] md:rounded-3xl p-6 md:p-10 min-h-[220px] md:min-h-[260px] border border-white/10 bg-white/[0.03] flex flex-col justify-between">

                <p className="text-cyan-400 text-base md:text-lg">
                  AI Orchestration
                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-[50px] font-black leading-[1]">

                  Real-Time

                  <span className="block">
                    Intelligence
                  </span>

                </h3>

              </div>

              {/* CARD 2 */}

              <div className="rounded-[24px] md:rounded-3xl p-6 md:p-10 min-h-[220px] md:min-h-[260px] border border-white/10 bg-white/[0.03] flex flex-col justify-between">

                <p className="text-purple-400 text-base md:text-lg">
                  Simulation
                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-[50px] font-black leading-[1]">

                  Distributed

                  <span className="block">
                    Systems
                  </span>

                </h3>

              </div>

            </div>

            {/* LARGE CARD */}

            <div className="min-h-[320px] md:h-[360px] rounded-[30px] md:rounded-[40px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">

              <div className="text-center px-5 md:px-8">

                <Orbit
                  size={70}
                  className="mx-auto text-cyan-400 mb-6 md:mb-8 md:w-[90px] md:h-[90px]"
                />

                <h3 className="text-3xl sm:text-4xl font-black leading-tight">

                  REC Digital Twin

                  <span className="block">
                    Architecture
                  </span>

                </h3>

                <p className="text-gray-300 text-base md:text-lg mt-4 md:mt-5">
                  Realism • Completeness • Efficiency
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* TECHNOLOGY VISION */}

      <section className="py-20 md:py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="text-center mb-16 md:mb-24">

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
              Technology Vision
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 md:mt-8 max-w-5xl mx-auto leading-relaxed">
              ANNA-DTP is engineered as a continuously evolving telecom
              intelligence layer capable of integrating operational network
              data, AI workflows, scalable digital twins, and autonomous
              orchestration into one unified infrastructure platform.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">

            {[
              "Real-Time Intelligence",
              "Scalable Experimentation",
              "AI-Native Decisions",
              "Zero-Touch Automation",
              "5G/6G Optimization",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-[24px] md:rounded-[30px] p-6 md:p-8 text-center border border-white/10 bg-white/[0.03]"
              >

                <Cpu
                  size={45}
                  className="mx-auto text-cyan-400 mb-5 md:mb-6"
                />

                <h3 className="text-lg md:text-xl font-bold">
                  {item}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* REC ARCHITECTURE */}

      <section className="py-20 md:py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="text-center mb-16 md:mb-24">

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
              REC Architecture
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 md:mt-8 max-w-4xl mx-auto leading-relaxed">
              The foundational infrastructure framework enabling scalable
              telecom intelligence and digital twinning.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

            {architecture.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="rounded-[28px] md:rounded-[40px] p-8 md:p-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10"
                >

                  <Icon
                    size={60}
                    className="text-cyan-400 mb-6 md:mb-8"
                  />

                  <h3 className="text-3xl md:text-4xl font-black mb-6 md:mb-8">
                    {item.title}
                  </h3>

                  <ul className="space-y-4">

                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 flex gap-3 text-sm sm:text-base"
                      >
                        <span className="text-cyan-400">•</span>
                        {point}
                      </li>
                    ))}

                  </ul>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}