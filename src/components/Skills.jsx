import React, { useState } from 'react';
import { Terminal, Code, Smartphone, Server, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Languages & DSA' },
  { id: 'mobile_frontend', label: 'Mobile & Frontend' },
  { id: 'backend', label: 'Backend & Database' },
  { id: 'web3', label: 'Smart Contracts' },
];

const skillsData = [
  // Core Languages & DSA
  { name: 'JavaScript (ES6+)', category: 'languages', codeTag: 'app.js', level: 95, icon: '📜', desc: 'HackerRank Intermediate Certified. Asynchronous programming, event loops, DOM APIs, and algorithmic problem-solving.', status: 'HackerRank Certified' },
  { name: 'C Language', category: 'languages', codeTag: 'main.c', level: 90, icon: '⚡', desc: 'Low-level memory management, pointers, array allocations, and algorithmic logic.', status: 'Core Engineering' },
  { name: 'Python', category: 'languages', codeTag: 'script.py', level: 92, icon: '🐍', desc: 'Automation pipelines, data manipulation, algorithm implementations, and backend scripting.', status: 'Core Language' },
  { name: 'Data Structures & Algorithms', category: 'languages', codeTag: 'dsa.cpp', level: 88, icon: '🧩', desc: 'Binary trees, graph traversals, stacks, queues, hash maps, and time-space complexity optimization.', status: 'MIET Coursework' },

  // Mobile & Frontend
  { name: 'Flutter Framework', category: 'mobile_frontend', codeTag: 'main.dart', level: 93, icon: '📱', desc: 'Cross-platform native iOS & Android applications, custom widgets, 60fps fluid UI loops.', status: 'KisanSetu Mobile' },
  { name: 'Dart Language', category: 'mobile_frontend', codeTag: 'models.dart', level: 91, icon: '🎯', desc: 'Strong typing, asynchronous streams, reactive state management (Provider/BLoC).', status: 'Mobile Core' },
  { name: 'React JS', category: 'mobile_frontend', codeTag: 'Component.jsx', level: 94, icon: '⚛️', desc: 'Hooks, virtual DOM reconciliation, state management, SPA architecture.', status: 'Frontend Core' },
  { name: 'HTML5 & CSS3', category: 'mobile_frontend', codeTag: 'index.html', level: 96, icon: '🌐', desc: 'Accessible semantic markup, responsive grid and flexbox layouts, custom keyframe transitions.', status: 'Web Standards' },

  // Backend & Database
  { name: 'PHP', category: 'backend', codeTag: 'server.php', level: 88, icon: '🐘', desc: 'Object-oriented server scripting, RESTful route handlers, secure session management.', status: 'Backend API' },
  { name: 'Laravel Framework', category: 'backend', codeTag: 'artisan.php', level: 86, icon: '🔥', desc: 'MVC architecture, Eloquent ORM, database migrations, middleware authentication.', status: 'Enterprise Web' },
  { name: 'MySQL Relational Database', category: 'backend', codeTag: 'schema.sql', level: 90, icon: '🐬', desc: 'Relational table indexing, complex SQL join queries, database optimization.', status: 'RDBMS Master' },

  // Smart Contracts & Web3
  { name: 'Solidity Smart Contracts', category: 'web3', codeTag: 'Contract.sol', level: 86, icon: '⛓️', desc: 'Ethereum smart contracts, Hardhat unit testing, ERC-721 NFT minting protocols.', status: 'Web3 Protocol' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-[#07060a] border-t border-amber-500/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 03. Technical Capabilities Matrix
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Languages & <span className="gradient-text-gold">Core Technologies</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg font-normal">
            Verified expertise in JavaScript (HackerRank Intermediate Certified), Flutter, React, PHP/Laravel, C, Python, and MySQL.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wide uppercase transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                  : 'gold-glass-card text-gray-400 hover:text-white hover:border-amber-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="gold-glass-card gold-glass-card-hover p-6 sm:p-7 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Code Tag Header */}
                <div className="flex items-center justify-between gap-2 mb-4 border-b border-amber-500/15 pb-3">
                  <span className="font-mono text-xs text-amber-300 font-bold flex items-center gap-1.5">
                    <span className="text-gray-500">&gt;</span> {skill.codeTag}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {skill.status}
                  </span>
                </div>

                {/* Skill Title & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-white/5 border border-amber-500/20 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <h3 className="font-heading font-extrabold text-white text-lg group-hover:text-amber-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed mb-5 font-normal">
                  {skill.desc}
                </p>

                {/* Champagne Gold Progress Bar */}
                <div className="w-full h-1.5 bg-[#121019] rounded-full overflow-hidden p-[1px] border border-amber-500/20">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Card Footer Status */}
              <div className="mt-5 pt-3 border-t border-amber-500/15 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1 text-amber-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Verified
                </span>
                <span className="text-amber-300/80 uppercase">{skill.category}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
