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
  Users
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
      <div className="min-h-screen bg-blue-950 py-24 px-6">
        <div id="diagnostic-engine" className="max-w-4xl mx-auto">
           <div className="text-center mb-16">
              <h1 className="text-3xl font-black text-[#00c1cf] uppercase tracking-widest mb-4">SME Growth Diagnostic</h1>
              <p className="text-white/60 font-medium">Bespoke Analysis from Prism Business Initiatives</p>
           </div>
           <SurveyFlow onComplete={() => setShowSurvey(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 relative overflow-hidden">
      {/* High-Impact Problem Hero (P) */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-blue-950 text-white overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 blur-[150px] opacity-20 -mr-48 -mt-48" />
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 blur-[150px] opacity-20 -ml-48 -mb-48" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
               <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-300 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  <span>Strategic Briefing</span>
               </div>
               <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-12 font-display">
                  The Founder's Ceiling:<br />
                  <span className="text-[#00c1cf]">Why 90% of Regional Businesses Stagnate.</span>
               </h1>
               <p className="text-xl lg:text-2xl text-blue-100/70 mb-12 leading-relaxed max-w-2xl font-medium">
                  You are working harder than ever, but your net profit doesn't reflect the effort. If you aren't scaling, you're shrinking.
               </p>
               <button 
                  onClick={scrollToSurvey}
                  className="bg-[#00c1cf] text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-[#00a8b5] transition-all shadow-2xl hover:shadow-[#00c1cf]/30 flex items-center justify-center group active:scale-95"
               >
                  Start My Health Check
                  <ChevronRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
         </div>
      </section>

      {/* Agitation Section (A) */}
      <section className="py-32 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="space-y-12">
                  <h2 className="text-4xl lg:text-6xl font-black text-blue-950 font-display leading-[0.95]">
                     You're the <span className="text-blue-600">Bottleneck.</span>
                  </h2>
                  <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
                     <p>
                        Most regional business owners are trapped in a reactive cycle. You're putting out daily fires while your high-level strategy sits on the back burner.
                     </p>
                     <p className="p-8 bg-slate-50 border-l-8 border-blue-600 rounded-r-3xl italic">
                        "If you step away for 30 days, does the engine stall? If the answer is yes, you don't have a business—you have a high-stress job."
                     </p>
                     <p>
                        Spreadsheet chaos, guessing your cash flow, and reactive management are quietly draining your potential. You're busy, but are you building a legacy?
                     </p>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 gap-8">
                  {[
                     { 
                        title: "Profit Leaks", 
                        desc: "Unidentified expenses and inefficient processes are eroding your hard-earned margins every single day.",
                        icon: <Zap size={28} className="text-orange-500" />
                     },
                     { 
                        title: "Decision Fatigue", 
                        desc: "Flying blind without real-time data leads to 'gut-feel' decisions that risk your future scalability.",
                        icon: <Target size={28} className="text-blue-600" />
                     },
                     { 
                        title: "Growth Burnout", 
                        desc: "Trying to do everything yourself is a recipe for personal exhaustion and business stagnation.",
                        icon: <Users size={28} className="text-indigo-600" />
                     }
                  ].map((item, i) => (
                     <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all group shadow-sm hover:shadow-xl">
                        <div className="flex items-start space-x-6">
                           <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                              {item.icon}
                           </div>
                           <div>
                              <h3 className="text-2xl font-black text-blue-950 mb-4 font-display">{item.title}</h3>
                              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Solution Section (S) */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-100 rounded-full blur-[180px] opacity-40" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
               <div className="inline-block px-4 py-1.5 bg-blue-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-4">The Antidote</div>
               <h2 className="text-5xl lg:text-7xl font-black text-blue-950 font-display leading-[0.95]">
                  The SME Growth <span className="text-[#00c1cf]">Diagnostic.</span>
               </h2>
               <p className="text-xl text-slate-500 font-medium">
                  7 Minutes to Total Clarity. Identify your profit leaks and map your path to 100% scale readiness.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-20">
               {[
                  { title: "Bespoke Analysis", desc: "A detailed report tailored to your specific regional industry.", icon: <FileSearch /> },
                  { title: "Strategic Roadmap", desc: "Immediate, actionable steps to decouple your time from operations.", icon: <TrendingUp /> },
                  { title: "100% Free Service", desc: "A foundational standard from Prism Business Initiatives.", icon: <ShieldCheck /> }
               ].map((item, i) => (
                  <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 text-center space-y-6 transform hover:-translate-y-2 transition-all">
                     <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {React.cloneElement(item.icon, { size: 32 })}
                     </div>
                     <h3 className="text-2xl font-black text-blue-950 font-display">{item.title}</h3>
                     <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>

            <div className="bg-blue-950 rounded-[4rem] p-10 lg:p-20 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none" />
               <div className="relative z-10 lg:flex items-center justify-between gap-16">
                  <div className="lg:w-1/2 mb-12 lg:mb-0">
                     <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-tight font-display">Ready for the <span className="text-[#00c1cf]">Truth?</span></h3>
                     <p className="text-blue-100/70 text-lg font-medium leading-relaxed mb-8">
                        Stop guessing. Our SME Growth Diagnostic is Australia's leading strategic assessment for regional business leaders. This is a free service provided by Prism Business Initiatives.
                     </p>
                     <div className="flex flex-col space-y-4">
                        {['PDF Growth Profile included', 'Takes less than 7 minutes', 'No credit card required'].map((p, i) => (
                           <div key={i} className="flex items-center space-x-3">
                              <CheckCircle2 size={16} className="text-[#00c1cf]" />
                              <span className="font-bold text-sm">{p}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="lg:w-1/2 flex justify-center">
                     <button 
                        onClick={scrollToSurvey}
                        className="w-full lg:w-auto bg-white text-blue-950 px-16 py-8 rounded-3xl font-black text-2xl hover:bg-slate-50 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.5)] active:scale-95 group"
                     >
                        Start Now
                        <ArrowRight size={28} className="ml-4 inline-block group-hover:translate-x-2 transition-transform" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Trust Credits */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Professional Strategy & Governance</p>
            <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
               <img src="/CPA.png" alt="CPA Australia" className="h-10 w-auto object-contain" />
               <img src="/registeredBASagent.png" alt="BAS Agent" className="h-8 w-auto object-contain" />
               <img src="/xero-advisor-certified-individual-badge.avif" alt="Xero Advisor" className="h-8 w-auto object-contain" />
            </div>
            <div className="mt-20 pt-10 border-t border-slate-100">
               <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 cursor-pointer hover:text-blue-950 transition-colors" onClick={onHome}>
                  © 2026 Prism Business Initiatives. Return to Main Ecosystem.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default HealthCheckLanding;
