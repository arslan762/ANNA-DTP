"use client";

import { motion } from "framer-motion";

import {
  Building2,
  Globe,
  Mail,
  ArrowRight,
  Network,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center border-b border-white/10">

        {/* GRADIENT BACKGROUND */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_35%)]"></div>

        {/* CONTENT */}

        <div className="relative z-10 max-w-[1450px] mx-auto px-8 py-32 grid lg:grid-cols-[1fr_1fr] gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[700px]"
          >

            <p className="uppercase tracking-[0.35em] text-cyan-400 mb-8">
              Enterprise Contact
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-[82px] font-black leading-[0.92]">

              Connect With

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                ANNA-DTP
              </span>

            </h1>

            <p className="text-gray-300 text-xl leading-relaxed mt-10 max-w-2xl">
              Explore enterprise telecom AI infrastructure,
              REC digital twins, autonomous orchestration,
              synthetic telecom intelligence, strategic collaboration,
              and future programmable telecom ecosystems.
            </p>

            <div className="flex flex-wrap gap-6 mt-12">

              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold hover:opacity-90 transition">

                Request Enterprise Demo

              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition font-semibold">

                Schedule Consultation

              </button>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >

            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">

              {/* TOP CARDS */}

              <div className="grid grid-cols-2 gap-8 mb-8">

                {/* CARD 1 */}

                <div className="rounded-[30px] bg-white/[0.04] border border-white/10 p-8 min-h-[260px] flex flex-col justify-between">

                  <p className="text-cyan-400 text-lg">
                    Enterprise
                  </p>

                  <h2 className="text-4xl lg:text-5xl font-black leading-tight">

                    Global

                    <span className="block">
                      Connectivity
                    </span>

                  </h2>

                </div>

                {/* CARD 2 */}

                <div className="rounded-[30px] bg-white/[0.04] border border-white/10 p-8 min-h-[260px] flex flex-col justify-between">

                  <p className="text-purple-400 text-lg">
                    Collaboration
                  </p>

                  <h2 className="text-4xl lg:text-5xl font-black leading-tight">

                    Strategic

                    <span className="block">
                      Partnerships
                    </span>

                  </h2>

                </div>

              </div>

              {/* LARGE CARD */}

              <div className="rounded-[40px] h-[360px] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">

                <div className="text-center px-10">

                  <Network
                    size={90}
                    className="mx-auto text-cyan-400 mb-8"
                  />

                  <h2 className="text-4xl lg:text-5xl font-black leading-tight">

                    Enterprise Telecom

                    <span className="block">
                      Intelligence Network
                    </span>

                  </h2>

                  <p className="text-gray-300 text-lg mt-6">
                    Collaboration • orchestration • innovation •
                    AI-native telecom ecosystems
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* CONTACT FORM */}

      <section className="py-32 border-b border-white/10">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.35em] text-cyan-400 mb-8">
              Contact & Queries
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">

              Submit Your

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Enterprise Query
              </span>

            </h2>

            <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto">
              Contact the ANNA-DTP team regarding enterprise deployment,
              partnerships, telecom AI research, pricing,
              infrastructure, collaboration, and platform access.
            </p>

          </div>

          {/* FORM CONTAINER */}

          <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10">

            <form className="space-y-8">

              {/* NAME + EMAIL */}

              <div className="grid md:grid-cols-2 gap-6">

                <div>

                  <label className="block text-gray-300 mb-3 text-lg">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 transition"
                  />

                </div>

                <div>

                  <label className="block text-gray-300 mb-3 text-lg">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 transition"
                  />

                </div>

              </div>

              {/* COMPANY */}

              <div>

                <label className="block text-gray-300 mb-3 text-lg">
                  Organization / Company
                </label>

                <input
                  type="text"
                  placeholder="Enter organization name"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 transition"
                />

              </div>

              {/* SUBJECT */}

              <div>

                <label className="block text-gray-300 mb-3 text-lg">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter query subject"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 transition"
                />

              </div>

              {/* MESSAGE */}

              <div>

                <label className="block text-gray-300 mb-3 text-lg">
                  Your Query
                </label>

                <textarea
                  rows={7}
                  placeholder="Describe your enterprise, research, or platform query..."
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-cyan-400 transition resize-none"
                />

              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-xl font-semibold hover:opacity-90 transition"
              >

                Submit Enterprise Query

              </button>

            </form>

          </div>

        </div>

      </section>

      {/* ENTERPRISE CARDS */}

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.35em] text-cyan-400 mb-8">
              Enterprise Collaboration
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">

              Partner With

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                ANNA-DTP
              </span>

            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* ENTERPRISE */}

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-[35px] border border-white/10 bg-white/[0.03] p-10"
            >

              <Building2
                size={60}
                className="text-cyan-400 mb-8"
              />

              <h3 className="text-3xl font-black mb-6">
                Enterprise Deployment
              </h3>

              <p className="text-gray-300 leading-relaxed mb-10">
                Deploy scalable AI-native telecom intelligence
                infrastructure across operators, telecom vendors,
                and enterprise ecosystems.
              </p>

              <button className="flex items-center gap-3 text-cyan-400 font-semibold">

                Explore Enterprise
                <ArrowRight size={22} />

              </button>

            </motion.div>

            {/* RESEARCH */}

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-[35px] border border-white/10 bg-white/[0.03] p-10"
            >

              <Globe
                size={60}
                className="text-purple-400 mb-8"
              />

              <h3 className="text-3xl font-black mb-6">
                Research Collaboration
              </h3>

              <p className="text-gray-300 leading-relaxed mb-10">
                Collaborate on REC digital twins, telecom AI,
                synthetic intelligence, and future programmable networks.
              </p>

              <button className="flex items-center gap-3 text-purple-400 font-semibold">

                Explore Research
                <ArrowRight size={22} />

              </button>

            </motion.div>

            {/* CONSULTATION */}

            <motion.div
              whileHover={{ y: -8 }}
              className="rounded-[35px] border border-white/10 bg-white/[0.03] p-10"
            >

              <Mail
                size={60}
                className="text-cyan-400 mb-8"
              />

              <h3 className="text-3xl font-black mb-6">
                Strategic Consultation
              </h3>

              <p className="text-gray-300 leading-relaxed mb-10">
                Discuss zero-touch automation,
                AI-native orchestration, and
                next-generation telecom intelligence infrastructure.
              </p>

              <button className="flex items-center gap-3 text-cyan-400 font-semibold">

                Contact Team
                <ArrowRight size={22} />

              </button>

            </motion.div>

          </div>

        </div>

      </section>

    </main>
  );
}