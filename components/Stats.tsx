export default function Stats() {
  return (
    <section className="relative py-32 bg-[#030712] border-t border-white/10 border-b border-white/10 overflow-hidden">

      {/* GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADING */}

        <div className="text-center mb-24">

          <p className="uppercase tracking-[0.35em] text-cyan-400 mb-8">
            Enterprise Intelligence
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">

            AI-Native Telecom
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Infrastructure Platform
            </span>

          </h2>

          <p className="text-gray-300 text-xl max-w-4xl mx-auto mt-10 leading-relaxed">
            ANNA-DTP unifies REC digital twins, synthetic telecom intelligence,
            scalable experimentation, AI-native orchestration, and autonomous
            optimization into a production-grade telecom intelligence ecosystem.
          </p>

        </div>

        {/* KPI CARDS */}

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-12 text-center">

            <h3 className="text-6xl font-black text-cyan-400 mb-6">
              10–100×
            </h3>

            <p className="text-white text-2xl font-semibold mb-4">
              Faster Simulation Runtime
            </p>

            <p className="text-gray-400 leading-relaxed">
              Accelerated large-scale telecom experimentation
              using REC distributed intelligence pipelines.
            </p>

          </div>

          <div className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-12 text-center">

            <h3 className="text-6xl font-black text-purple-400 mb-6">
              80%
            </h3>

            <p className="text-white text-2xl font-semibold mb-4">
              Lower Compute Overhead
            </p>

            <p className="text-gray-400 leading-relaxed">
              AI-assisted surrogate modelling enables
              scalable high-fidelity telecom intelligence.
            </p>

          </div>

          <div className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-12 text-center">

            <h3 className="text-6xl font-black text-cyan-400 mb-6">
              4.2PB
            </h3>

            <p className="text-white text-2xl font-semibold mb-4">
              Synthetic Telecom Data
            </p>

            <p className="text-gray-400 leading-relaxed">
              AI-ready telecom datasets engineered for
              scalable AI-native network intelligence.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}