import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, ShieldCheck, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import ThreeCanvas from "./ThreeCanvas";

const specializations = [
  "HackerRank Certified in JavaScript",
  "KisanSetu AI Mobile Architect",
  "Full-Stack Web (React & Laravel)",
  "Flutter Cross-Platform Developer",
  "Solidity Smart Contracts Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = specializations[roleIndex];
    let speed = isDeleting ? 30 : 65;

    if (!isDeleting && displayedText === current) {
      speed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % specializations.length);
      speed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1),
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 sm:pt-40 pb-20 flex items-center justify-center overflow-hidden obsidian-mesh-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status Pill Badge with Profile Thumbnail */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-xl p-[1.5px] bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-200 shrink-0 shadow-lg shadow-amber-500/20">
                <img
                  src="/rounak.jpg"
                  alt="Rounak Saini"
                  className="w-full h-full object-cover rounded-[10px]"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full gold-glass-card text-amber-300 text-xs font-mono font-bold tracking-wide shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                  Rounak Saini • 2nd Year B.Tech CS @ MIET Meerut
                </div>
                <div className="text-[11px] text-amber-400/80 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  HackerRank JavaScript & Google Cloud Certified • 3+ Years Exp
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2 pt-1">
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-[4.25rem] text-white tracking-tight leading-[1.08]">
                Engineering{" "}
                <span className="gradient-text-gold">Full-Stack Web</span>,{" "}
                <br />
                Mobile AI & Enterprise Systems.
              </h1>
            </div>

            {/* Dynamic Typing Subtitle */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-amber-300 font-semibold h-11 bg-[#0c0b11]/90 px-4 py-2 rounded-xl border border-amber-500/20 shadow-inner">
              <span className="text-gray-500">&gt; Specialization:</span>
              <span className="text-white font-bold">{displayedText}</span>
              <span className="animate-pulse text-amber-400 font-bold">|</span>
            </div>

            {/* Narrative Bio */}
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Second-year B.Tech CS Engineering student at{" "}
              <strong className="text-amber-300 font-semibold">
                MIET Meerut
              </strong>{" "}
              with 3+ years of real-world software development. Creator of{" "}
              <strong className="text-white font-semibold">
                KisanSetu AI Marketplace
              </strong>
              , cloud-native{" "}
              <strong className="text-white font-semibold">OmniCore ERP</strong>{" "}
              suites, and certified in{" "}
              <strong className="text-amber-300 font-semibold">
                JavaScript (Intermediate) by HackerRank
              </strong>
              .
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 hover:from-amber-400 hover:to-yellow-200 text-slate-950 font-heading font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                Explore Selected Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/rounak-saini-4b99ba41b/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl gold-glass-card hover:bg-[#151320] text-gray-200 hover:text-white font-semibold text-xs sm:text-sm border border-amber-500/30 hover:border-amber-400 transition-all duration-300 flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-amber-400" />
                LinkedIn Profile{" "}
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <a
                href="https://github.com/rounakzsaini01010-dev"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl gold-glass-card hover:bg-[#151320] text-gray-200 hover:text-white font-semibold text-xs sm:text-sm border border-amber-500/30 hover:border-amber-400 transition-all duration-300 flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-amber-400" />
                GitHub Repositories{" "}
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>

            {/* Verified Toolchain Stack */}
            <div className="pt-2 text-xs text-amber-300/80 font-mono tracking-wide leading-relaxed">
              Flutter & Dart <span className="text-amber-500/40 mx-1.5">·</span>
              JavaScript (HackerRank){" "}
              <span className="text-amber-500/40 mx-1.5">·</span>
              React JS <span className="text-amber-500/40 mx-1.5">·</span>
              PHP & Laravel <span className="text-amber-500/40 mx-1.5">·</span>
              MySQL <span className="text-amber-500/40 mx-1.5">·</span>C &
              Python <span className="text-amber-500/40 mx-1.5">·</span>
              Solidity Smart Contracts
            </div>
          </div>

          {/* Right 3D Scene Viewport */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full h-[500px] lg:h-[580px] rounded-3xl bg-[#09080e] border border-amber-500/25 overflow-hidden shadow-2xl relative shadow-black/80">
              <ThreeCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
