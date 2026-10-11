import React from 'react';
import { Quote, Star, CheckCircle, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Nexus Studio',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80',
    content: 'Alex transformed our complex 3D product catalog into a blistering fast WebGL browser experience. His attention to detail, smooth animations, and clean React code set a new benchmark for our tech team.',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'CTO & Co-Founder',
    company: 'Nova Analytics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    content: 'Working with Alex was a game-changer. He delivered our real-time SaaS analytics dashboard 2 weeks ahead of schedule with zero major bugs. Highly recommended for full-stack engineering.',
    rating: 5,
  },
  {
    name: 'Elena Rostova',
    role: 'Design Director',
    company: 'CyberVerse Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    content: 'Rarely do you find an engineer who possesses both deep technical 3D shader knowledge and a pixel-perfect eye for UI design. Alex brought our Figma mockups to life seamlessly.',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5" /> Recommendations
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Clients & <span className="gradient-text-purple">Leaders Say</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Feedback from team leaders, founders, and creative directors I've collaborated with.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between group relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-cyan-500/20 transition-colors pointer-events-none" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/40"
                />
                <div>
                  <h3 className="font-bold text-white text-base flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle className="w-4 h-4 text-cyan-400" title="Verified Client" />
                  </h3>
                  <p className="text-xs text-gray-400">
                    {item.role} @ <span className="text-gray-300 font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
