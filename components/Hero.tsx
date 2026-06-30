"use client";

import { motion } from "framer-motion";
import { Network } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712] pt-28 md:pt-32">

      {/* BACKGROUND IMAGE */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/75"></div>

      {/* BLUE / PURPLE GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_30%)]"></div>

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          className="w-full max-w-[620px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* FULL FORM */}

          <div className="mb-8 md:mb-10">

            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed">

              <span className="text-cyan-400 font-bold">
                ANNA-DTP
              </span>{" "}

              —

              <span className="text-white font-semibold ml-2">
                AI-Native Network Automation and Digital Twin Platform
              </span>

            </p>

          </div>

          {/* MAIN TITLE */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[1] text-white">

            The

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Intelligence
            </span>

            Layer For

            <span className="block">
              Future Telecom Networks
            </span>

          </h1>

          {/* DESCRIPTION */}

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-8 md:mt-10">

            ANNA-DTP combines REC digital twins, scalable simulation,
            synthetic telecom intelligence, AI-native orchestration,
            and autonomous optimization into a unified platform
            engineered for 5G, 6G, Open RAN, and future programmable
            telecom ecosystems.

          </p>

          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 mt-10 md:mt-14">

            <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-base md:text-lg font-semibold hover:scale-[1.03] transition duration-300 text-white shadow-2xl shadow-cyan-500/20">

              Request Enterprise Demo

            </button>

            <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-2xl border border-white/10 bg-white/5 text-base md:text-lg font-semibold hover:bg-white/10 transition duration-300 text-white">

              Explore Platform

            </button>

          </div>

        </motion.div>

        {/* RIGHT PANEL */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full"
        >

          <div className="rounded-[30px] md:rounded-[45px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 md:p-8 shadow-2xl">

            {/* TOP METRICS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-6">

              <div className="rounded-[24px] md:rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">

                <p className="text-cyan-400 mb-3 md:mb-4 text-base md:text-lg">
                  AI Optimization
                </p>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
                  89%
                </h2>

              </div>

              <div className="rounded-[24px] md:rounded-[28px] border border-white/10 bg-white/5 p-6 md:p-8">

                <p className="text-purple-400 mb-3 md:mb-4 text-base md:text-lg">
                  Synthetic Data
                </p>

                <h2 className="text-4xl sm:text-5xl md:text-5xl font-black text-white">
                  4.2PB
                </h2>

              </div>

            </div>

            {/* MAIN PANEL */}

            <div className="rounded-[28px] md:rounded-[40px] min-h-[320px] md:min-h-[420px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center relative overflow-hidden">

              {/* GLOW */}

              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-cyan-500/20 blur-[120px]"></div>

              {/* CONTENT */}

              <div className="relative z-10 text-center px-6 md:px-10">

                <Network
                  size={70}
                  className="mx-auto text-cyan-400 mb-6 md:mb-8 md:w-[90px] md:h-[90px]"
                />

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">

                  REC Digital Twin

                  <span className="block">
                    Infrastructure
                  </span>

                </h2>

                <p className="text-gray-300 text-base md:text-xl mt-6 md:mt-8">
                  Realism • Completeness • Efficiency
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}