import { motion } from 'framer-motion';
import { Code, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'text-indigo-400',
    skills: ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5 & CSS3']
  },
  {
    title: 'Backend & Databases',
    icon: Database,
    color: 'text-cyan-400',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'RESTful APIs', 'GraphQL']
  },
  {
    title: 'DevOps & Tooling',
    icon: Wrench,
    color: 'text-purple-400',
    skills: ['Git & GitHub', 'Docker', 'Vercel & Netlify', 'CI/CD Pipelines', 'AWS (S3/EC2)', 'Linux CLI', 'Jest & Testing']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 glow-sphere rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            A breakdown of languages, frameworks, and workflows that I utilize to bring digital designs to life.
          </p>
          <div className="h-1 w-16 bg-cyan-500 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skill Category Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass p-8 rounded-3xl border border-slate-900 flex flex-col h-full hover:border-slate-800 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 group"
              >
                {/* Header block */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-slate-900 border border-slate-800 ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List Badges */}
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-950/80 border border-slate-900 text-slate-300 hover:text-white hover:border-slate-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
