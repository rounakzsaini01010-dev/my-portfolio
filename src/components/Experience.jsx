import React from 'react';
import { Calendar, MapPin, CheckCircle2, Sparkles, Award } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack & AI Project Lead',
    entity: 'Real-World Production Engineering',
    period: '2023 – Present',
    location: 'India & Remote',
    description: 'Spearheaded end-to-end engineering of KisanSetu agriculture platform, Flutter mobile applications, and Google Cloud AI prompt automation pipelines.',
    achievements: [
      'Engineered KisanSetu platform connecting farmers directly with wholesale buyers & predictive mandi prices',
      'Integrated on-device TensorFlow Lite computer vision models for crop grading',
      'Architected cross-platform Flutter mobile UI components with reactive Dart code'
    ],
    tech: ['React 19', 'Flutter', 'Dart', 'Node.js', 'Google Gen AI', 'MySQL']
  },
  {
    role: 'Enterprise ERP & Web Application Developer',
    entity: 'OmniCore ERP & E-Commerce Systems',
    period: '2022 – 2023',
    location: 'India',
    description: 'Designed and deployed Enterprise ERP management software, database-backed e-commerce web solutions, and 2D canvas browser games.',
    achievements: [
      'Built 60fps HTML5 Canvas game engines with Web Audio API sound synthesis',
      'Developed PHP Laravel backend REST APIs with relational MySQL database optimization',
      'Implemented responsive headless commerce checkout workflows'
    ],
    tech: ['JavaScript ES6', 'HTML5 Canvas', 'PHP', 'Laravel', 'MySQL', 'Tailwind CSS']
  },
  {
    role: 'Web3 & Smart Contract Engineer',
    entity: 'Smart Contract & dApp Engineering',
    period: '2023 – Present',
    location: 'India',
    description: 'Developed Ethereum smart contracts, ERC-721A batch NFT token standards, and Web3 frontend integrations.',
    achievements: [
      'Authored gas-optimized Solidity smart contracts unit-tested on Hardhat & testnets',
      'Built MetaMask wallet connect interfaces with real-time on-chain transaction listeners'
    ],
    tech: ['Solidity', 'Blockchain', 'Web3.js', 'React 19', 'Hardhat']
  }
];

const verifiedStats = [
  { label: 'Real Project Experience', value: '3+ Years' },
  { label: 'Verified Projects', value: '15+' },
  { label: 'Core Technologies', value: '12+' },
  { label: 'Code Quality Index', value: '100%' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050508] border-t border-amber-500/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 04. Practical Engineering Journey
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="gradient-text-gold">Milestones</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg font-normal">
            A chronological roadmap of hands-on project engineering, technical mastery, and system architecture.
          </p>
        </div>

        {/* Verified Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {verifiedStats.map((stat, idx) => (
            <div
              key={idx}
              className="gold-glass-card gold-glass-card-hover p-6 rounded-2xl flex flex-col items-center text-center group"
            >
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-amber-300 mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 font-mono font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="gold-glass-card gold-glass-card-hover rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-amber-500/15 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-amber-400 font-mono text-xs mt-1">
                    {item.entity}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Calendar className="w-3.5 h-3.5" /> {item.period}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> {item.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-5">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-amber-500/15">
                {item.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-[#14121c] text-amber-300/90 text-[11px] font-mono border border-amber-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
