import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  BarChart3, 
  TrendingUp, 
  Settings2, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  LineChart,
  ShieldCheck,
  Clock,
  Menu,
  X,
  ClipboardCheck
} from 'lucide-react';
import FractionalCFO from './pages/FractionalCFO';
import DigitalTransformation from './pages/DigitalTransformation';
import FoundationalIntegrity from './pages/FoundationalIntegrity';
import Bookkeeping from './pages/services/Bookkeeping';
import Payroll from './pages/services/Payroll';
import BAS from './pages/services/BAS';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'fractional-cfo', 'digital-transformation', 'foundational-integrity', 'bookkeeping', 'payroll', 'bas'

  // Smooth scroll helper
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setCurrentView('home');
  };

  if (currentView === 'fractional-cfo') {
    return (
      <FractionalCFO 
        onBack={() => setCurrentView('home')} 
        onConsultation={() => {
          setCurrentView('home');
          setTimeout(() => scrollTo('diagnostic'), 100);
        }}
        onDiagnostic={() => {
          setCurrentView('home');
          setTimeout(() => scrollTo('diagnostic'), 100);
        }}
      />
    );
  }

  if (currentView === 'digital-transformation') {
    return (
      <DigitalTransformation 
        onBack={() => setCurrentView('home')} 
      />
    );
  }

  if (currentView === 'foundational-integrity') {
    return (
      <FoundationalIntegrity 
        onBack={() => setCurrentView('home')} 
        onNavigateService={(service) => setCurrentView(service)}
      />
    );
  }

  if (currentView === 'bookkeeping') {
    return <Bookkeeping onBack={() => setCurrentView('foundational-integrity')} />;
  }

  if (currentView === 'payroll') {
    return <Payroll onBack={() => setCurrentView('foundational-integrity')} />;
  }

  if (currentView === 'bas') {
    return <BAS onBack={() => setCurrentView('foundational-integrity')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 relative overflow-hidden">
      {/* Noise Overlay for Texture */}
      <div className="noise-overlay"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollTo('top')}>
              <img 
                src="/Prism Business Intiatives - 300px.jpg" 
                alt="Prism Business Initiatives" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#202020] block leading-none font-display">PRISM</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Business Initiatives</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {['Services', 'Health Check', 'About'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace(' ', ''))} 
                  className="text-sm font-semibold text-slate-500 hover:text-[#00c1cf] transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00c1cf] transition-all group-hover:w-full"></span>
                </button>
              ))}
              <button className="bg-[#00c1cf] text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-[#00a8b5] transition-all shadow-xl hover:shadow-[#00c1cf]/10 active:scale-95">
                Book Consultation
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 p-6 space-y-6 animate-fade-in-up">
            <button onClick={() => scrollTo('services')} className="block w-full text-left text-lg font-bold text-slate-800">Services</button>
            <button onClick={() => scrollTo('diagnostic')} className="block w-full text-left text-lg font-bold text-slate-800">Health Check</button>
            <button onClick={() => scrollTo('about')} className="block w-full text-left text-lg font-bold text-slate-800">About</button>
            <button className="block w-full bg-[#00c1cf] text-white px-6 py-4 rounded-2xl font-bold text-center shadow-lg">Book Consultation</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-36 lg:pb-32 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 mb-16 lg:mb-0">
              <div className="inline-flex items-center space-x-3 bg-white/50 backdrop-blur-md border border-white px-4 py-2 rounded-full text-xs font-black mb-8 shadow-sm animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="tracking-widest uppercase text-blue-900">Regional Victoria's Strategic Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-[#202020] tracking-tighter leading-[0.95] mb-8 font-display animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
                Clear Direction.<br />
                <span className="spectrum-gradient">Ambitious Scale.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl animate-fade-in-up opacity-0 font-medium" style={{ animationDelay: '300ms' }}>
                From reactive recording to proactive strategy. We provide the foundational data and the CFO-level expertise you need to scale with total confidence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
                <button 
                  onClick={() => scrollTo('diagnostic')}
                  className="bg-[#00c1cf] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#00a8b5] transition-all shadow-2xl hover:shadow-[#00c1cf]/20 flex items-center justify-center group"
                >
                  Get Your Health Score
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  className="bg-white/50 backdrop-blur-md text-slate-800 border border-white px-10 py-5 rounded-2xl font-black hover:bg-white transition-all flex items-center justify-center shadow-lg"
                >
                  Our Ecosystem
                </button>
              </div>
              <div className="mt-14 flex items-center space-x-8 text-slate-400 animate-fade-in-up opacity-0" style={{ animationDelay: '500ms' }}>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-widest">Qualified CPAs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-widest">B2B Specialists</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative animate-fade-in-up opacity-0" style={{ animationDelay: '600ms' }}>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
              
              <div className="relative glass rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-10 border border-white/50 translate-y-6 hover:translate-y-0 transition-transform duration-700 ease-out">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Forecast</h3>
                    <p className="text-2xl font-black text-blue-950 font-display">Growth Velocity</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg text-xs font-black shadow-sm">
                    +22.4%
                  </div>
                </div>
                
                <div className="h-48 flex items-end justify-between space-x-3 px-2 mb-10">
                  {[35, 60, 40, 85, 50, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-slate-100/50 rounded-xl relative overflow-hidden group h-full">
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950 to-blue-700 transition-all duration-[1.5s] delay-700"
                        style={{ height: `${h}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-5 bg-blue-950/5 rounded-2xl border border-blue-950/5">
                    <div className="flex items-center space-x-4">
                      <div className="p-2.5 bg-blue-950 text-white rounded-xl shadow-lg"><TrendingUp size={18} /></div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Optimization status</p>
                        <p className="text-sm font-black text-blue-950">Scale-Ready Core</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section Overlap Divider */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Pain Points / Agitation - Refined with asymetrical cards */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-end mb-24">
            <div className="lg:col-span-8">
                <h2 className="text-4xl lg:text-6xl font-black text-blue-950 mb-8 font-display leading-[0.95]">
                  Are you running the business, or is it running you?
                </h2>
                <div className="w-24 h-2 bg-blue-600 rounded-full mb-8"></div>
            </div>
            <div className="lg:col-span-4">
                <p className="text-lg text-slate-500 leading-relaxed font-medium">
                  Most regional SME owners are experts in their trade, but find themselves "flying blind" when it comes to strategy.
                </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "The Owner Trap",
                desc: "You are the central hub for every decision. If you step away for 30 days, the engine stalls.",
                icon: <Users className="text-blue-900" />,
                accent: "bg-blue-50"
              },
              {
                title: "Lagging Indicators",
                desc: "You only see your financial health weeks after the month has closed—when it's too late to pivot.",
                icon: <Clock className="text-blue-900" />,
                accent: "bg-indigo-50"
              },
              {
                title: "System Friction",
                desc: "Manual entry, messy spreadsheets, and 'Frankenstein' processes are leaking profit.",
                icon: <Settings2 className="text-blue-900" />,
                accent: "bg-emerald-50"
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/5">
                <div className={`w-16 h-16 ${item.accent} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-950 mb-4 font-display">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Diagnostic - High Impact Maximalist Section */}
      <section id="diagnostic" className="py-32 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex items-center justify-between gap-24">
            <div className="lg:w-1/2 mb-20 lg:mb-0">
              <div className="inline-block px-4 py-1.5 bg-blue-900/50 border border-blue-700 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-8">
                Immediate Insights
              </div>
              <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.95] font-display">
                Unlock Your <span className="text-[#00c1cf]">Score.</span>
              </h2>
              <p className="text-blue-100/70 text-xl mb-12 leading-relaxed font-medium">
                Take our SME Growth Diagnostic to identify the gaps in your financial engine. Get a detailed report on Cash Flow, Systems, and Scalability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  "100% Free & Personalized", 
                  "Used by 50+ Regional SMEs", 
                  "Immediate PDF Insights", 
                  "Benchmark Against Industry"
                ].map((point, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-blue-400" />
                    </div>
                    <span className="font-bold text-sm text-blue-100">{point}</span>
                  </div>
                ))}
              </div>
              <button className="w-full sm:w-auto bg-white text-[#202020] px-12 py-6 rounded-2xl font-black text-lg hover:bg-[#f8fafc] transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:translate-y-0">
                Start My Health Check
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 lg:p-12 overflow-hidden shadow-2xl">
                    <div className="space-y-10 relative z-10">
                        {[
                            { step: "01", text: "Answer 7 quick questions about your business" },
                            { step: "02", text: "Our algorithm analyzes your profit leaks" },
                            { step: "03", text: "Download your 'Growth Readiness' PDF report" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-6 group/step">
                                <div className="text-3xl font-black text-[#00c1cf] font-display opacity-80 group-hover/step:opacity-100 transition-opacity">{item.step}</div>
                                <p className="text-lg font-bold text-white/90 group-hover/step:text-white transition-colors">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 pt-10 border-t border-white/10">
                        <div className="flex -space-x-3 mb-6">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-blue-950 bg-slate-800 shadow-xl overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white/20 uppercase italic tracking-tighter">USER</div>
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-blue-950 bg-[#00c1cf] flex items-center justify-center text-xs font-black shadow-xl text-white">50+</div>
                        </div>
                        <p className="text-sm font-bold text-blue-200/80">50+ local leaders have already optimized their core.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Ecosystem - Asymmetrical Grid */}
      <section id="services" className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black text-blue-950 mb-8 font-display tracking-tight">Ecosystem.</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We don't just record the past. We build a unified engine where accurate data feeds high-level strategy.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Elevation Card - Large Spanning */}
            <div className="lg:col-span-12 bg-white rounded-[3rem] p-10 lg:p-16 shadow-sm border border-slate-200 overflow-hidden relative group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-700">
               <div className="absolute top-0 right-10 rotate-12 -translate-y-8 opacity-[0.03] pointer-events-none group-hover:rotate-6 transition-transform duration-1000">
                  <BarChart3 size={400} />
               </div>
               
               <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="inline-block px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Level 01: Elevation</div>
                    <h3 className="text-4xl font-black text-blue-950 mb-8 font-display leading-[0.95]">Strategic Growth CFO</h3>
                    <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                      Access C-suite financial expertise without the $250k overhead. We act as your Strategic Partner, focusing on ROI, exit planning, and capital efficiency.
                    </p>
                    <button 
                      onClick={() => {
                        window.scrollTo(0, 0);
                        setCurrentView('fractional-cfo');
                      }}
                      className="inline-flex items-center space-x-3 bg-white border-2 border-[#00c1cf] text-[#00c1cf] px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#00c1cf] hover:text-white transition-all duration-300 mb-12 shadow-sm hover:shadow-lg group/btn active:scale-95"
                    >
                      <span>Explore CFO Strategy</span>
                      <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {[
                        "Fractional CFO Advisory",
                        "Cash Flow Forecasting",
                        "Risk Management",
                        "Mergers & Acquisitions",
                        "Board-Level Reporting",
                        "Succession Planning"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 group/item cursor-pointer">
                          <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center group-hover/item:bg-blue-950 transition-colors">
                            <ArrowRight size={10} className="text-blue-900 group-hover/item:text-white" />
                          </div>
                          <span className="text-sm font-bold text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-10 rounded-[2.5rem] flex flex-col justify-between border border-slate-100 group-hover:bg-blue-50 transition-colors">
                      <BarChart3 className="text-blue-900 mb-8" size={32} />
                      <p className="text-xl font-black text-blue-950 font-display">Profit<br />Optimization</p>
                    </div>
                    <div className="bg-slate-50 p-10 rounded-[2.5rem] flex flex-col justify-between border border-slate-100 group-hover:bg-indigo-50 transition-colors">
                      <LineChart className="text-blue-900 mb-8" size={32} />
                      <p className="text-xl font-black text-blue-950 font-display">Growth<br />Roadmaps</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Transform & Foundation - Smaller Cards */}
            <div className="lg:col-span-6 bg-white rounded-[3rem] p-12 shadow-sm border border-slate-200 group hover:border-blue-200 transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-50 transition-colors">
                  <Settings2 className="text-blue-900" size={28} />
                </div>
                <h3 className="text-3xl font-black text-blue-950 mb-6 font-display">Digital Transformation</h3>
                <p className="text-slate-500 mb-10 font-medium leading-relaxed">
                  We modernize your 'back office' with cloud automation, integrating your CRM, inventory, and ledger for a single source of truth.
                </p>
                <button 
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setCurrentView('digital-transformation');
                  }}
                  className="inline-flex items-center space-x-3 bg-white border-2 border-[#00c1cf] text-[#00c1cf] px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#00c1cf] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group/btn active:scale-95"
                >
                  <span>Explore Digital Roadmap</span>
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
            
            <div className="lg:col-span-6 bg-white rounded-[3rem] p-12 shadow-sm border border-slate-200 group hover:border-blue-200 transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-50 transition-colors">
                  <ShieldCheck className="text-blue-900" size={28} />
                </div>
                <h3 className="text-3xl font-black text-blue-950 mb-6 font-display">Foundational Integrity</h3>
                <p className="text-slate-500 mb-10 font-medium leading-relaxed">
                  Flawless bookkeeping and payroll management. decision-ready accuracy so you never have to guess your position.
                </p>
                <button 
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setCurrentView('foundational-integrity');
                  }}
                  className="inline-flex items-center space-x-3 bg-white border-2 border-[#00c1cf] text-[#00c1cf] px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#00c1cf] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group/btn active:scale-95"
                >
                  <span>Explore Governance Roadmap</span>
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* About - Editorial Style Layout */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 mb-20 lg:mb-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="aspect-[4/5] bg-slate-200 rounded-[2.5rem] overflow-hidden relative z-10 shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-black uppercase tracking-[0.3em] text-sm text-center px-12 italic">
                        The Strategic Edge
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-950/90 to-transparent p-12">
                        <p className="text-white font-black text-2xl font-display leading-[0.95]">Impact Through Precision.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-4xl lg:text-7xl font-black text-blue-950 mb-10 italic font-display leading-[0.9] tracking-tighter">
                "Strategy is only as good as the data driving it."
              </h2>
              <div className="space-y-8 text-slate-500 text-lg font-medium leading-relaxed">
                <p>
                  After years operating in top-tier corporate circles, I realized that regional SMEs were being underserved. Local leaders were getting 'compliance-only' support, leaving them with no one to help navigate actual growth.
                </p>
                <p>
                  I founded Prism Business Initiatives to bridge that gap. We bring Tier-1 strategic thinking to Victorian business owners—starting with an unbreakable foundation of data, followed by the foresight of a Fractional CFO.
                </p>
              </div>
              <div className="mt-16 flex items-center space-x-12 grayscale opacity-40">
                <div className="font-black text-slate-500 text-sm tracking-[0.3em]">IPA AU</div>
                <div className="font-black text-slate-500 text-sm tracking-[0.3em]">XERO</div>
                <div className="font-black text-slate-500 text-sm tracking-[0.3em]">MYOB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA - High contrast final section */}
      <section className="py-32 bg-blue-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.95] font-display tracking-tight">
            Thrive. <span className="text-[#00c1cf]">Scale.</span> Dominate.
          </h2>
          <p className="text-blue-200/60 text-xl mb-16 max-w-2xl mx-auto font-medium">
            Whether you need a quick health check or a deep-dive strategy session, we're here to help regional Victoria thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="bg-[#00c1cf] text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-[#00a8b5] transition-all shadow-2xl hover:shadow-[#00c1cf]/20 active:scale-95">
              Start Free Diagnostic
            </button>
            <button className="bg-transparent border-2 border-white/20 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/5 transition-all active:scale-95">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="bg-black py-20 text-slate-500 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-12 md:mb-0">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/Prism Business Intiatives - 300px.jpg" 
                  alt="Prism Logo" 
                  className="h-14 w-auto object-contain" 
                />
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tight text-white block leading-none font-display">PRISM</span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-slate-500 font-bold">Business Initiatives</span>
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600">© 2026. Serving Regional Victoria, Australia.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-12 text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Strategy</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
