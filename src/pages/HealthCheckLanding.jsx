import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Clock,
  ChevronRight,
  Zap,
  Target,
  FileSearch,
  Users,
  ArrowLeft,
  FileDown,
  Layout,
  MousePointerClick
} from 'lucide-react';
import SurveyFlow from '../components/Survey/SurveyFlow';

const HealthCheckLanding = ({ onHome, onConsultation }) => {
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSurvey = () => {
    setShowSurvey(true);
    setTimeout(() => {
        const element = document.getElementById('diagnostic-engine');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (showSurvey) {
    return (
      <div className="min-h-screen bg-blue-950 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 p-8">
            <button onClick={() => setShowSurvey(false)} className="text-blue-300 hover:text-white flex items-center space-x-2 transition-colors font-black text-xs uppercase tracking-widest">
                <ArrowLeft size={16} />
                <span>Back to Overview</span>
            </button>
        </div>
        <div id="diagnostic-engine" className="max-w-4xl mx-auto">
           <div className="text-center mb-16">
              <h1 className="text-3xl font-black text-[#00c1cf] uppercase tracking-widest mb-4 font-display">SME Growth Diagnostic</h1>
              <p className="text-white/60 font-medium tracking-tight">Professional Strategic Auditing by Prism Business Initiatives</p>
           </div>
           <SurveyFlow onComplete={() => setShowSurvey(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 relative overflow-hidden">
      {/* Focused Standalone Header */}
      <header className="absolute top-0 left-0 w-full z-50 py-8 px-6 bg-white/50 backdrop-blur-md border-b border-white/20">
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4 cursor-pointer" onClick={onHome}>
                <img 
                  src="/Prism Business Intiatives - 300px.jpg" 
                  alt="Prism Logo" 
                  className="h-10 w-auto object-contain rounded-lg shadow-sm" 
                />
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-tight text-blue-950 leading-none font-display">PRISM</span>
                  <span className="text-[6px] uppercase tracking-[0.3em] text-slate-500 font-bold">Business Initiatives</span>
                </div>
            </div>
            <button 
                onClick={onHome}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-950 transition-colors flex items-center space-x-2"
            >
                <span>Return to site</span>
                <ArrowRight size={12} />
            </button>
         </div>
      </header>

      {/* Problem Hero (P) - Overhauled for Visceral Impact */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-52 bg-[#0a0a0b] text-white overflow-hidden">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[180px] -mr-96 -mt-96" />
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[180px] -ml-96 -mb-96" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
               <div className="inline-block px-4 py-1.5 bg-[#00c1cf]/10 border border-[#00c1cf]/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[#00c1cf] mb-12 animate-fade-in">
                  Stop Guessing. Start Scaling.
               </div>
               <h1 className="text-6xl lg:text-[100px] font-black tracking-tighter leading-[0.85] mb-16 font-display">
                  The Founder's Ceiling:<br />
                  <span className="spectrum-gradient">Why 90% of Regional Businesses Stagnate.</span>
               </h1>
               <p className="text-2xl lg:text-3xl text-white/50 mb-16 leading-relaxed max-w-3xl mx-auto font-medium font-display italic">
                  "You're working harder than ever, but your net profit doesn't reflect the effort. If you aren't scaling, you're shrinking."
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <button 
                        onClick={scrollToSurvey}
                        className="w-full sm:w-auto bg-[#00c1cf] text-white px-16 py-8 rounded-[2rem] font-black text-2xl hover:bg-[#00a8b5] transition-all shadow-[0_25px_60px_-15px_rgba(0,193,207,0.4)] flex items-center justify-center group active:scale-95"
                    >
                        Start My Health Check
                        <ChevronRight size={28} className="ml-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest flex items-center space-x-2">
                        <Clock size={16} />
                        <span>Completed in 7 Minutes</span>
                    </div>
               </div>
            </div>
         </div>
      </section>

      {/* Agitation Phase (A) - Visceral SME Focus */}
      <section className="py-40 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
               <div className="relative">
                  <div className="absolute -inset-10 bg-blue-50/50 rounded-[4rem] -rotate-1 pointer-events-none" />
                  <div className="relative space-y-16">
                     <h2 className="text-5xl lg:text-7xl font-black text-blue-950 font-display leading-[0.9] tracking-tighter">
                        Does the business <span className="spectrum-gradient">own you?</span>
                     </h2>
                     <div className="space-y-10 text-xl text-slate-500 font-medium leading-relaxed">
                        <p>
                           Regional business owners work an average of <span className="text-blue-950 font-black italic">60+ hours per week</span>—yet most struggle to pay themselves a market salary. 
                        </p>
                        <p>
                           You're the central hub for every decision. If you step away for 30 days, the engine stalls. This isn't a business; it's a high-stakes, high-stress job.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-10 border-t border-slate-100">
                           <div className="space-y-2">
                              <span className="text-4xl font-black text-blue-950">92%</span>
                              <p className="text-xs uppercase font-black tracking-widest text-[#00c1cf]">Of SME's lack a forecast</p>
                           </div>
                           <div className="space-y-2">
                              <span className="text-4xl font-black text-blue-950">84%</span>
                              <p className="text-xs uppercase font-black tracking-widest text-[#00c1cf]">Are financially reactive</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  {[
                     { 
                        title: "The Profit Leakage", 
                        desc: "Unseen operational friction and unoptimised margins are quietly draining your bank account while you sleep.",
                        icon: <Zap size={32} className="text-orange-500" />
                     },
                     { 
                        title: "The Growth Trap", 
                        desc: "Scaling without data is just guessing with higher stakes. Most owners 'grow themselves broke' by chasing revenue without margin.",
                        icon: <Target size={32} className="text-blue-600" />
                     },
                     { 
                        title: "The Exhaustion Point", 
                        desc: "You can't work harder to solve a structural problem. Excellence in your trade won't fix a broken business engine.",
                        icon: <Users size={32} className="text-indigo-600" />
                     }
                  ].map((item, i) => (
                     <div key={i} className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-2xl">
                        <div className="flex items-start space-x-8">
                           <div className="p-5 bg-white rounded-[1.5rem] shadow-sm group-hover:bg-blue-950 group-hover:text-white group-hover:scale-110 transition-all">
                              {item.icon}
                           </div>
                           <div>
                              <h3 className="text-2xl font-black text-blue-950 mb-4 font-display leading-tight">{item.title}</h3>
                              <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Visual Evidence Section - [NEW] Show, Don't Just Tell */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
               <div className="mb-20 lg:mb-0">
                  <div className="inline-block px-4 py-1.5 bg-blue-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-10">Visual Evidence</div>
                  <h2 className="text-5xl lg:text-7xl font-black text-blue-950 font-display leading-[0.95] tracking-tighter mb-10">
                     A Strategic <span className="text-blue-600 italic">Playbook</span> for Growth.
                  </h2>
                  <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                     This isn't just another quiz. You'll receive a professional diagnostic report that identifies your "Growth Readiness" and points directly to your profit leaks.
                  </p>
                  <ul className="space-y-6">
                     {[
                        "Cash Flow Sustainability Score",
                        "Structural Operational Audit",
                        "Strategic Gap Identification",
                        "Actionable Scale Roadmap"
                     ].map((point, i) => (
                        <li key={i} className="flex items-center space-x-4">
                           <div className="w-10 h-10 bg-[#00c1cf]/10 text-[#00c1cf] rounded-full flex items-center justify-center">
                              <CheckCircle2 size={20} />
                           </div>
                           <span className="text-lg font-bold text-blue-950">{point}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="relative group">
                  <div className="absolute -inset-10 bg-[#00c1cf]/5 rounded-[4rem] group-hover:rotate-1 transition-transform" />
                  <div className="relative bg-white rounded-[3.5rem] p-10 lg:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-white">
                     {/* Mockup Report GUI */}
                     <div className="space-y-10 opacity-70">
                        <div className="flex justify-between items-center pb-8 border-b border-slate-100">
                           <div className="space-y-2">
                              <p className="text-[10px] font-black uppercase tracking-widest text-[#00c1cf]">Diagnostic Result</p>
                              <p className="text-xl font-black text-blue-950">Scale-Ready Score</p>
                           </div>
                           <div className="text-4xl font-black text-blue-950">74%</div>
                        </div>
                        <div className="space-y-6">
                           {[65, 82, 45, 90].map((w, i) => (
                              <div key={i} className="space-y-2">
                                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                    <span>Factor 0{i+1}</span>
                                    <span>{w}%</span>
                                 </div>
                                 <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${w}%` }} />
                                 </div>
                              </div>
                           ))}
                        </div>
                        <div className="pt-10">
                           <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                 <FileDown className="text-blue-950" size={24} />
                                 <p className="text-sm font-black text-blue-950 uppercase tracking-widest">Download Full Report</p>
                              </div>
                              <ChevronRight className="text-slate-300" size={20} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Solution Execution Section (S) */}
      <section className="py-52 bg-blue-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
            <h2 className="text-5xl lg:text-8xl font-black mb-12 font-display leading-[0.9] tracking-tighter">
               Total Clarity in <span className="text-[#00c1cf]">7 Minutes.</span>
            </h2>
            <p className="text-2xl text-blue-100/60 mb-20 max-w-2xl mx-auto font-medium leading-relaxed italic">
               The SME Growth Diagnostic is a free service from Prism Business Initiatives to identify the gaps in your financial engine.
            </p>
            <button 
               onClick={scrollToSurvey}
               className="w-full sm:w-auto bg-white text-blue-950 px-20 py-10 rounded-[2.5rem] font-black text-3xl hover:bg-slate-50 transition-all shadow-[0_30px_100px_-20px_rgba(0,0,0,0.6)] active:scale-95 group"
            >
               Unlock Your Score
               <ArrowRight size={32} className="ml-6 inline-block group-hover:translate-x-3 transition-transform" />
            </button>
            <p className="mt-16 text-white/30 text-xs font-bold uppercase tracking-[0.3em]">
               No Credit Card Required • Instant PDF Result • Confidential Audit
            </p>
         </div>
      </section>

      {/* Focused Footer */}
      <footer className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex flex-wrap justify-center gap-16 items-center opacity-30 h-10 overflow-hidden mb-16 grayscale hover:grayscale-0 transition-all duration-700">
               <img src="/CPA.png" alt="CPA" className="h-8 w-auto object-contain" />
               <img src="/registeredBASagent.png" alt="BAS" className="h-6 w-auto object-contain" />
               <img src="/xero-advisor-certified-individual-badge.avif" alt="Xero" className="h-6 w-auto object-contain" />
            </div>
            <div className="space-y-8">
               <div className="flex items-center justify-center space-x-3 opacity-20 grayscale hover:grayscale-0 transition-all">
                  <img src="/Prism Business Intiatives - 300px.jpg" alt="Prism" className="h-12 w-auto object-contain grayscale" />
                  <div className="flex flex-col text-left">
                     <span className="text-xl font-black tracking-tight text-blue-950 leading-none">PRISM</span>
                     <span className="text-[6px] uppercase tracking-[0.3em] text-slate-500 font-black">Business Initiatives</span>
                  </div>
               </div>
               <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
                  © 2026. Serving Regional Victoria.
               </p>
               <div className="flex items-center justify-center space-x-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <button onClick={onHome} className="hover:text-blue-950 transition-colors">Return to Site</button>
                  <button onClick={onConsultation} className="hover:text-blue-950 transition-colors">Contact Strategy Team</button>
               </div>
            </div>
         </div>
      </header>
    </div>
  );
};

export default HealthCheckLanding;
