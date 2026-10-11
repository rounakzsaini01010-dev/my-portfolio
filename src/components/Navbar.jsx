import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'gold-nav-bar py-3.5 shadow-2xl shadow-black/60' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Executive Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group font-sans">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 p-[1.5px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#07060a] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-amber-300 text-sm tracking-wider">
                  RS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg text-white tracking-tight flex items-center gap-1.5">
                ROUNAK SAINI
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </span>
              <span className="text-[10px] text-amber-400/90 font-mono tracking-wider uppercase">
                Full-Stack & AI Systems Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0c0b11]/80 px-3.5 py-1.5 rounded-full border border-amber-500/15 backdrop-blur-md shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* LinkedIn Verified CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/rounak-saini-4b99ba41b/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 hover:from-amber-400 hover:to-yellow-200 text-slate-950 font-heading font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              Connect on LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-[#0e0d14] border border-amber-500/20 text-gray-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5 text-amber-400" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl gold-glass-card flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-300 hover:text-amber-300 hover:bg-amber-500/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-amber-500/15">
              <a
                href="https://www.linkedin.com/in/rounak-saini-4b99ba41b/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-center text-xs shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
