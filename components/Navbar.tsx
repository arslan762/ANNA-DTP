"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Platform", path: "/platform" },
  { name: "Technology", path: "/technology" },
  { name: "Solutions", path: "/solutions" },
  { name: "Research", path: "/research" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 md:py-5 flex items-center justify-between">

        {/* LOGO */}

        <Link
          href="/"
          className="group relative z-50"
          onClick={() => setMenuOpen(false)}
        >

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">

            ANNA-DTP

          </h1>

          <p className="text-cyan-400 text-xs sm:text-sm font-medium group-hover:text-cyan-300 transition">

            Powered by REC Engine

          </p>

        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => {

            const isActive = pathname === link.path;

            return (

              <Link
                key={link.name}
                href={link.path}
                className={`relative text-lg font-medium transition-all duration-300
                  
                  ${
                    isActive
                      ? "text-cyan-400"
                      : "text-white/80 hover:text-white"
                  }
                `}
              >

                {link.name}

                {/* ACTIVE INDICATOR */}

                {isActive && (
                  <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
                )}

              </Link>

            );
          })}

        </nav>

        {/* MOBILE MENU BUTTON */}

        <button
          className="lg:hidden relative z-50 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >

          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}

        </button>

      </div>

      {/* MOBILE OVERLAY */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 z-40
      
          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* MOBILE MENU */}

      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-[82%] max-w-[340px] bg-[#020617]/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-300 z-40
      
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* MENU CONTENT */}

        <div className="flex flex-col pt-28 px-8 gap-8">

          {navLinks.map((link) => {

            const isActive = pathname === link.path;

            return (

              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold transition-all duration-300 border-b border-white/5 pb-4
                
                  ${
                    isActive
                      ? "text-cyan-400"
                      : "text-white/80 hover:text-white"
                  }
                `}
              >

                {link.name}

              </Link>

            );
          })}

        </div>

        {/* BOTTOM SECTION */}

        <div className="absolute bottom-10 left-8 right-8">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

            <p className="text-cyan-400 text-sm font-semibold mb-2">
              ANNA-DTP
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              AI-Native Network Automation &
              REC Digital Twin Platform
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}