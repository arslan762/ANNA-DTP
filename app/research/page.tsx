"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Database,
  Radar,
  Workflow,
  GraduationCap,
  BarChart3,
  Orbit,
  Zap,
  FileText,
} from "lucide-react";

const domains = [
  {
    title: "AI-Native Telecom Networks",
    icon: BrainCircuit,
    points: [
      "AI-native SON",
      "Policy learning",
      "Autonomous optimization",
      "Continuous orchestration",
    ],
  },
  {
    title: "REC Digital Twin Infrastructure",
    icon: Orbit,
    points: [
      "High-fidelity telecom modelling",
      "Real-time synchronization",
      "KPI/COP ecosystems",
      "Scalable experimentation",
    ],
  },
  {
    title: "Synthetic Telecom Intelligence",
    icon: Database,
    points: [
      "Synthetic KPI generation",
      "Telecom AI datasets",
      "AI benchmarking",
      "Scalable experimentation",
    ],
  },
  {
    title: "AI-Assisted Propagation Modelling",
    icon: Radar,
    points: [
      "ML-based propagation",
      "Scalable ray tracing",
      "RF environment modelling",
      "Computational efficiency",
    ],
  },
  {
    title: "Distributed Telecom Experimentation",
    icon: Workflow,
    points: [
      "Distributed execution",
      "Parallel simulation",
      "Cloud-native experimentation",
      "Scalable KPI processing",
    ],
  },
];

const papers = [
  {
    title:
      "Toward Addressing Training Data Scarcity Challenge in Emerging Radio Access Networks: A Survey and Framework",
    domain: "Synthetic Telecom Intelligence • AI-Native RAN",
    publication: "IEEE",
    link: "https://ieeexplore.ieee.org/abstract/document/10113782",
  },
  {
    title:
      "A Hybrid Deep Learning-Based (HYDRA) Framework for Multifault Diagnosis Using Sparse MDT Reports",
    domain: "AI Diagnostics • Autonomous Fault Analysis",
    publication: "IEEE",
    link: "https://ieeexplore.ieee.org/abstract/document/9804486",
  },
  {
    title:
      "SyntheticNET: A 3GPP Compliant Simulator for AI Enabled 5G and Beyond",
    domain: "Digital Twinning • AI-Native 5G Infrastructure",
    publication: "IEEE",
    link: "https://ieeexplore.ieee.org/abstract/document/9084113",
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
    label: "Lower Computational Overhead",
  },
];

export default function ResearchPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-screen flex items-center border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >

            <p className="uppercase tracking-[0.25em] md:tracking-[0.3em] text-cyan-400 mb-6 md:mb-8 text-xs sm:text-sm">
              Research Ecosystem
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-black leading-[1] max-w-[750px]">

              AI-Native

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Telecom Research
              </span>

            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-8 md:mt-10 max-w-2xl">
              ANNA-DTP research focuses on scalable telecom intelligence,
              digital twinning, AI-native orchestration, synthetic telecom
              ecosystems, and future autonomous network infrastructures
              for 5G, 6G, and programmable telecom environments.
            </p>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-[30px] md:rounded-[40px] p-5 sm:p-6 md:p-10 border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mb-6 md:mb-8">

              <div className="rounded-[24px] md:rounded-3xl p-6 md:p-10 min-h-[220px] md:min-h-[240px] border border-white/10 bg-white/[0.03] flex flex-col justify-between">

                <p className="text-cyan-400 text-base md:text-lg">
                  Research Domains
                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-[52px] font-black leading-[1]">
                  AI-Native
                </h3>

              </div>

              <div className="rounded-[24px] md:rounded-3xl p-6 md:p-10 min-h-[220px] md:min-h-[240px] border border-white/10 bg-white/[0.03] flex flex-col justify-between">

                <p className="text-purple-400 text-base md:text-lg">
                  Publications
                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-[46px] font-black leading-[1]">
                  IEEE
                </h3>

              </div>

            </div>

            <div className="min-h-[320px] md:h-[360px] rounded-[30px] md:rounded-[40px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">

              <div className="text-center px-5 md:px-8">

                <GraduationCap
                  size={70}
                  className="mx-auto text-cyan-400 mb-6 md:mb-8 md:w-[90px] md:h-[90px]"
                />

                <h3 className="text-3xl sm:text-4xl font-black leading-tight">
                  Future Telecom Intelligence
                </h3>

                <p className="text-gray-300 text-base md:text-lg mt-5 leading-relaxed">
                  Digital Twinning • AI-Native Networks •
                  Autonomous Telecom Intelligence
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* RESEARCH DOMAINS */}

      <section className="py-20 md:py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="text-center mb-16 md:mb-24">

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
              Core Research Domains
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 md:mt-8 max-w-5xl mx-auto leading-relaxed">
              Advancing scalable AI-native telecom intelligence
              and future programmable network ecosystems.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

            {domains.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="rounded-[28px] md:rounded-[35px] p-6 md:p-10 border border-white/10 bg-white/[0.03]"
                >

                  <Icon
                    size={60}
                    className="text-cyan-400 mb-6 md:mb-8"
                  />

                  <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 leading-tight">
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

      {/* PUBLICATIONS */}

      <section className="py-20 md:py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="text-center mb-16 md:mb-24">

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
              ANNA in Action
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 md:mt-8 max-w-4xl mx-auto leading-relaxed">
              Publications underpinning ANNA-DTP in REC Engine Framework
            </p>

          </div>

          <div className="space-y-6 md:space-y-8">

            {papers.map((paper, i) => (
              <motion.a
                key={i}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="rounded-[28px] md:rounded-[35px] p-6 md:p-10 border border-white/10 block bg-white/[0.03]"
              >

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8">

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-4 mb-5 md:mb-6">

                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                        <FileText
                          size={28}
                          className="text-cyan-400"
                        />
                      </div>

                      <div className="px-4 md:px-5 py-2 rounded-full border border-cyan-400/20 text-cyan-400 text-xs md:text-sm tracking-widest uppercase">
                        {paper.publication}
                      </div>

                    </div>

                    <h3 className="text-2xl md:text-3xl font-black leading-tight hover:text-cyan-400 transition duration-300">
                      {paper.title}
                    </h3>

                    <p className="text-gray-400 mt-4 md:mt-5 text-base md:text-lg">
                      {paper.domain}
                    </p>

                  </div>

                  <div className="flex items-center">

                    <div className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-sm md:text-base">
                      View Publication
                    </div>

                  </div>

                </div>

              </motion.a>
            ))}

          </div>

        </div>

      </section>

      {/* RESEARCH VALIDATION */}

      <section className="py-20 md:py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="text-center mb-16 md:mb-24">

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
              Research Validation
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 md:mt-8 max-w-5xl mx-auto leading-relaxed">
              Benchmark-driven validation across scalable
              telecom digital twin environments.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-[28px] md:rounded-[40px] p-8 md:p-14 text-center border border-white/10 bg-white/[0.03]"
              >

                <BarChart3
                  size={60}
                  className="mx-auto text-cyan-400 mb-6 md:mb-8"
                />

                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black">
                  {metric.value}
                </h3>

                <p className="text-gray-300 text-base md:text-xl mt-5 md:mt-6">
                  {metric.label}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* LONG TERM VISION */}

      <section className="py-20 md:py-32">

        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Long-Term Research Vision
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-2xl leading-relaxed max-w-5xl mx-auto mt-8 md:mt-12">
            ANNA-DTP is positioned as a foundational research
            and operational intelligence infrastructure for
            future AI-native telecom ecosystems, enabling
            programmable telecom intelligence, scalable REC
            digital twins, autonomous orchestration, and
            future 6G-native network operations.
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
                scalable telecom intelligence • digital twinning •
                future 6G ecosystems
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}