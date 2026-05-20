import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Github } from '../components/Icons';

const projectsList = [
  {
    title: 'OmniChannel Analytics Hub',
    description: 'A high-throughput telemetry data processing pipeline utilizing Change Data Capture (CDC) to stream and analyze transactional updates in near real-time.',
    tags: ['Next.js', 'Apache Kafka', 'PostgreSQL', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/Nandithadaggupati/omnichannel-analytics-hub',
    demo: 'https://github.com/Nandithadaggupati/omnichannel-analytics-hub',
    color: 'from-indigo-500/10 to-indigo-500/5',
    borderColor: 'group-hover:border-indigo-500/30'
  },
  {
    title: 'VaporSync In-Memory Cache',
    description: 'A lightning-fast, reactive key-value caching layer implementing CQRS design principles to minimize database latency and decouple write operations.',
    tags: ['TypeScript', 'Node.js', 'Redis', 'Docker', 'Jest'],
    github: 'https://github.com/Nandithadaggupati/vaporsync-cache',
    demo: 'https://github.com/Nandithadaggupati/vaporsync-cache',
    color: 'from-cyan-500/10 to-cyan-500/5',
    borderColor: 'group-hover:border-cyan-500/30'
  },
  {
    title: 'Aetheria Web UI Kit',
    description: 'A fully accessible, keyboard-navigable glassmorphic component ecosystem designed to align with strict WCAG guidelines and premium design specs.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Storybook', 'Framer Motion'],
    github: 'https://github.com/Nandithadaggupati/aetheria-ui-kit',
    demo: 'https://github.com/Nandithadaggupati/aetheria-ui-kit',
    color: 'from-purple-500/10 to-purple-500/5',
    borderColor: 'group-hover:border-purple-500/30'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            A handpicked selection of technical projects showing system architecture, backend reliability, and modern frontend styling.
          </p>
          <div className="h-1 w-16 bg-indigo-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`group glass rounded-3xl border border-slate-900 overflow-hidden flex flex-col h-full bg-gradient-to-br ${project.color} ${project.borderColor} hover:shadow-2xl hover:shadow-indigo-600/5 transition-all duration-300`}
            >
              <div className="p-8 flex flex-col h-full space-y-6">
                
                {/* Icon & Title */}
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-900 w-fit text-slate-400 group-hover:text-indigo-400 transition-colors">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-950/60 border border-slate-900/60 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-900/60">
                  <a
                    href={project.github}
                    id={`project-github-${idx}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4.5 h-4.5" /> Source Code
                  </a>
                  <a
                    href={project.demo}
                    id={`project-demo-${idx}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
