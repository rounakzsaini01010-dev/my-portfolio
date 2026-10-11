import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Eye, X, Sparkles } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    badge: 'HackerRank Verified Skill',
    date: 'Issued Oct 2026',
    credentialId: '7A7BE1DBB060',
    description: 'Successfully earned the HackerRank JavaScript (Intermediate) certification, demonstrating proficiency in JavaScript programming concepts, asynchronous workflows, closures, and algorithmic problem-solving skills.',
    skills: ['JavaScript (ES6+)', 'Problem Solving', 'Data Structures', 'Async Programming'],
    credentialUrl: 'https://www.hackerrank.com/certificates/7a7be1dbb060'
  },
  {
    id: 2,
    title: 'Gen AI: Beyond the Chatbot',
    issuer: 'Google Cloud Skills Boost',
    badge: 'Official Google Cloud Badge',
    date: 'Issued Sep 2026',
    credentialId: '28124112',
    description: 'Official Google Cloud Skills Boost certification exploring enterprise Generative AI architectures, prompt design techniques, foundational models, and cloud-native AI integration.',
    skills: ['Generative AI', 'Prompt Engineering', 'Google Cloud', 'Foundational Models'],
    credentialUrl: 'https://www.skills.google/public_profiles/a2033e6b-9518-49be-a804-e54f83580b4f/badges/28124112'
  },
  {
    id: 3,
    title: 'Tata - GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata & Microsoft (Forage)',
    badge: 'Job Simulation Credential',
    date: 'Issued Sep 2026',
    credentialId: '6aaac904d9b5474253733102',
    description: 'Completed simulated practical work in GenAI-powered data analytics, enterprise intelligence modeling, predictive business metrics, and executive data storytelling.',
    skills: ['Data Analytics', 'GenAI Applications', 'Business Metrics', 'Data Visualization'],
    credentialUrl: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6aaac867d9b5474253730d97_1789578138475_completion_certificate.pdf'
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 bg-[#07060a] border-t border-amber-500/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> LinkedIn Verified Licenses & Certifications
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Official <span className="gradient-text-gold">Licenses & Certifications</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            Verified credentials from HackerRank, Google Cloud, and Tata / Microsoft with verifiable credential IDs.
          </p>
        </div>

        {/* 3 Real Certificates in Champagne Gold Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="gold-glass-card gold-glass-card-hover rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

              <div>
                {/* Issuer Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-4 border-b border-amber-500/15 pb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> {cert.issuer}
                  </span>
                  <span className="text-[11px] text-gray-400 font-mono">
                    {cert.date}
                  </span>
                </div>

                {/* Badge & Title */}
                <div className="mb-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-extrabold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-2">
                    {cert.badge}
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-amber-300 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {cert.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#13111b] border border-amber-500/20 text-amber-300/90 text-[11px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Credential Inspection */}
              <div className="pt-4 border-t border-amber-500/15 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] truncate max-w-[130px]">{cert.credentialId}</span>
                </div>
                
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 transition-all flex items-center gap-1.5 text-[11px] font-semibold"
                >
                  Show Credential <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Credential Inspection Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl gold-glass-card p-8 sm:p-10 rounded-3xl border border-amber-400/40 shadow-2xl space-y-6">
            
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#121019] border border-amber-500/30 text-gray-400 hover:text-white hover:border-amber-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 font-extrabold text-xl shadow-lg shadow-amber-500/30">
                <ShieldCheck className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold tracking-widest uppercase">Verified LinkedIn Credential</span>
                <h3 className="font-heading font-extrabold text-2xl text-white">{selectedCert.title}</h3>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f0e15] border border-amber-500/20 space-y-2 text-xs font-mono">
              <p><span className="text-gray-400">Issuer:</span> <span className="text-white font-bold">{selectedCert.issuer}</span></p>
              <p><span className="text-gray-400">Credential ID:</span> <span className="text-amber-300 font-bold">{selectedCert.credentialId}</span></p>
              <p><span className="text-gray-400">Issue Date:</span> <span className="text-amber-400 font-bold">{selectedCert.date}</span></p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              {selectedCert.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedCert.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                  {skill}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between font-mono">
              <span className="text-xs text-gray-400">Verified via LinkedIn Profile</span>
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
              >
                Show Credential <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
