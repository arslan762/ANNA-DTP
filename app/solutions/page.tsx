"use client";

import { motion } from "framer-motion";
import {
  RadioTower,
  Network,
  BrainCircuit,
  Cpu,
  GraduationCap,
  ShieldCheck,
  Orbit,
  Activity,
  Zap,
} from "lucide-react";

const solutions = [
  {
    title: "Telecom Operators",
    icon: RadioTower,
    challenge:
      "Reactive network management, fragmented tooling ecosystems, operational inefficiencies, and limited AI-native optimization.",
    solution:
      "Enable scalable RAN optimization, outage analysis, mobility tuning, AI-native orchestration, and zero-touch automation validation.",
    impact: [
      "Reduced operational overhead",
      "Faster optimization cycles",
      "Improved KPI performance",
      "Scalable experimentation",
    ],
  },
  {
    title: "Open RAN & AI-Native Networks",
    icon: Network,
    challenge:
      "Future telecom ecosystems require programmable infrastructure, interoperability, and scalable AI-native orchestration.",
    solution:
      "Support Open RAN interoperability, SD-RAN experimentation, UC-RAN integration, and programmable orchestration pipelines.",
    impact: [
      "Continuous optimization",
      "Programmable intelligence",
      "AI-native orchestration",
      "Future-ready telecom architecture",
    ],
  },
  {
    title: "AI & Synthetic Telecom Intelligence",
    icon: BrainCircuit,
    challenge:
      "Telecom AI systems require scalable, labeled, and trustworthy telecom intelligence datasets.",
    solution:
      "Generate synthetic KPI/COP datasets, scalable AI benchmarking environments, and tunable experimentation pipelines.",
    impact: [
      "Accelerated AI training",
      "Reduced dependency on operational data",
      "Scalable AI experimentation",
      "Lower experimentation cost",
    ],
  },
  {
    title: "Digital Twin Infrastructure",
    icon: Orbit,
    challenge:
      "Traditional telecom simulators cannot synchronize continuously with live operational environments.",
    solution:
      "Enable REC digital twins with continuous KPI ingestion, real-time calibration, and topology-aware adaptation.",
    impact: [
      "Trustworthy experimentation",
      "Continuous optimization",
      "Scalable operational intelligence",
      "Improved network visibility",
    ],
  },
  {
    title: "5G / 6G Experimentation",
    icon: Cpu,
    challenge:
      "Future telecom infrastructure introduces high experimentation cost and operational complexity.",
    solution:
      "Provide scalable 5G/6G experimentation, NTN-aware simulation, mobility stress testing, and AI-native optimization.",
    impact: [
      "Accelerated innovation cycles",
      "Reduced deployment risk",
      "Large-scale experimentation",
      "AI-native optimization",
    ],
  },
  {
    title: "Research & Universities",
    icon: GraduationCap,
    challenge:
      "Academic simulators often lack realism, scalability, distributed experimentation, and operational AI integration.",
    solution:
      "Enable reproducible experimentation, scalable telecom simulation, KPI ecosystems, and AI-native benchmarking.",
    impact: [
      "Reduced infrastructure cost",
      "Scalable experimentation",
      "Realistic telecom modelling",
      "Accelerated AI research",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-screen flex items-center pt-28 md:pt-32 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]"></div>

        <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[650px]"
          >

            <p className="uppercase tracking-[0.25em] md:tracking-[0.3em] text-cyan-400 mb-5 md:mb-6 text-xs sm:text-sm">
              Enterprise Telecom Solutions
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black leading-[1]">

              AI-Native

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Telecom Operations
              </span>

            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-8 md:mt-10 leading-relaxed">

              ANNA-DTP enables scalable telecom digital twinning,
              autonomous orchestration, synthetic telecom intelligence,
              and operational AI infrastructure for future
              5G, 6G, and AI-native telecom ecosystems.

            </p>

          </motion.div>

          {/* RIGHT PANEL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-[30px] md:rounded-[40px] p-5 sm:p-6 md:p-10 border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >

            {/* TOP CARDS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-6">

              {/* LEFT CARD */}

              <div className="rounded-[24px] md:rounded-3xl p-6 border border-white/10 bg-white/[0.03]">

                <p className="text-cyan-400 text-base md:text-lg">
                  AI Orchestration
                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 leading-tight">

                  Autonomous

                  <span className="block">
                    Networks
                  </span>

                </h3>

              </div>

              {/* RIGHT CARD */}

              <div className="rounded-[24px] md:rounded-3xl p-6 border border-white/10 bg-white/[0.03]">

                <p className="text-purple-400 text-base md:text-lg">
                  Digital Twins
                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 leading-tight">

                  Real-Time

                  <span className="block">
                    Intelligence
                  </span>

                </h3>

              </div>

            </div>

            {/* MAIN PANEL */}

            <div className="min-h-[320px] md:h-[360px] rounded-[30px] md:rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 flex items-center justify-center">

              <div className="text-center px-5 md:px-10">

                <Activity
                  size={70}
                  className="mx-auto text-cyan-400 mb-6 md:mb-8 md:w-[90px] md:h-[90px]"
                />

                <h3 className="text-3xl sm:text-4xl font-black leading-tight">

                  Continuous Telecom

                  <span className="block">
                    Intelligence
                  </span>

                </h3>

                <p className="text-gray-300 text-base md:text-lg mt-5 leading-relaxed">
                  AI-native orchestration • digital twinning •
                  scalable experimentation • autonomous optimization
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SOLUTION CARDS */}

      <section className="py-20 md:py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="text-center mb-16 md:mb-24">

            <h2 className="text-4xl sm:text-5xl font-black">
              Industry Solutions
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 md:mt-8 max-w-5xl mx-auto leading-relaxed">
              Built to solve operational complexity,
              AI scalability, and experimentation challenges
              across next-generation telecom ecosystems.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">

            {solutions.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="rounded-[28px] md:rounded-[40px] p-6 md:p-12 border border-white/10 bg-white/[0.03]"
                >

                  <Icon
                    size={60}
                    className="text-cyan-400 mb-6 md:mb-8"
                  />

                  <h3 className="text-3xl md:text-4xl font-black mb-8 md:mb-10 leading-tight">
                    {item.title}
                  </h3>

                  <div className="space-y-6 md:space-y-8">

                    <div>
                      <p className="text-red-300 uppercase tracking-widest text-xs md:text-sm mb-3">
                        Challenge
                      </p>

                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {item.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="text-cyan-400 uppercase tracking-widest text-xs md:text-sm mb-3">
                        ANNA-DTP Solution
                      </p>

                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {item.solution}
                      </p>
                    </div>

                    <div>
                      <p className="text-purple-400 uppercase tracking-widest text-xs md:text-sm mb-4">
                        Operational Impact
                      </p>

                      <ul className="space-y-3">

                        {item.impact.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-gray-300 text-sm sm:text-base"
                          >
                            <span className="text-cyan-400">•</span>
                            {point}
                          </li>
                        ))}

                      </ul>
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* OPERATIONAL INTELLIGENCE */}

      <section className="py-20 md:py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="text-center mb-16 md:mb-24">

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Operational Intelligence Layer
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 md:mt-8 max-w-5xl mx-auto leading-relaxed">
              ANNA-DTP is not a standalone simulator
              or static planning tool. The platform is designed
              as a continuous telecom intelligence layer enabling
              scalable digital twinning, operational AI integration,
              and future zero-touch automation ecosystems.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "Continuous Telecom Intelligence",
              "Operational AI Infrastructure",
              "Digital Twin Orchestration",
              "Zero-Touch Automation",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-[28px] md:rounded-[35px] p-6 md:p-10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 text-center"
              >

                <ShieldCheck
                  size={55}
                  className="mx-auto text-cyan-400 mb-5 md:mb-6"
                />

                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {item}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* LONG TERM IMPACT */}

      <section className="py-20 md:py-32">

        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Strategic Long-Term Impact
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-2xl leading-relaxed max-w-5xl mx-auto mt-8 md:mt-12">
            ANNA-DTP bridges the gap between telecom operational
            complexity and scalable AI-native decision intelligence,
            enabling autonomous orchestration, continuous telecom
            intelligence, scalable REC digital twin infrastructure,
            and future 6G-native programmable ecosystems.
          </p>

          <div className="mt-12 md:mt-16 min-h-[320px] md:h-[380px] rounded-[32px] md:rounded-[50px] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 flex items-center justify-center">

            <div className="text-center px-5 md:px-10">

              <Zap
                size={70}
                className="mx-auto text-cyan-400 mb-6 md:mb-8 md:w-[90px] md:h-[90px]"
              />

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                Future AI-Native Telecom Ecosystems
              </h3>

              <p className="text-gray-300 text-base md:text-xl mt-5 md:mt-6 max-w-4xl leading-relaxed">
                Autonomous orchestration • programmable infrastructure •
                scalable telecom intelligence • continuous optimization •
                zero-touch operations
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}