import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Sparkles, Clock, Globe, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web & AI App',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Luxury Champagne Gold Confetti
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#fbbf24', '#fef08a', '#ffffff', '#d97706']
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-[#050508] border-t border-amber-500/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-400" /> 06. Executive Communications
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Engineer <span className="gradient-text-gold">Something Extraordinary.</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg font-normal">
            Open to software engineering roles, full-stack web platforms, Flutter mobile apps, and Generative AI workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="gold-glass-card p-8 rounded-3xl space-y-6">
              <h3 className="font-heading text-2xl font-bold text-white">
                Contact & Verification
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-normal">
                Reach out to Rounak Saini directly via LinkedIn, GitHub, or email for technical discussions, hiring opportunities, and project inquiries.
              </p>

              <div className="space-y-3.5 pt-2 font-mono text-xs">
                <a
                  href="mailto:rounakzsaini01010@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0f0e15] border border-amber-500/20 hover:border-amber-400 hover:bg-[#161420] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block">Direct Email</span>
                    <span className="text-white font-bold group-hover:text-amber-300 transition-colors">
                      rounakzsaini01010@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/rounak-saini-4b99ba41b/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0f0e15] border border-amber-500/20 hover:border-amber-400 hover:bg-[#161420] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block">LinkedIn Profile</span>
                    <span className="text-white font-bold group-hover:text-amber-300 transition-colors">
                      rounak-saini-4b99ba41b
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/rounakzsaini01010-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0f0e15] border border-amber-500/20 hover:border-amber-400 hover:bg-[#161420] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block">GitHub Organization</span>
                    <span className="text-white font-bold group-hover:text-amber-300 transition-colors">
                      rounakzsaini01010-dev
                    </span>
                  </div>
                </a>
              </div>

              {/* Status Banner */}
              <div className="pt-3 border-t border-amber-500/15 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  Available for Opportunities
                </span>
                <span>IST (GMT+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="gold-glass-card p-8 sm:p-10 rounded-3xl relative">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/25">
                    <CheckCircle2 className="w-8 h-8 text-slate-950" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-gray-300 text-sm max-w-md">
                    Thank you for reaching out. Rounak will review your inquiry and get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', service: 'Full-Stack Web & AI App', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs hover:bg-amber-500/25 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-amber-300/90 mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0e15] border border-amber-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-amber-300/90 mb-2 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0f0e15] border border-amber-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-amber-300/90 mb-2 uppercase tracking-wider">
                      Area of Collaboration
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0e15] border border-amber-500/20 text-white focus:outline-none focus:border-amber-400 text-sm transition-colors"
                    >
                      <option value="Full-Stack Web & AI App">Full-Stack Web & AI Engineering</option>
                      <option value="Flutter Mobile App">Cross-Platform Flutter Mobile App</option>
                      <option value="Google Gen AI Solutions">Generative AI & LLM Automation</option>
                      <option value="Enterprise ERP Systems">OmniCore Enterprise ERP Architecture</option>
                      <option value="Software Engineer Hiring">Software Developer Role / Internship</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-amber-300/90 mb-2 uppercase tracking-wider">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your goals, requirements, or role details..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0e15] border border-amber-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 hover:from-amber-400 hover:to-yellow-200 text-slate-950 font-heading font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <>
                        Send Message Directly <Send className="w-4 h-4 text-slate-950" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
