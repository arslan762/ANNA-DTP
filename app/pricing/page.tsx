"use client";

import { motion } from "framer-motion";

import {
  GraduationCap,
  Building2,
  Cpu,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const plans = [
  {
    title: "Community",
    badge: "Free Access",
    icon: Sparkles,
    price: "Free",
    description:
      "Designed for students, learners, and early-stage telecom AI exploration.",
    button: "Start Free",
    features: [
      "Basic REC Digital Twins",
      "Limited Scenario Simulation",
      "Synthetic KPI Generation",
      "Community Support",
      "Small-Scale Experimentation",
      "Limited Runtime Access",
    ],
  },

  {
    title: "Academic",
    badge: "Universities & Labs",
    icon: GraduationCap,
    monthly: "£199",
    yearly: "£1,999/year",
    biyearly: "£3,499 / 2 years",
    description:
      "Built for universities, telecom AI labs, researchers, and academic experimentation.",
    button: "Start Academic Plan",
    featured: false,
    features: [
      "REC Digital Twin Engine",
      "Scenario Experimentation",
      "Synthetic Telecom Intelligence",
      "KPI/COP Ecosystems",
      "Propagation Modelling",
      "Research Collaboration Eligibility",
      "Academic Deployment Support",
    ],
  },

  {
    title: "Professional",
    badge: "Most Popular",
    icon: Building2,
    monthly: "£799",
    yearly: "£7,999/year",
    biyearly: "£14,999 / 2 years",
    description:
      "Designed for startups, telecom SMEs, innovation teams, and advanced AI workflows.",
    button: "Upgrade to Professional",
    featured: true,
    features: [
      "Distributed Simulation",
      "Advanced REC Digital Twins",
      "AI Optimization Workflows",
      "Synthetic Telecom Pipelines",
      "Cloud Deployment",
      "Advanced KPI Synchronization",
      "Priority Platform Access",
      "Advanced Experimentation Workloads",
    ],
  },

  {
    title: "Enterprise",
    badge: "Operators & Vendors",
    icon: ShieldCheck,
    yearly: "Starting at £24,000/year",
    description:
      "Enterprise-grade telecom intelligence infrastructure for operators and telecom vendors.",
    button: "Request Enterprise Access",
    features: [
      "AI-Native Orchestration",
      "Operational KPI Synchronization",
      "Open RAN Workflows",
      "Mobility & Propagation Modelling",
      "Enterprise Integration",
      "Multi-User Orchestration",
      "Enterprise Deployment Support",
      "Advanced Scalability",
    ],
  },

  {
    title: "Infrastructure",
    badge: "Hyperscale AI Infrastructure",
    icon: Cpu,
    custom: true,
    description:
      "Large-scale telecom intelligence infrastructure for autonomous AI-native ecosystems.",
    button: "Schedule Infrastructure Demo",
    features: [
      "Full AI-Native Orchestration Stack",
      "Distributed Telecom Intelligence",
      "Large-Scale Digital Twins",
      "Continuous Synchronization",
      "Hybrid Cloud Infrastructure",
      "Autonomous Optimization",
      "Programmable Telecom Intelligence",
      "Infrastructure-Scale Deployment",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* HERO */}

      <section className="relative py-24 md:py-32 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 text-center">

          <p className="uppercase tracking-[0.25em] md:tracking-[0.3em] text-cyan-400 mb-6 md:mb-8 text-xs sm:text-sm">
            Pricing & Deployment
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-black leading-[1] max-w-[1100px] mx-auto">

            AI-Native

            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Telecom Intelligence Pricing
            </span>

          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-8 md:mt-10 max-w-4xl mx-auto">
            Flexible subscription and infrastructure licensing
            designed for researchers, enterprises, telecom operators,
            and future AI-native programmable telecom ecosystems.
          </p>

        </div>

      </section>

      {/* PRICING */}

      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

            {plans.map((plan, i) => {
              const Icon = plan.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className={`relative rounded-[28px] md:rounded-[40px] p-6 md:p-10 border overflow-hidden flex flex-col ${
                    plan.featured
                      ? "border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >

                  {plan.featured && (
                    <div className="absolute top-0 right-0 px-4 md:px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-[10px] md:text-sm font-semibold rounded-bl-2xl">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-cyan-500/10 flex items-center justify-center mb-6 md:mb-8">

                    <Icon
                      size={36}
                      className="text-cyan-400 md:w-[42px] md:h-[42px]"
                    />

                  </div>

                  <div className="inline-block px-4 md:px-5 py-2 rounded-full border border-cyan-400/20 text-cyan-400 text-[10px] md:text-sm tracking-widest uppercase mb-5 md:mb-6">

                    {plan.badge}

                  </div>

                  <h2 className="text-3xl md:text-4xl font-black mb-5 md:mb-6 leading-tight">
                    {plan.title}
                  </h2>

                  {!plan.custom ? (
                    <div className="mb-6 md:mb-8">

                      {plan.monthly && (
                        <h3 className="text-4xl sm:text-5xl font-black leading-tight">
                          {plan.monthly}

                          <span className="block sm:inline text-base md:text-lg text-gray-400 font-medium sm:ml-2">
                            /month
                          </span>

                        </h3>
                      )}

                      {!plan.monthly && plan.yearly && (
                        <h3 className="text-3xl md:text-4xl font-black leading-tight">
                          {plan.yearly}
                        </h3>
                      )}

                      {plan.yearly && plan.monthly && (
                        <p className="text-gray-400 mt-3 text-sm md:text-base">
                          {plan.yearly}
                        </p>
                      )}

                      {plan.biyearly && (
                        <p className="text-gray-500 mt-1 text-sm md:text-base">
                          {plan.biyearly}
                        </p>
                      )}

                    </div>
                  ) : (
                    <div className="mb-6 md:mb-8">

                      <h3 className="text-3xl md:text-4xl font-black leading-tight">

                        Custom

                        <span className="block text-cyan-400 mt-2">
                          Infrastructure Licensing
                        </span>

                      </h3>

                    </div>
                  )}

                  <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-sm sm:text-base">
                    {plan.description}
                  </p>

                  <div className="space-y-4 flex-1">

                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 md:gap-4"
                      >

                        <CheckCircle2
                          size={20}
                          className="text-cyan-400 mt-1 flex-shrink-0"
                        />

                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {feature}
                        </p>

                      </div>
                    ))}

                  </div>

                  <button
                    onClick={() => {
                      window.location.href = "/contact";
                    }}
                    className="mt-8 md:mt-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold text-base md:text-lg hover:scale-[1.02] transition duration-300"
                  >

                    {plan.button}

                  </button>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
}