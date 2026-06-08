import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#e040fb]" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#e040fb] blur-md opacity-60" />
            </div>
            <span className="text-xl font-bold text-white">integrate</span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#services" className="text-white/50 hover:text-white transition-colors text-sm">
              Services
            </a>
            <a href="#about" className="text-white/50 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#mission" className="text-white/50 hover:text-white transition-colors text-sm">
              Mission
            </a>
            <a href="#contact" className="text-white/50 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-white/30 text-sm">
            © 2026 integrate. All rights reserved.
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-12 text-center">
          <p className="text-white/20 text-sm">
            AI Agent First • Human Assisted • Proudly Midlands
          </p>
        </div>
      </div>
    </footer>
  );
}
