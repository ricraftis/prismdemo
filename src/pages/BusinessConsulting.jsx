import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  PlayCircle, 
  BarChart3, 
  Users, 
  Zap,
  ArrowRight,
  TrendingUp,
  Target,
  Briefcase,
  PieChart
} from 'lucide-react';
import Navigation from '../components/Navigation';

const BusinessConsulting = ({ onBack, onConsultation, onDiagnostic, onHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#202020] font-['Plus_Jakarta_Sans']">
      {/* Common Navigation */}
      <Navigation 
        onBack={onBack}
        onHome={onHome}
        onConsultation={onConsultation}
        showBack={true}
        isLight={true}
      />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#00c1cf]/10 rounded-full">
              <div className="w-2 h-2 bg-[#00c1cf] rounded-full animate-pulse" />
              <span className="text-[#00c1cf] text-xs font-black uppercase tracking-[0.2em]">Level 02: Strategic Growth</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-['Outfit'] font-black leading-[1.1] text-[#202020]">
              Business Consulting: <span className="text-[#00c1cf]">Strategy</span> & Growth Advisory
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Moving beyond just digital tools. We provide holistic strategic planning, asset acquisition guidance, and financial health management tailored for regional Victoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('consulting-roadmap')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-[#00c1cf] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#00a8b5] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 group flex items-center justify-center"
              >
                Get Your Consulting Roadmap
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-[#00c1cf] hover:text-[#00c1cf] transition-all flex items-center justify-center group active:scale-95"
              >
                <PlayCircle size={20} className="mr-2 text-[#00c1cf]" />
                Our Methodology
              </button>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00c1cf]/20 to-transparent blur-3xl opacity-50 rounded-full" />
            <img 
              src="/becDigitalTransformation.jpg" 
              alt="Business Consulting Strategy" 
              className="relative w-full aspect-square object-cover rounded-[2rem] shadow-2xl border border-white/20"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl space-y-4 max-w-xs border border-gray-50 hidden md:block animate-bounce-subtle">
              <div className="flex items-center space-x-3 text-[#00c1cf]">
                <TrendingUp size={24} fill="currentColor" />
                <span className="font-black uppercase tracking-widest text-xs">Strategic Impact</span>
              </div>
              <p className="text-2xl font-black font-['Outfit']">Proactive Scale</p>
              <p className="text-xs text-gray-500 font-bold leading-tight italic">Transitioning regional businesses from survival mode to strategic dominance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy Gap */}
      <section id="methodology" className="py-24 bg-[#202020] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00c1cf]/5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-['Outfit'] font-black leading-tight">
                Closing the <span className="text-[#00c1cf]">Strategy Gap</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  At Prism, we believe that 'Digital Transformation' is an essential component of modern growth—but on its own, it's too narrow. A business only truly scales when technology is anchored by high-level strategy and robust financial governance.
                </p>
                <p>
                  We help regional Victorian businesses look beyond isolated software updates to focus on the holistic pillars of a healthy enterprise: long-term strategic planning, smart asset acquisition, and proactive financial health management.
                </p>
                <p className="text-white font-bold text-xl italic uppercase tracking-tighter">
                  "Technology is the engine, but Strategy is the compass."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Strategic Planning", desc: "Long-term roadmaps that align your daily actions with your ultimate exit or expansion goals." },
                { title: "Financial Health", desc: "Deep-dive analysis of margins, cash flow, and ROI to ensure every dollar is working for you." },
                { title: "Asset Acquisition", desc: "Expert guidance on when and how to invest in plant, equipment, or business units." },
                { title: "Digital Integration", desc: "Leveraging technology not for its own sake, but as a force multiplier for your strategy." }
              ].map((pillar, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00c1cf]/50 transition-colors group">
                  <div className="mb-4 text-[#00c1cf] group-hover:scale-110 transition-transform origin-left">
                    <CheckCircle2 size={24} className="opacity-40" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                  <p className="text-sm border-t border-white/10 pt-4 text-gray-500 leading-relaxed font-medium">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Consulting Pillars */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-5xl font-['Outfit'] font-black">A Holistic Approach</h2>
            <div className="w-20 h-1.5 bg-[#00c1cf] mx-auto rounded-full" />
            <p className="text-xl text-gray-600 leading-relaxed">
              Our consulting framework is built on four unbreakable pillars that transition your business from spreadsheet-reactive to market-proactive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-blue-50 outline-dotted outline-blue-100 rounded-[3rem] -rotate-2"></div>
              <img 
                src="/digital_roadmap.png" 
                alt="Business Consulting Strategy Map" 
                className="relative w-full rounded-[2.5rem] shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8 pl-0 lg:pl-12">
              {[
                { 
                  title: "Strategic Vision", 
                  desc: "Defining clear, quantifiable milestones for the next 12, 36, and 60 months.",
                  icon: <Target className="text-[#00c1cf]" size={32} />
                },
                { 
                  title: "Operational Efficiency", 
                  desc: "Redesigning workflows and digital systems to maximize output while minimizing owner involvement.",
                  icon: <Zap className="text-[#00c1cf]" size={32} />
                },
                { 
                  title: "Financial Governance", 
                  desc: "Establishing rigorous reporting cycles that provide total clarity on profitability and cash reserves.",
                  icon: <PieChart className="text-[#00c1cf]" size={32} />
                },
                { 
                  title: "Capital & Growth", 
                  desc: "Evaluating M&A opportunities, asset financing, and risk-managed expansion strategies.",
                  icon: <Briefcase className="text-[#00c1cf]" size={32} />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0 w-16 h-16 bg-[#00c1cf]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#00c1cf] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-wider">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Transformation Roadmap */}
      <section id="consulting-roadmap" className="py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-['Outfit'] font-black">Your Consulting Journey</h2>
            <p className="text-gray-500 font-medium tracking-tight uppercase text-xs">A structured path to total business clarity</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "01. Full Diagnostic",
                desc: "We conduct an intensive audit of your existing data, systems, and strategic goals to identify every profit leak and growth lever.",
                icon: <BarChart3 size={32} />
              },
              {
                title: "02. Strategy Design",
                desc: "Creation of a bespoke roadmap covering financial health, asset planning, and digital transformation milestones.",
                icon: <Target size={32} />
              },
              {
                title: "03. Active Execution",
                desc: "We don't just hand you a report. We work alongside your leadership team to implement change and measure impact in real-time.",
                icon: <Zap size={32} />
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                <div className="w-16 h-16 bg-[#00c1cf]/10 rounded-2xl flex items-center justify-center text-[#00c1cf] mb-8 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black font-['Outfit'] mb-4 leading-tight">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center italic text-gray-600">
          <p className="text-2xl leading-relaxed mb-8 font-medium">
            "Prism's consulting shifted our focus from simply surviving the next quarter to aggressively planning our next three years. The ROI on our strategic planning session was visible within months."
          </p>
          <div className="flex items-center justify-center space-x-4 not-italic">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#00c1cf]">
              <Users size={20} />
            </div>
            <div className="text-left">
              <p className="font-black uppercase tracking-widest text-sm text-[#202020]">General Manager</p>
              <p className="text-xs font-bold text-[#00c1cf] uppercase tracking-widest leading-tight">Victorian Manufacturing Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 bg-blue-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00c1cf]/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be70ae]/10 blur-[100px] -ml-48 -mb-48 rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-['Outfit'] font-black leading-tight italic">
            Transition to <span className="text-[#00c1cf]">Proactive</span> Scale.
          </h2>
          <p className="text-xl text-blue-100/60 leading-relaxed font-medium">
            Take our Free Strategic Diagnostic or book a confidential consulting session to discuss your vision for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button 
              onClick={() => onDiagnostic(true)}
              className="px-12 py-6 bg-[#00c1cf] text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-[#00a8b5] transition-all hover:-translate-y-1 active:scale-95"
            >
              Start Your Diagnostic
            </button>
            <button 
              onClick={onConsultation}
              className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/20 transition-all active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;
