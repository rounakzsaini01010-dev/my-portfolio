import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-amber-500/15 bg-[#040407] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-amber-500/15">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 p-[1.5px] shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-[#07060a] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-extrabold text-amber-300 text-sm tracking-wider">
                    RS
                  </span>
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight flex items-center gap-1.5">
                ROUNAK SAINI <Sparkles className="w-4 h-4 text-amber-400" />
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Full Stack Systems Architect, Generative AI & Flutter Mobile Engineer. 2nd-year B.Tech CS student at Meerut Institute of Engineering and Technology (MIET).
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home Viewport</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Rounak</a></li>
              <li><a href="#certifications" className="hover:text-amber-300 transition-colors">Google Cloud Certifications</a></li>
              <li><a href="#skills" className="hover:text-amber-300 transition-colors">Technical Capabilities</a></li>
              <li><a href="#projects" className="hover:text-amber-300 transition-colors">KisanSetu & Engineering Works</a></li>
              <li><a href="#experience" className="hover:text-amber-300 transition-colors">Milestones</a></li>
              <li><a href="#education" className="hover:text-amber-300 transition-colors">MIET CSE Education</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links & Back to top */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end justify-between">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider md:text-right">
                Verified Profiles
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/rounakzsaini01010-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl gold-glass-card text-gray-400 hover:text-amber-300 hover:border-amber-400 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rounak-saini-4b99ba41b/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl gold-glass-card text-gray-400 hover:text-amber-300 hover:border-amber-400 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:rounakzsaini01010@gmail.com"
                  className="p-2.5 rounded-xl gold-glass-card text-gray-400 hover:text-amber-300 hover:border-amber-400 transition-all"
                  aria-label="Email Address"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl gold-glass-card border border-amber-500/25 text-gray-300 hover:text-amber-300 hover:border-amber-400 transition-all flex items-center gap-2 text-xs font-mono font-semibold group"
            >
              Back to Top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Rounak Saini. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-400">
            Engineered with <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400 inline" /> for MIET CS Engineering
          </p>
        </div>

      </div>
    </footer>
  );
}
