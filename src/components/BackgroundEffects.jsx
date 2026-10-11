import React, { useMemo } from 'react';

export default function BackgroundEffects() {
  const particles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 1.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 8 + 7}s`,
      delay: `${Math.random() * 4}s`,
      opacity: Math.random() * 0.4 + 0.15,
      color: i % 2 === 0 ? '#f59e0b' : '#fde047'
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient Champagne Gold & Bronze Atmosphere */}
      <div className="absolute -top-32 -left-32 w-[42rem] h-[42rem] bg-amber-500/8 rounded-full blur-[170px] animate-gold-pulse" />
      <div className="absolute top-1/3 -right-32 w-[38rem] h-[38rem] bg-yellow-600/6 rounded-full blur-[180px] animate-gold-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-10 left-1/3 w-[36rem] h-[36rem] bg-amber-600/7 rounded-full blur-[170px] animate-gold-pulse" style={{ animationDelay: '5s' }} />

      {/* Luxury Hairline Grid Overlay */}
      <div className="absolute inset-0 luxury-grid-pattern opacity-60" />

      {/* Subtle Golden Micro Dust Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full animate-float-smooth"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: p.top,
              left: p.left,
              backgroundColor: p.color,
              opacity: p.opacity,
              boxShadow: `0 0 8px ${p.color}`,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
