import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING SPATIAL 3D RUNTIME...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 350);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 12) + 6;
        if (next > 25 && next < 55) {
          setStatusText('SYNCING GOOGLE CLOUD GEN AI ARCHITECTURES...');
        } else if (next >= 55 && next < 85) {
          setStatusText('LOADING KISANSETU AI & ENTERPRISE MOCKUPS...');
        } else if (next >= 85) {
          setStatusText('EXECUTIVE PORTFOLIO READY.');
        }

        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-[#050508] flex flex-col items-center justify-center p-6 select-none font-sans overflow-hidden">
      {/* Ambient Champagne Gold Glow Orbs */}
      <div className="absolute w-[36rem] h-[36rem] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none animate-gold-pulse" />
      <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-yellow-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Center Luxury Emblem */}
      <div className="relative mb-10 flex items-center justify-center">
        {/* Outer Counter-Rotating Ring */}
        <div
          className="w-32 h-32 rounded-full border border-amber-500/20 border-t-amber-400 border-r-yellow-200 animate-spin"
          style={{ animationDuration: '3s' }}
        />
        
        {/* Inner Counter-Rotating Ring */}
        <div
          className="absolute w-24 h-24 rounded-full border border-yellow-500/15 border-b-amber-300 border-l-yellow-400 animate-spin"
          style={{ animationDuration: '2s', animationDirection: 'reverse' }}
        />

        {/* Golden Monogram Emblem */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 p-[1.5px] shadow-lg shadow-amber-500/25">
            <div className="w-full h-full bg-[#08070c] rounded-[14px] flex items-center justify-center">
              <span className="font-heading font-extrabold text-xl text-amber-300 tracking-wider">
                RS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Percentage & Status Text */}
      <div className="text-center space-y-2.5 z-10">
        <div className="flex items-center justify-center gap-1">
          <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            {progress}
          </span>
          <span className="text-amber-400 font-heading font-bold text-2xl">%</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-[11px] tracking-widest uppercase">
          <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
          {statusText}
        </div>
      </div>

      {/* Elegant Hairline Liquid Gold Progress Bar */}
      <div className="w-64 sm:w-80 h-1.5 bg-[#121019] rounded-full overflow-hidden mt-8 border border-amber-500/20 p-[1px]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(245,158,11,0.6)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Bottom Verification Label */}
      <div className="absolute bottom-8 text-[11px] font-mono text-gray-500 tracking-widest uppercase flex items-center gap-2">
        <span>Rounak Saini</span>
        <span className="text-amber-500/60">•</span>
        <span>Google Cloud Gen AI Certified</span>
        <span className="text-amber-500/60">•</span>
        <span>MIET CSE</span>
      </div>
    </div>
  );
}
