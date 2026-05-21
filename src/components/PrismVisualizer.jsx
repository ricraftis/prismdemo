import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  Settings2, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const PrismVisualizer = () => {
  const [activeLayer, setActiveLayer] = useState(null); // 'foresight' | 'systems' | 'foundation' | null
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Mouse move listener for 3D Tilt Effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate center coordinates
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Get mouse offset from center (-1 to 1)
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);
    
    // Smooth dampening
    setCoords({ x: offsetX, y: offsetY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Reusable Layer Definitions
  const layers = {
    foresight: {
      id: 'foresight',
      label: 'CFO Strategy',
      level: 'Level 01: High-Level Strategy',
      color: 'from-amber-400 to-rose-500',
      textColor: 'text-rose-500',
      bgColor: 'bg-rose-50 border-rose-100',
      iconBg: 'bg-gradient-to-br from-amber-400 to-rose-500 text-white',
      icon: <TrendingUp size={20} />,
      headline: 'Clear Sight for Future Scale',
      description: 'Access Tier-1 strategic advisory, cash flow forecasting, and ROI models to grow profits and plan exits without the massive corporate overhead.',
    },
    systems: {
      id: 'systems',
      label: 'Systems & Workflows',
      level: 'Level 02: Automated Structure',
      color: 'from-cyan-400 to-blue-500',
      textColor: 'text-cyan-500',
      bgColor: 'bg-cyan-50 border-cyan-100',
      iconBg: 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white',
      icon: <Settings2 size={20} />,
      headline: 'Seamless Business Engines',
      description: 'Streamline and automate bookkeeping, payroll, and spreadsheets with bulletproof cloud architecture that saves you hours of manual stress.',
    },
    foundation: {
      id: 'foundation',
      label: 'Financial Integrity',
      level: 'Level 03: Vital Compliance',
      color: 'from-blue-600 to-indigo-700',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50 border-blue-100',
      iconBg: 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white',
      icon: <ShieldCheck size={20} />,
      headline: 'Decision-Ready Precision',
      description: 'Flawless day-to-day bookkeeping, BAS governance, and accounting systems. Clean, absolute data accuracy so you always know your position.',
    }
  };

  // Default visual state when nothing is selected
  const defaultState = {
    id: null,
    label: 'Refraction Mode',
    level: 'Unified Growth Engine',
    color: 'from-blue-950 to-blue-900',
    textColor: 'text-blue-950',
    bgColor: 'bg-slate-50 border-slate-200/60',
    iconBg: 'bg-blue-950 text-white',
    icon: <CheckCircle2 size={20} />,
    headline: 'Unified Business Foresight',
    description: 'We align clean financial data with strategic execution. Hover or click on the bands below to see how our three layers feed into your growth.',
  };

  const currentLayer = activeLayer ? layers[activeLayer] : defaultState;

  // Custom 3D Tilt styling
  const tiltStyle = {
    transform: isHovered
      ? `perspective(1000px) rotateX(${-coords.y * 12}deg) rotateY(${coords.x * 12}deg) scale3d(1.015, 1.015, 1.015)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="relative glass rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-8 lg:p-10 border border-white/50 transform-gpu overflow-hidden"
    >
      {/* Component Styles for Glowing Filters and Dash Animations */}
      <style>{`
        @keyframes dash-move {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes prism-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(0.5deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(0, 193, 207, 0.4)) drop-shadow(0 0 10px rgba(0, 193, 207, 0.2)); }
          50% { filter: drop-shadow(0 0 8px rgba(0, 193, 207, 0.7)) drop-shadow(0 0 18px rgba(0, 193, 207, 0.4)); }
        }
        @keyframes pulse-opacity {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        .animate-ray-flow {
          stroke-dasharray: 6 4;
          animation: dash-move 0.8s linear infinite;
        }
        .prism-shape {
          animation: prism-float 6s ease-in-out infinite;
          transform-origin: center;
        }
        .prism-glowing-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative backdrop light mesh inside card */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-cyan-300/10 to-indigo-400/20 rounded-full blur-3xl opacity-80 pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-br from-indigo-300/10 to-pink-400/20 rounded-full blur-3xl opacity-80 pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.25em] mb-1 font-sans">Insight refractor</h3>
          <p className="text-2xl font-black text-blue-950 font-display tracking-tight">Structured Growth</p>
        </div>
        <div className="bg-emerald-50/80 border border-emerald-100/50 text-emerald-600 px-3.5 py-1.5 rounded-2xl text-[10px] tracking-widest font-black uppercase shadow-sm">
          Interactive
        </div>
      </div>

      {/* Visualizer Arena */}
      <div className="relative h-60 w-full bg-slate-950 rounded-[2rem] border border-slate-900 shadow-inner overflow-hidden mb-8 group/arena">
        {/* Deep mesh bg for the visualizer */}
        <div className="absolute inset-0 bg-radial-at-t from-slate-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px]"></div>

        {/* Dynamic Glowing Beams in SVG */}
        <svg 
          viewBox="0 0 320 200" 
          className="w-full h-full absolute inset-0 select-none pointer-events-none z-10"
        >
          <defs>
            {/* Prism Gradient */}
            <linearGradient id="prism-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00c1cf" stopOpacity="0.05" />
            </linearGradient>

            {/* Input Beam Gradient */}
            <linearGradient id="input-ray-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
              <stop offset="50%" stopColor="#00c1cf" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
            </linearGradient>

            {/* Glow Filters */}
            <filter id="glow-heavy" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-medium" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACKGROUND LIGHT RAYS - Glowing Spectrums */}
          {/* CFO Strategy Ray (Rose/Gold) */}
          <path 
            d="M 166 100 Q 230 75 320 40" 
            fill="none" 
            stroke="#f59e0b" 
            strokeWidth={activeLayer === 'foresight' ? 8 : activeLayer === null ? 3 : 1}
            strokeOpacity={activeLayer === 'foresight' ? 0.9 : activeLayer === null ? 0.35 : 0.08}
            filter="url(#glow-heavy)"
            className="transition-all duration-500"
          />
          <path 
            d="M 166 100 Q 230 75 320 40" 
            fill="none" 
            stroke="#fb7185" 
            strokeWidth={activeLayer === 'foresight' ? 4 : activeLayer === null ? 1.5 : 0.5}
            strokeOpacity={activeLayer === 'foresight' ? 1 : activeLayer === null ? 0.6 : 0.1}
            className="transition-all duration-500"
          />

          {/* Systems Ray (Teal/Cyan) */}
          <path 
            d="M 166 100 Q 230 100 320 100" 
            fill="none" 
            stroke="#00c1cf" 
            strokeWidth={activeLayer === 'systems' ? 8 : activeLayer === null ? 3 : 1}
            strokeOpacity={activeLayer === 'systems' ? 0.9 : activeLayer === null ? 0.35 : 0.08}
            filter="url(#glow-heavy)"
            className="transition-all duration-500"
          />
          <path 
            d="M 166 100 Q 230 100 320 100" 
            fill="none" 
            stroke="#22d3ee" 
            strokeWidth={activeLayer === 'systems' ? 4 : activeLayer === null ? 1.5 : 0.5}
            strokeOpacity={activeLayer === 'systems' ? 1 : activeLayer === null ? 0.6 : 0.1}
            className="transition-all duration-500"
          />

          {/* Foundation Ray (Royal Blue) */}
          <path 
            d="M 166 100 Q 230 125 320 160" 
            fill="none" 
            stroke="#2563eb" 
            strokeWidth={activeLayer === 'foundation' ? 8 : activeLayer === null ? 3 : 1}
            strokeOpacity={activeLayer === 'foundation' ? 0.9 : activeLayer === null ? 0.35 : 0.08}
            filter="url(#glow-heavy)"
            className="transition-all duration-500"
          />
          <path 
            d="M 166 100 Q 230 125 320 160" 
            fill="none" 
            stroke="#60a5fa" 
            strokeWidth={activeLayer === 'foundation' ? 4 : activeLayer === null ? 1.5 : 0.5}
            strokeOpacity={activeLayer === 'foundation' ? 1 : activeLayer === null ? 0.6 : 0.1}
            className="transition-all duration-500"
          />

          {/* DATA FLOW PARTICLES (Dash patterns moving along active lines) */}
          {/* CFO flow */}
          {(activeLayer === 'foresight' || activeLayer === null) && (
            <path 
              d="M 166 100 Q 230 75 320 40" 
              fill="none" 
              stroke="#fff" 
              strokeWidth="2" 
              strokeOpacity="0.8"
              className="animate-ray-flow" 
              style={{ animationDelay: '0.2s', animationDuration: '1s' }}
            />
          )}

          {/* Systems flow */}
          {(activeLayer === 'systems' || activeLayer === null) && (
            <path 
              d="M 166 100 Q 230 100 320 100" 
              fill="none" 
              stroke="#fff" 
              strokeWidth="2" 
              strokeOpacity="0.8"
              className="animate-ray-flow" 
              style={{ animationDelay: '0.4s', animationDuration: '0.8s' }}
            />
          )}

          {/* Foundation flow */}
          {(activeLayer === 'foundation' || activeLayer === null) && (
            <path 
              d="M 166 100 Q 230 125 320 160" 
              fill="none" 
              stroke="#fff" 
              strokeWidth="2" 
              strokeOpacity="0.8"
              className="animate-ray-flow" 
              style={{ animationDelay: '0.6s', animationDuration: '1.2s' }}
            />
          )}

          {/* INPUT BEAM - Focuses scattered data into the prism */}
          <line 
            x1="0" y1="100" x2="135" y2="100" 
            stroke="url(#input-ray-grad)" 
            strokeWidth="3.5" 
          />
          {/* Input glowing core */}
          <line 
            x1="0" y1="100" x2="135" y2="100" 
            stroke="#ffffff" 
            strokeWidth="1.5" 
            className="animate-ray-flow"
            style={{ animationDuration: '1.5s' }}
          />

          {/* THE GLASS PRISM (Subtly float-animated polygon) */}
          <g className="prism-shape">
            {/* Glow backing */}
            <polygon 
              points="148,60 118,125 178,125" 
              fill="none" 
              stroke="#00c1cf" 
              strokeWidth="4" 
              strokeOpacity="0.4"
              className="prism-glowing-glow"
            />
            {/* Main glass face */}
            <polygon 
              points="148,60 118,125 178,125" 
              fill="url(#prism-grad)" 
              stroke="rgba(255, 255, 255, 0.4)" 
              strokeWidth="1.5" 
              style={{ backdropFilter: 'blur(3px)' }}
            />
            {/* Reflection facet highlight */}
            <line 
              x1="148" y1="60" x2="118" y2="125" 
              stroke="rgba(255, 255, 255, 0.85)" 
              strokeWidth="1.5" 
            />
            {/* Inside light convergence core */}
            <circle cx="148" cy="100" r="4" fill="#ffffff" filter="url(#glow-medium)" />
          </g>
        </svg>

        {/* Terminology Hotspots Overlay (Styled buttons inside visualizer area) */}
        <div className="absolute right-4 top-0 bottom-0 flex flex-col justify-between py-6 z-20 w-36 select-none">
          <button 
            onMouseEnter={() => setActiveLayer('foresight')}
            onClick={() => setActiveLayer('foresight')}
            className={`text-[9px] uppercase tracking-[0.2em] font-black text-right px-3 py-1.5 rounded-xl border transition-all duration-300 ${
              activeLayer === 'foresight' 
                ? 'bg-rose-500/20 border-rose-400 text-rose-300 font-extrabold shadow-lg shadow-rose-900/40' 
                : 'bg-black/40 border-white/5 text-slate-400 hover:border-rose-500/30 hover:text-white'
            }`}
          >
            01 Strategy
          </button>
          
          <button 
            onMouseEnter={() => setActiveLayer('systems')}
            onClick={() => setActiveLayer('systems')}
            className={`text-[9px] uppercase tracking-[0.2em] font-black text-right px-3 py-1.5 rounded-xl border transition-all duration-300 ${
              activeLayer === 'systems' 
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-extrabold shadow-lg shadow-cyan-900/40' 
                : 'bg-black/40 border-white/5 text-slate-400 hover:border-cyan-500/30 hover:text-white'
            }`}
          >
            02 Systems
          </button>

          <button 
            onMouseEnter={() => setActiveLayer('foundation')}
            onClick={() => setActiveLayer('foundation')}
            className={`text-[9px] uppercase tracking-[0.2em] font-black text-right px-3 py-1.5 rounded-xl border transition-all duration-300 ${
              activeLayer === 'foundation' 
                ? 'bg-blue-500/20 border-blue-400 text-blue-300 font-extrabold shadow-lg shadow-blue-900/40' 
                : 'bg-black/40 border-white/5 text-slate-400 hover:border-blue-500/30 hover:text-white'
            }`}
          >
            03 Foundation
          </button>
        </div>

        {/* Ambient background words floating in back */}
        <div className="absolute left-6 top-8 text-[9px] tracking-widest uppercase text-white/10 font-bold pointer-events-none select-none">Raw Numbers</div>
        <div className="absolute left-6 bottom-8 text-[9px] tracking-widest uppercase text-white/10 font-bold pointer-events-none select-none">Chaos</div>
      </div>

      {/* Explanatory Information Panel ( layman-focused explanation ) */}
      <div className={`p-6 rounded-[2rem] border transition-all duration-500 min-h-[9.5rem] flex flex-col justify-between ${currentLayer.bgColor}`}>
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-xl transition-all duration-500 ${currentLayer.iconBg} shadow-md`}>
            {currentLayer.icon}
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">
              {currentLayer.level}
            </p>
            <p className={`text-base font-black font-display tracking-tight leading-none ${currentLayer.textColor}`}>
              {currentLayer.headline}
            </p>
          </div>
        </div>
        
        <p className="text-slate-600 text-xs font-semibold leading-relaxed mt-4 flex-grow transition-all duration-500">
          {currentLayer.description}
        </p>
      </div>

      {/* Interactive Tabs / Selectors below */}
      <div className="grid grid-cols-3 gap-2.5 mt-6 relative z-10">
        <button 
          onMouseEnter={() => setActiveLayer('foundation')}
          onClick={() => setActiveLayer('foundation')}
          className={`py-3 px-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${
            activeLayer === 'foundation' 
              ? 'bg-blue-950 border-blue-950 text-white shadow-lg' 
              : 'bg-slate-50 border-slate-200/60 text-slate-500 hover:bg-slate-100 hover:text-blue-950'
          }`}
        >
          Foundation
        </button>

        <button 
          onMouseEnter={() => setActiveLayer('systems')}
          onClick={() => setActiveLayer('systems')}
          className={`py-3 px-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${
            activeLayer === 'systems' 
              ? 'bg-blue-950 border-blue-950 text-white shadow-lg' 
              : 'bg-slate-50 border-slate-200/60 text-slate-500 hover:bg-slate-100 hover:text-blue-950'
          }`}
        >
          Systems
        </button>

        <button 
          onMouseEnter={() => setActiveLayer('foresight')}
          onClick={() => setActiveLayer('foresight')}
          className={`py-3 px-1 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${
            activeLayer === 'foresight' 
              ? 'bg-blue-950 border-blue-950 text-white shadow-lg' 
              : 'bg-slate-50 border-slate-200/60 text-slate-500 hover:bg-slate-100 hover:text-blue-950'
          }`}
        >
          Strategy
        </button>
      </div>

      {/* Dynamic reset overlay button if a layer is focused */}
      {activeLayer !== null && (
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => setActiveLayer(null)}
            className="text-[9px] font-black uppercase tracking-widest text-[#00c1cf] hover:text-[#00a8b5] transition-colors flex items-center gap-1 group/reset"
          >
            <span>Reset To Overview</span>
            <ArrowRight size={10} className="group-hover/reset:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PrismVisualizer;
