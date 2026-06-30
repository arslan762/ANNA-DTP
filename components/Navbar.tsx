"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (

    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}

        <Link href="/" className="group">

          <h1 className="text-3xl font-black text-white tracking-tight">

            ANNA-DTP

          </h1>

          <p className="text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition">

            Powered by VORTEX Engine

          </p>

        </Link>

        {/* NAVIGATION */}

        <nav className="flex items-center gap-8">

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

      </div>

    </header>
  );
}