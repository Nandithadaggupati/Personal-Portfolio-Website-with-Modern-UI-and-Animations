import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function Hero() {
  const { scrollY } = useScroll();

  // GPU-accelerated parallax motion transformations
  const yBgSphere1 = useTransform(scrollY, [0, 800], [0, 250]);
  const yBgSphere2 = useTransform(scrollY, [0, 800], [0, -100]);
  const yContent = useTransform(scrollY, [0, 800], [0, -50]);
  const opacityContent = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 grid-bg"
    >
      {/* Parallax Background Glowing Spheres */}
      <motion.div
        style={{ y: yBgSphere1 }}
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-600 glow-sphere"
      />
      <motion.div
        style={{ y: yBgSphere2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-600 glow-sphere"
      />

      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Available for hire badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-8 uppercase tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Available for New Opportunities
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none">
          Crafting{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Digital
          </span>{' '}
          Masterpieces
        </h1>

        {/* Bio summary */}
        <p className="text-slate-400 text-lg sm:text-xl md:text-2xl max-w-2xl font-light mb-10 leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">Nanditha</span>. I design and build high-performance, visually stunning web applications with modern interfaces and smooth animations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <a
            href="#projects"
            id="hero-cta-projects"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-300 group"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            id="hero-cta-contact"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium border border-slate-800 hover:border-slate-700 flex items-center justify-center gap-2 transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Quick Socials */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Nandithadaggupati"
            id="hero-social-github"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/nandithadaggupati"
            id="hero-social-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:nandinisen.dev@gmail.com"
            id="hero-social-email"
            className="p-3 rounded-xl bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-colors"
            aria-label="Email Address"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}
