"use client";

import { motion } from "framer-motion";

import {
  Cpu,
  Database,
  BrainCircuit,
  RadioTower,
  Network,
} from "lucide-react";

const modules = [
  {
    title: "REC Digital Twin Engine",
    icon: Cpu,
    desc: "High-fidelity telecom digital twins with scalable AI-native orchestration.",
  },
  {
    title: "Synthetic Data Infrastructure",
    icon: Database,
    desc: "Generate telecom AI datasets for experimentation and optimization.",
  },
  {
    title: "AI Optimization Engine",
    icon: BrainCircuit,
    desc: "Closed-loop automation and intelligent telecom orchestration.",
  },
  {
    title: "Open RAN Integration",
    icon: RadioTower,
    desc: "Programmable AI-native networking with Open RAN interoperability.",
  },
];

export default function PlatformPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center border-b border-white/10 overflow-hidden">

        {/* GRADIENT BACKGROUND */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_35%)]"></div>

        {/* CONTENT */}

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >

            <p className="uppercase tracking-[0.25em] md:tracking-[0.3em] text-cyan-400 mb-6 md:mb-8 text-xs sm:text-sm">
              Platform Infrastructure
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-black leading-[1] max-w-[700px]">

              REC

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Digital Twin
              </span>

              Platform

            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-8 md:mt-10 max-w-2xl">
              ANNA-DTP enables scalable telecom intelligence through
              AI-native orchestration, synthetic telecom intelligence,
              and operational REC digital twins engineered for
              next-generation telecom ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 mt-10 md:mt-12">

              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold hover:opacity-90 transition">

                Explore Technology

              </button>

              <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold">

                Request Demo

              </button>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >

            <div className="rounded-[30px] md:rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-8">

              {/* TOP CARDS */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mb-6 md:mb-8">

                {/* CARD 1 */}

                <div className="rounded-[24px] md:rounded-[30px] bg-white/[0.04] border border-white/10 p-6 md:p-8 min-h-[220px] md:min-h-[260px] flex flex-col justify-between">

                  <p className="text-cyan-400 text-base md:text-lg">
                    AI Optimization
                  </p>

                  <h2 className="text-4xl sm:text-5xl font-black">
                    89%
                  </h2>

                </div>

                {/* CARD 2 */}

                <div className="rounded-[24px] md:rounded-[30px] bg-white/[0.04] border border-white/10 p-6 md:p-8 min-h-[220px] md:min-h-[260px] flex flex-col justify-between">

                  <p className="text-purple-400 text-base md:text-lg">
                    Synthetic Data
                  </p>

                  <h2 className="text-4xl sm:text-5xl font-black">
                    4.2PB
                  </h2>

                </div>

              </div>

              {/* LARGE CARD */}

              <div className="rounded-[28px] md:rounded-[40px] min-h-[320px] md:h-[360px] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">

                <div className="text-center px-5 md:px-10">

                  <Network
                    size={70}
                    className="mx-auto text-cyan-400 mb-6 md:mb-8 md:w-[90px] md:h-[90px]"
                  />

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">

                    Unified Telecom

                    <span className="block">
                      Intelligence Layer
                    </span>

                  </h2>

                  <p className="text-gray-300 text-base md:text-lg mt-5 md:mt-6 leading-relaxed">
                    AI-native orchestration • digital twinning •
                    scalable telecom intelligence
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* PLATFORM MODULES */}

      <section className="py-20 md:py-32">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="text-center mb-16 md:mb-24">

            <p className="uppercase tracking-[0.25em] md:tracking-[0.3em] text-cyan-400 mb-5 md:mb-6 text-xs sm:text-sm">
              Platform Modules
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">

              AI-Native Telecom

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Infrastructure Stack
              </span>

            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 md:mt-8 max-w-4xl mx-auto leading-relaxed">
              Modular telecom intelligence infrastructure designed for
              scalable experimentation, autonomous orchestration,
              digital twinning, and future AI-native network ecosystems.
            </p>

          </div>

          {/* MODULE GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">

            {modules.map((item, i) => {
              const Icon = item.icon;

              return (

                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="rounded-[26px] md:rounded-[32px] border border-white/10 bg-white/[0.03] p-6 md:p-10 transition"
                >

                  <Icon
                    size={55}
                    className="text-cyan-400 mb-6 md:mb-8"
                  />

                  <h3 className="text-2xl md:text-2xl font-black mb-5 md:mb-6 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {item.desc}
                  </p>

                </motion.div>

              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}