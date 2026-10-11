import React from 'react';
import { X, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto gold-glass-card rounded-3xl p-6 sm:p-9 shadow-2xl border border-amber-500/30">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-[#121019] border border-amber-500/25 text-gray-400 hover:text-white hover:border-amber-400 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-mono font-bold mb-3 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" /> {project.badgeTag || project.category}
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-2 font-normal">
            {project.description}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-6 border border-amber-500/20 group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09080e] via-transparent to-transparent opacity-60" />
        </div>

        {/* Quantitative Metrics Row */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 p-5 rounded-2xl bg-[#0e0d14] border border-amber-500/20 mb-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-heading">
                  {m.value}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Details & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-lg font-bold text-white font-heading">Project Architecture & Overview</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.fullDescription || project.description}
            </p>

            <h3 className="text-lg font-bold text-white font-heading pt-2">Key Highlights & Modules</h3>
            <ul className="space-y-2.5">
              {project.features?.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 rounded-2xl bg-[#0e0d14] border border-amber-500/20 space-y-4">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                Tech Stack Used
              </h4>
              <div className="text-xs text-gray-300 font-mono leading-relaxed">
                {project.stack}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <ExternalLink className="w-4 h-4" /> Launch Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-5 rounded-xl gold-glass-card text-gray-200 font-semibold text-sm border border-amber-500/30 flex items-center justify-center gap-2 hover:bg-[#151320] hover:border-amber-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-amber-400" /> GitHub Repository
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
