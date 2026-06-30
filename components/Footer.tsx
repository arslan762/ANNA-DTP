"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 bg-[#020617] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-20">

        {/* TOP SECTION */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}

          <div>

            <h3 className="text-3xl md:text-4xl font-black text-white">
              ANNA-DTP
            </h3>

            <p className="text-cyan-400 mt-2 text-sm md:text-base font-medium">
              Powered by REC Engine
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed text-sm sm:text-base">
              AI-native network automation and REC digital twin
              infrastructure for future telecom ecosystems,
              scalable experimentation, and autonomous orchestration.
            </p>

          </div>

          {/* PLATFORM */}

          <div>

            <h4 className="font-bold mb-5 text-lg">
              Platform
            </h4>

            <ul className="space-y-4 text-gray-400 text-sm sm:text-base">

              <li>
                <Link
                  href="/platform"
                  className="hover:text-cyan-400 transition"
                >
                  REC Digital Twins
                </Link>
              </li>

              <li>
                <Link
                  href="/technology"
                  className="hover:text-cyan-400 transition"
                >
                  AI Optimization
                </Link>
              </li>

              <li>
                <Link
                  href="/solutions"
                  className="hover:text-cyan-400 transition"
                >
                  Synthetic Telecom Intelligence
                </Link>
              </li>

            </ul>

          </div>

          {/* RESOURCES */}

          <div>

            <h4 className="font-bold mb-5 text-lg">
              Resources
            </h4>

            <ul className="space-y-4 text-gray-400 text-sm sm:text-base">

              <li>
                <Link
                  href="/research"
                  className="hover:text-cyan-400 transition"
                >
                  Research
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="hover:text-cyan-400 transition"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition"
                >
                  Enterprise Access
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h4 className="font-bold mb-5 text-lg">
              Contact
            </h4>

            <div className="space-y-4 text-gray-400 text-sm sm:text-base">

              <p>
                enterprise@anna-dtp.ai
              </p>

              <p>
                AI-Native Telecom Infrastructure
              </p>

              <p>
                Future 5G / 6G Ecosystems
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM SECTION */}

        <div className="mt-14 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 ANNA-DTP. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center md:text-right">
            AI-Native Network Automation & Digital Twin Platform
          </p>

        </div>

      </div>

    </footer>
  );
}