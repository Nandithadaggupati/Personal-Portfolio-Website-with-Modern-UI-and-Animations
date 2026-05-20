import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative gradient glowing ball */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/10 glow-sphere rounded-full translate-x-1/3 translate-y-1/3" />
      
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
            Let's Collaborate
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Have a project in mind, a job opportunity, or just want to chat about system design? Shoot me a message.
          </p>
          <div className="h-1 w-16 bg-indigo-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Details Column (left) */}
          <motion.div
            className="lg:col-span-5 space-y-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Connection Points
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Feel free to email me directly or explore my repository files and professional network. I try to respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Direct Mailto */}
              <a
                href="mailto:nandinisen.dev@gmail.com"
                id="contact-email-link"
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-slate-900 hover:border-slate-800 hover:bg-slate-900/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-slate-500">Email Address</h4>
                  <p className="text-slate-300 text-sm font-medium mt-0.5">nandinisen.dev@gmail.com</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Nandithadaggupati"
                id="contact-github-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-slate-900 hover:border-slate-800 hover:bg-slate-900/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 text-slate-400 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-slate-500">GitHub Profile</h4>
                  <p className="text-slate-300 text-sm font-medium mt-0.5">github.com/Nandithadaggupati</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/nandithadaggupati"
                id="contact-linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-slate-900 hover:border-slate-800 hover:bg-slate-900/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 text-slate-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-slate-500">LinkedIn Network</h4>
                  <p className="text-slate-300 text-sm font-medium mt-0.5">linkedin.com/in/nandithadaggupati</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form Column (right) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass p-8 sm:p-10 rounded-3xl border border-slate-900">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        required
                        placeholder="e.g. John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-950 border border-slate-900 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-950 border border-slate-900 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="form-message" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Message Content
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows="5"
                        placeholder="Tell me about your project..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-slate-950 border border-slate-900 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      id="form-submit-btn"
                      className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all group"
                    >
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
                    <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                    <p className="text-slate-400 max-w-xs leading-relaxed text-sm">
                      Thank you for reaching out. I have received your message and will reply shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
