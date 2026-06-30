"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Database,
  Cpu,
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

      <section className="relative min-h-screen flex items-center border-b border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]"></div>

        <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[0.3em] text-cyan-400 mb-8">
              Research Ecosystem
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-[88px] font-black leading-[0.92] max-w-[750px]">
              AI-Native
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Telecom Research
              </span>
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mt-10 max-w-2xl">
              ANNA-DTP research focuses on scalable telecom intelligence,
              digital twinning, AI-native orchestration, synthetic telecom
              ecosystems, and future autonomous network infrastructures
              for 5G, 6G, and programmable telecom environments.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="glass rounded-[40px] p-10 border border-white/10"
          >

            <div className="grid grid-cols-2 gap-8 mb-8">

              <div className="glass rounded-3xl p-10 min-h-[240px] flex flex-col justify-between">

                <p className="text-cyan-400 text-lg">
                  Research Domains
                </p>

                <h3 className="text-4xl lg:text-[52px] font-black leading-[0.95]">
                  AI-Native
                </h3>

              </div>

              <div className="glass rounded-3xl p-10 min-h-[240px] flex flex-col justify-between">

                <p className="text-purple-400 text-lg">
                  Publications
                </p>

                <h3 className="text-4xl lg:text-[46px] font-black leading-[0.95] whitespace-nowrap">
                  IEEE
                </h3>

              </div>

            </div>

            <div className="h-[360px] rounded-[40px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">

              <div className="text-center px-8">

                <GraduationCap
                  size={90}
                  className="mx-auto text-cyan-400 mb-8"
                />

                <h3 className="text-4xl font-black">
                  Future Telecom Intelligence
                </h3>

                <p className="text-gray-300 text-lg mt-5">
                  Digital Twinning • AI-Native Networks •
                  Autonomous Telecom Intelligence
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* RESEARCH DOMAINS */}

      <section className="py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              Core Research Domains
            </h2>

            <p className="text-gray-400 text-xl mt-8 max-w-5xl mx-auto">
              Advancing scalable AI-native telecom intelligence
              and future programmable network ecosystems.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {domains.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="glass rounded-[35px] p-10 border border-white/10"
                >

                  <Icon
                    size={65}
                    className="text-cyan-400 mb-8"
                  />

                  <h3 className="text-3xl font-black mb-8">
                    {item.title}
                  </h3>

                  <ul className="space-y-4">

                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 flex gap-3"
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

      <section className="py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              ANNA in Action
            </h2>

            <p className="text-gray-400 text-xl mt-8 max-w-4xl mx-auto">
              Publications underpinning ANNA-DTP in REC Engine Framework
            </p>

          </div>

          <div className="space-y-8">

            {papers.map((paper, i) => (
              <motion.a
                key={i}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="glass rounded-[35px] p-10 border border-white/10 block"
              >

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                  <div className="flex-1">

                    <div className="flex items-center gap-4 mb-6">

                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                        <FileText
                          size={30}
                          className="text-cyan-400"
                        />
                      </div>

                      <div className="px-5 py-2 rounded-full border border-cyan-400/20 text-cyan-400 text-sm tracking-widest uppercase">
                        {paper.publication}
                      </div>

                    </div>

                    <h3 className="text-3xl font-black leading-tight hover:text-cyan-400 transition duration-300">
                      {paper.title}
                    </h3>

                    <p className="text-gray-400 mt-5 text-lg">
                      {paper.domain}
                    </p>

                  </div>

                  <div className="flex items-center">

                    <div className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold">
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

      <section className="py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              Research Validation
            </h2>

            <p className="text-gray-400 text-xl mt-8 max-w-5xl mx-auto">
              Benchmark-driven validation across scalable
              telecom digital twin environments.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass rounded-[40px] p-14 text-center"
              >

                <BarChart3
                  size={70}
                  className="mx-auto text-cyan-400 mb-8"
                />

                <h3 className="text-6xl font-black">
                  {metric.value}
                </h3>

                <p className="text-gray-300 text-xl mt-6">
                  {metric.label}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* LONG TERM VISION */}

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-6xl font-black">
            Long-Term Research Vision
          </h2>

          <p className="text-gray-300 text-2xl leading-relaxed max-w-5xl mx-auto mt-12">
            ANNA-DTP is positioned as a foundational research
            and operational intelligence infrastructure for
            future AI-native telecom ecosystems, enabling
            programmable telecom intelligence, scalable REC
            digital twins, autonomous orchestration, and
            future 6G-native network operations.
          </p>

          <div className="mt-16 h-[380px] rounded-[50px] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 flex items-center justify-center">

            <div className="text-center px-10">

              <Zap
                size={90}
                className="mx-auto text-cyan-400 mb-8"
              />

              <h3 className="text-5xl font-black">
                Future AI-Native Telecom Ecosystems
              </h3>

              <p className="text-gray-300 text-xl mt-6 max-w-4xl">
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
