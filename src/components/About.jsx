import React from 'react';
import { Sparkles, ShieldCheck, Cpu, Smartphone, Server, Code, CheckCircle2, Award } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'JavaScript & Algorithmic Problem Solving',
    icon: <Code className="w-5 h-5 text-amber-400" />,
    badge: 'HackerRank Intermediate Certified',
    desc: 'Demonstrated mastery in asynchronous workflows, functional design patterns, DOM manipulation, and core algorithmic data structures.'
  },
  {
    num: '02',
    title: 'Generative AI & Cloud Data Analytics',
    icon: <Cpu className="w-5 h-5 text-amber-400" />,
    badge: 'Google Cloud & Microsoft Certified',
    desc: 'Verified skills from Google Cloud Skills Boost (Beyond the Chatbot) and Tata / Microsoft GenAI Job Simulation.'
  },
  {
    num: '03',
    title: 'Cross-Platform Mobile (Flutter & Dart)',
    icon: <Smartphone className="w-5 h-5 text-amber-400" />,
    badge: 'KisanSetu Mobile Lead',
    desc: 'Architecting 60fps native iOS & Android applications with offline-first caching, camera AI integration, and clean BLoC architecture.'
  },
  {
    num: '04',
    title: 'Full-Stack Web & Relational RDBMS',
    icon: <Server className="w-5 h-5 text-amber-400" />,
    badge: 'React, Laravel & MySQL',
    desc: 'Engineering high-throughput backends with PHP/Laravel, normalized MySQL schemas, RESTful APIs, and responsive React web frontends.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050508] border-t border-amber-500/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 01. Engineering Vision & Profile
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Building Real-World Systems with <span className="gradient-text-gold">Code, AI & Problem Solving.</span>
          </h2>
        </div>

        {/* 2-Column Split: Portrait Left, Vision & Pillars Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Photo with Gold Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-amber-500/30 bg-[#0c0b11] shadow-2xl shadow-black/80 group">
              <img
                src="/rounak.jpg"
                alt="Rounak Saini"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-85" />
              
              {/* Bottom Badge Tag */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="gold-glass-card px-4 py-3 rounded-2xl flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-heading font-bold text-white">
                      Rounak Saini
                    </span>
                    <span className="text-[11px] text-amber-400 font-mono">
                      2nd Year B.Tech CSE @ MIET Meerut
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Domain Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
                I am <strong className="text-amber-300 font-semibold font-mono">Rounak Saini</strong>, a second-year B.Tech Computer Science Engineering student at <strong className="text-white">Meerut Institute of Engineering and Technology (MIET)</strong>, Meerut, Uttar Pradesh, India.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                With 3+ years of real project engineering experience, I specialize in JavaScript (HackerRank Intermediate Certified), Flutter mobile application development, full-stack Laravel & React platforms, and relational database systems. Whether architecting <strong className="text-amber-300 font-semibold">KisanSetu AI</strong> to empower agricultural supply chains in Flutter, building enterprise <strong className="text-white font-semibold">OmniCore ERP</strong> systems in PHP/MySQL, or deploying Solidity smart contracts, every system is designed for measurable performance.
              </p>
            </div>

            {/* 4 Executive Domain Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="gold-glass-card gold-glass-card-hover rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/25">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-white text-base mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
