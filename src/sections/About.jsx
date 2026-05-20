import { motion } from 'framer-motion';
import { Sparkles, Code, GraduationCap, Laptop } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-16 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Vector Graphic Panel (left) */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80">
              {/* Spinning/glowing border outline */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-30 group-hover:opacity-75 blur transition duration-1000 group-hover:duration-200" />
              
              {/* Card Container */}
              <div className="relative w-full h-full rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 200 200"
                  className="w-48 h-48 text-indigo-400/80 drop-shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="80" r="32" stroke="currentColor" strokeWidth="6" />
                  <path
                    d="M50 160C50 135 70 120 100 120C130 120 150 135 150 160"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <circle cx="45" cy="80" r="4" fill="currentColor" className="animate-ping" />
                  <path
                    d="M20 20 L40 40 M180 20 L160 40 M20 180 L40 160 M180 180 L160 160"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
                
                {/* Floating tags */}
                <div className="absolute bottom-4 left-4 glass px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs text-indigo-300 font-semibold border border-indigo-500/20">
                  <Laptop className="w-3.5 h-3.5" /> Data & AI Engineer
                </div>
              </div>
            </div>
          </motion.div>
 
          {/* Biography & Details (right) */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-400" />
              Bridging Code, Data & Intelligence
            </h3>
            
            {/* Bio text (3-5 sentences) */}
            <p className="text-slate-300 text-lg leading-relaxed">
              I am a passionate software developer specializing in building data-driven systems that combine clean code with analytics and intuitive visual insights. With a deep foundation in data engineering, artificial intelligence, and machine learning, I love solving complex computational challenges and translating large datasets into interactive projects.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Currently, I'm focusing on building scalable data pipelines, training ML models, and optimizing database performance. When I'm not writing code, I enjoy designing analytics dashboards, exploring new neural network architectures, and contributing to open-source AI developer tools.
            </p>
 
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass p-5 rounded-2xl border border-slate-900 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Experience</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Data Analytics & Data Engineering</p>
                </div>
              </div>
              
              <div className="glass p-5 rounded-2xl border border-slate-900 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Education</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Artificial Intelligence & Machine Learning</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
