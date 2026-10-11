import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

const coursework = [
  'Data Structures & Algorithms (DSA)',
  'Object-Oriented Programming (C, Python, JS)',
  'Database Management Systems (MySQL RDBMS)',
  'Operating Systems & Systems Architecture',
  'Web & Cross-Platform Mobile Software Engineering',
  'Generative AI, LLMs & Machine Learning Concepts'
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#07060a] border-t border-amber-500/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> 05. Academic Foundation
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Academic <span className="gradient-text-gold">Education</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Engineering foundation and B.Tech Computer Science Engineering degree coursework at MIET Meerut.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="gold-glass-card gold-glass-card-hover p-8 sm:p-12 rounded-3xl relative overflow-hidden group">
            
            {/* Background Watermark Icon */}
            <div className="absolute top-0 right-0 p-8 text-amber-500/5 pointer-events-none">
              <GraduationCap className="w-48 h-48" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-amber-500/15">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-mono font-bold border border-amber-500/30 mb-3">
                  <Calendar className="w-3.5 h-3.5" /> 2025 – 2029 • Currently 2nd Year B.Tech Student
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                  Bachelor of Technology (B.Tech)
                </h3>
                <h4 className="text-lg font-mono font-bold text-amber-400 mt-1">
                  Computer Science Engineering (CSE)
                </h4>
              </div>

              <div className="text-left md:text-right space-y-1">
                <p className="font-bold text-white text-base">
                  Meerut Institute of Engineering and Technology (MIET)
                </p>
                <p className="text-xs text-gray-400 flex items-center md:justify-end gap-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Meerut, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Coursework & Focus Areas */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-amber-400" />
                Core Engineering Coursework & Algorithms
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300 font-mono">
                {coursework.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
