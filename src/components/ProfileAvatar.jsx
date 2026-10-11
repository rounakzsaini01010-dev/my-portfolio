import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function ProfileAvatar({ src = "/rounak.jpg", name = "Rounak Saini", className = "w-32 h-32 sm:w-40 sm:h-40" }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative rounded-3xl p-[2px] bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 shadow-2xl shadow-amber-500/20 group ${className}`}>
      {/* Outer Glow Ring */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500 to-yellow-300 blur-md opacity-40 group-hover:opacity-80 transition-opacity" />

      {/* Avatar Container */}
      <div className="relative w-full h-full rounded-[22px] bg-[#0c0b11] overflow-hidden flex items-center justify-center border border-amber-500/20">
        {!imageError && src ? (
          <img
            src={src}
            alt={name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0c0b11] via-[#14121d] to-[#0c0b11] flex flex-col items-center justify-center p-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 font-heading font-extrabold text-xl shadow-lg mb-1">
              RS
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-300 tracking-wider">ROUNAK SAINI</span>
            <span className="text-[9px] text-gray-400 font-mono">Full Stack & AI</span>
          </div>
        )}

        {/* Cyber gold corner accent */}
        <div className="absolute top-2 right-2 p-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
