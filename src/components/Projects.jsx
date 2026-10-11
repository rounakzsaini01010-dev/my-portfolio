import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';

const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'kisan', label: 'KisanSetu AI (Flutter)' },
  { id: 'erp', label: 'Enterprise ERP' },
  { id: 'web3', label: 'NFT & Web3' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'games', label: '2D & 3D Games' }
];

const projectsData = [
  {
    id: 1,
    category: 'kisan',
    badgeTag: '01 · Flutter & Mobile AI · 2025 – 2026',
    role: 'Lead Mobile & AI Systems Architect',
    title: 'KisanSetu AI — Farmer & Buyer Marketplace',
    description: 'A direct-to-buyer agricultural marketplace built in Flutter that eliminates middlemen through AI-assisted crop quality grading, multilingual voice navigation, predictive mandi price forecasting, and transparent order negotiation.',
    metrics: [
      { value: '+31.4%', label: 'Farmer Margin Uplift' },
      { value: '180 ms', label: 'Inference Latency' },
      { value: '100%', label: 'Offline Sync Recovery' }
    ],
    stack: 'Flutter · Dart · TensorFlow Lite · Node.js · Express · MySQL',
    image: '/projects/kisansetu.jpg',
    githubUrl: 'https://github.com/rounakzsaini01010-dev',
    liveUrl: 'https://github.com/rounakzsaini01010-dev',
    fullDescription: 'KisanSetu AI is an agricultural marketplace built in Flutter with on-device machine learning for crop disease grading and automated mandi price discovery. It empowers rural farming communities with transparent auction bidding and voice-assisted workflows.',
    features: [
      'On-device TensorFlow Lite computer vision model for automated crop health & grading',
      'Multilingual voice-driven UI in regional Indian languages for accessibility',
      'Real-time mandi market trends forecast powered by AI prompt engines',
      'Offline-first Hive local storage with automatic cloud reconciliation'
    ]
  },
  {
    id: 2,
    category: 'erp',
    badgeTag: '02 · Enterprise ERP · 2024 – 2025',
    role: 'Lead Full-Stack Systems Architect',
    title: 'OmniCore ERP — Enterprise Resource Planning Software',
    description: 'Comprehensive cloud-native ERP software engineered for mid-to-large scale enterprises to unify supply chain logistics, automated purchase orders, multi-branch warehouse stock matrices, GST/tax billing, and role-based access control.',
    metrics: [
      { value: '-74%', label: 'Reconciliation Time' },
      { value: '250k+', label: 'Concurrent SKU Capacity' },
      { value: '18 Roles', label: 'RBAC Granularity' }
    ],
    stack: 'React 19 · PHP · Laravel · MySQL RDBMS · Tailwind CSS',
    image: '/projects/omnicore.jpg',
    githubUrl: 'https://github.com/rounakzsaini01010-dev',
    liveUrl: 'https://github.com/rounakzsaini01010-dev',
    fullDescription: 'OmniCore ERP delivers enterprise-grade workflow unification across procurement, inventory accounting, logistics dispatch, and financial compliance with relational MySQL optimization.',
    features: [
      'Multi-warehouse real-time inventory matrix with automated low-stock reorder triggers',
      'Granular role-based access control (RBAC) with 18 distinct departmental privilege tiers',
      'GST/VAT compliant automated invoicing and revenue reporting dashboards',
      'High-speed data querying and relational MySQL table indexing'
    ]
  },
  {
    id: 3,
    category: 'web3',
    badgeTag: '03 · Web3 & NFT Software · 2025',
    role: 'Full-Stack Web3 & Smart Contract Engineer',
    title: 'Ethera Protocol — Web3 NFT Software & Minting Engine',
    description: 'End-to-end NFT software platform featuring lazy minting, ERC-721A batch gas optimization, EIP-2981 on-chain creator royalties, IPFS decentralized metadata pinning, and real-time wallet portfolio analytics.',
    metrics: [
      { value: '-58%', label: 'Batch Mint Gas Reduction' },
      { value: '45 ms', label: 'Indexer Query Speed' },
      { value: '98.5%', label: 'Smart Contract Coverage' }
    ],
    stack: 'Solidity · React 19 · TypeScript · Hardhat · Ethers.js',
    image: '/projects/ethera.jpg',
    githubUrl: 'https://github.com/rounakzsaini01010-dev',
    liveUrl: 'https://github.com/rounakzsaini01010-dev',
    fullDescription: 'A Web3 decentralized asset engine combining Solidity smart contracts, ERC-721A batch gas optimizations, and cryptographic signature verification on Ethereum-compatible blockchains.',
    features: [
      'ERC-721A batch minting algorithm reducing Ethereum transaction fees by up to 58%',
      'Automated IPFS pinned metadata hashing and decentralized verification',
      'EIP-2981 standardized on-chain creator royalty distribution',
      'MetaMask and WalletConnect multi-provider authentication'
    ]
  },
  {
    id: 4,
    category: 'ecommerce',
    badgeTag: '04 · E-Commerce Platform · 2024',
    role: 'Principal E-Commerce Architect',
    title: 'NovaStore — Modern Headless E-Commerce Solutions',
    description: 'High-conversion distributed commerce platform featuring sub-second checkout pipelines, multi-currency localized payment gateways, automated inventory reconciliation, and redis caching.',
    metrics: [
      { value: '-62%', label: 'Checkout Abandonment' },
      { value: '1.2 s', label: 'P95 TTFB Latency' },
      { value: '99.98%', label: 'Gateway Uptime' }
    ],
    stack: 'PHP · Laravel · MySQL · React 19 · REST APIs',
    image: '/projects/novastore.jpg',
    githubUrl: 'https://github.com/rounakzsaini01010-dev',
    liveUrl: 'https://github.com/rounakzsaini01010-dev',
    fullDescription: 'Full-fledged e-commerce application built with PHP/Laravel backend and React frontend. Features product catalog management, session authentication, cart workflows, coupon management, and admin sales analytics.',
    features: [
      'Sub-second cart mutation updates and optimistic UI synchronization',
      'Dynamic multi-filter search by category, price range, and verified customer ratings',
      'Admin CRUD control panel for stock tracking and sales invoice export',
      'Responsive checkout UI optimized for mobile speed'
    ]
  },
  {
    id: 5,
    category: 'games',
    badgeTag: '05 · Interactive 2D & 3D Games · 2023 – 2024',
    role: 'Graphics & Game Engine Developer',
    title: 'HyperDrive 3D & 2D Arcade Game Suite',
    description: 'Browser-based 3D flight simulator and 2D physics sandbox powered by custom GLSL fragment shaders, vanilla JavaScript HTML5 Canvas physics loops, and Web Audio API interactive sound synthesis.',
    metrics: [
      { value: '60 FPS', label: 'Locked Render Loop' },
      { value: '0 ms', label: 'GC Stutter Latency' },
      { value: '100k', label: 'Instanced Particles' }
    ],
    stack: 'JavaScript ES6 · HTML5 Canvas · Three.js · Web Audio API',
    image: '/projects/hyperdrive.jpg',
    githubUrl: 'https://github.com/rounakzsaini01010-dev',
    liveUrl: 'https://github.com/rounakzsaini01010-dev',
    fullDescription: 'Custom browser game engines built from scratch using JavaScript ES6, HTML5 Canvas API, and WebGL. Features custom frame update loops, collision detection mathematics, sound synthesizers, and particle effects.',
    features: [
      'Custom 60fps HTML5 Canvas rendering loop with zero garbage collection spikes',
      'Web Audio API sound synthesis and interactive positional audio',
      'Responsive touch screen & keyboard input controllers',
      'Local Storage score persistence and difficulty progression'
    ]
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeTab === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  const featured = filtered[0];
  const gridCards = filtered.slice(1);

  const scrollTo3D = () => {
    const el = document.getElementById('home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 bg-[#050508] border-t border-amber-500/15 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 02. Flagship Engineering Works
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Selected <span className="gradient-text-gold">Engineering Works</span>
            </h2>

            {/* Filter Tabs Capsule */}
            <div className="flex items-center gap-1.5 bg-[#0c0b11] border border-amber-500/20 p-1.5 rounded-2xl overflow-x-auto max-w-full shadow-lg">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                      : 'text-gray-400 hover:text-amber-300 hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-3 text-gray-400 text-xs sm:text-sm max-w-2xl font-normal">
            Real software systems engineered by Rounak Saini with quantitative impact metrics, architectural diagrams, and verified code repositories.
          </p>
        </div>

        {/* Featured Card (Full Width) */}
        {featured && (
          <div className="mb-10 gold-glass-card gold-glass-card-hover rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Real Mockup Image */}
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#07060a] min-h-[320px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b11] via-transparent to-transparent opacity-60 lg:opacity-30" />

                {/* Bottom Left Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-xl bg-[#09080e]/95 border border-amber-500/30 text-amber-300 font-mono text-[11px] backdrop-blur-md">
                    {featured.badgeTag}
                  </span>
                </div>

                {/* Bottom Right Inspect 3D Node Button */}
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={scrollTo3D}
                    className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/20 hover:scale-105 transition-transform"
                  >
                    <Cpu className="w-3.5 h-3.5" /> Inspect 3D Node
                  </button>
                </div>
              </div>

              {/* Right Column: Project Details & Quantitative Metrics */}
              <div className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-amber-400/90 font-mono mb-1.5">
                    {featured.role}
                  </div>
                  <h3
                    onClick={() => setSelectedProject(featured)}
                    className="text-2xl sm:text-3xl font-extrabold text-white hover:text-amber-300 cursor-pointer transition-colors tracking-tight leading-snug mb-3"
                  >
                    {featured.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {featured.description}
                  </p>

                  {/* Quantitative Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-amber-500/15 mb-6">
                    {featured.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-heading">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-gray-400 font-mono truncate">
                    {featured.stack}
                  </div>
                  <button
                    onClick={() => setSelectedProject(featured)}
                    className="text-amber-400 hover:text-amber-300 font-semibold text-xs sm:text-sm flex items-center gap-1 shrink-0 transition-colors"
                  >
                    Case Study <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Secondary Project Cards Grid */}
        {gridCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridCards.map((proj) => (
              <div
                key={proj.id}
                className="gold-glass-card gold-glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Mockup Preview */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#07060a]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b11] via-transparent to-transparent opacity-50" />

                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-xl bg-[#09080e]/95 border border-amber-500/30 text-amber-300 font-mono text-[11px] backdrop-blur-md">
                        {proj.badgeTag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <button
                        onClick={scrollTo3D}
                        className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/20 hover:scale-105 transition-transform"
                      >
                        <Cpu className="w-3.5 h-3.5" /> Inspect 3D Node
                      </button>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-7">
                    <div className="text-xs text-amber-400/90 font-mono mb-1.5">
                      {proj.role}
                    </div>
                    <h3
                      onClick={() => setSelectedProject(proj)}
                      className="text-xl sm:text-2xl font-extrabold text-white hover:text-amber-300 cursor-pointer transition-colors tracking-tight leading-snug mb-3"
                    >
                      {proj.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {proj.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-amber-500/15 mb-5">
                      {proj.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="text-lg sm:text-xl font-extrabold text-amber-300 font-heading">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-7 pb-6 pt-1 flex items-center justify-between gap-4 border-t border-amber-500/15">
                  <div className="text-xs text-gray-400 font-mono truncate">
                    {proj.stack}
                  </div>
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="text-amber-400 hover:text-amber-300 font-semibold text-xs sm:text-sm flex items-center gap-1 shrink-0 transition-colors"
                  >
                    Case Study <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
