import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
            <Terminal className="w-4 h-4 text-indigo-400" />
          </div>
          <span className="font-display text-sm font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            DevPortfolio
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <a href="#home" id="footer-link-home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" id="footer-link-about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" id="footer-link-skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" id="footer-link-projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" id="footer-link-contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-xs text-center md:text-right">
          &copy; {currentYear} Nanditha. All rights reserved. Made with React & Framer Motion.
        </p>

      </div>
    </footer>
  );
}
