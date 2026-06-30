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

      <section className="relative min-h-screen flex items-center border-b border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]"></div>

        <div className="max-w-[1450px] mx-auto px-8 py-32 grid lg:grid-cols-[1fr_1fr] gap-16 items-center relative z-10">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[700px]"
          >

            <p className="uppercase tracking-[0.3em] text-cyan-400 mb-8">
              Technology Architecture
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-[82px] font-black leading-[0.92]">

              AI-Native

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Telecom Intelligence
              </span>

            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mt-10 max-w-2xl">
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
            className="glass rounded-[40px] p-10 border border-white/10"
          >

            {/* TOP CARDS */}

            <div className="grid grid-cols-[1.15fr_1.15fr] gap-8 mb-8">

              {/* CARD 1 */}

              <div className="glass rounded-3xl p-10 min-h-[260px] flex flex-col justify-between">

  <p className="text-cyan-400 text-lg">
    AI Orchestration
  </p>

  <h3 className="text-4xl lg:text-[50px] font-black leading-[0.95]">

    Real-Time

    <span className="block">
      Intelligence
    </span>

  </h3>

</div>
              {/* CARD 2 */}

              <div className="glass rounded-3xl p-10 min-h-[260px] flex flex-col justify-between">

  <p className="text-purple-400 text-lg">
    Simulation
  </p>

  <h3 className="text-4xl lg:text-[50px] font-black leading-[0.95]">

    Distributed

    <span className="block">
      Systems
    </span>

  </h3>

</div>


            </div>

            {/* LARGE CARD */}

            <div className="h-[360px] rounded-[40px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">

              <div className="text-center px-8">

                <Orbit
                  size={90}
                  className="mx-auto text-cyan-400 mb-8"
                />

                <h3 className="text-4xl font-black leading-tight">

                  REC Digital Twin
                  <span className="block">
                    Architecture
                  </span>

                </h3>

                <p className="text-gray-300 text-lg mt-5">
                  Realism • Completeness • Efficiency
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* TECHNOLOGY VISION */}

      <section className="py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              Technology Vision
            </h2>

            <p className="text-gray-400 text-xl mt-8 max-w-5xl mx-auto leading-relaxed">
              ANNA-DTP is engineered as a continuously evolving telecom
              intelligence layer capable of integrating operational network
              data, AI workflows, scalable digital twins, and autonomous
              orchestration into one unified infrastructure platform.
            </p>

          </div>

          <div className="grid lg:grid-cols-5 gap-6">

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
                className="glass rounded-[30px] p-8 text-center"
              >

                <Cpu
                  size={50}
                  className="mx-auto text-cyan-400 mb-6"
                />

                <h3 className="text-xl font-bold">
                  {item}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* REC ARCHITECTURE */}

      <section className="py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              REC Architecture
            </h2>

            <p className="text-gray-400 text-xl mt-8 max-w-4xl mx-auto">
              The foundational infrastructure framework enabling scalable
              telecom intelligence and digital twinning.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {architecture.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="rounded-[40px] p-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10"
                >

                  <Icon
                    size={70}
                    className="text-cyan-400 mb-8"
                  />

                  <h3 className="text-4xl font-black mb-8">
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

      {/* CORE TECHNOLOGIES */}

      <section className="py-32 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              Core Technologies
            </h2>

            <p className="text-gray-400 text-xl mt-8 max-w-4xl mx-auto">
              Advanced AI-native telecom infrastructure technologies
              powering scalable digital twin ecosystems.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {technologies.map((tech, i) => {
              const Icon = tech.icon;

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

                  <h3 className="text-3xl font-black mb-6">
                    {tech.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {tech.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* PERFORMANCE */}

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <h2 className="text-6xl font-black">
              Performance & Scalability
            </h2>

            <p className="text-gray-400 text-xl mt-8 max-w-4xl mx-auto">
              Validated performance acceleration across
              large-scale telecom digital twin environments.
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

          <div className="mt-16 h-[360px] rounded-[50px] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 flex items-center justify-center">

            <div className="text-center px-10">

              <Zap
                size={90}
                className="mx-auto text-cyan-400 mb-8"
              />

              <h3 className="text-5xl font-black leading-tight">

                AI-Assisted Telecom
                <span className="block">
                  Intelligence
                </span>

              </h3>

              <p className="text-gray-300 text-xl mt-6 max-w-4xl">
                Distributed simulation • AI-assisted propagation •
                scalable experimentation • closed-loop orchestration •
                digital twin synchronization
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}