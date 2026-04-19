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
  Users,
  ArrowLeft,
  FileDown
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
      {/* Centred minimalist logo header */}
      <header className="absolute top-0 left-0 w-full z-50 py-16 px-6">
         <div className="max-w-7xl mx-auto flex justify-center items-center">
            <div className="flex items-center space-x-5 cursor-pointer" onClick={onHome}>
                <img 
                  src="/Prism Business Intiatives - 300px.jpg" 
                  alt="Prism Logo" 
                  className="h-16 w-auto object-contain rounded-2xl shadow-2xl ring-4 ring-white" 
                />
                <div className="flex flex-col">
                  <span className="text-3xl font-black tracking-tighter text-blue-950 leading-none font-display">PRISM</span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black">Business Initiatives</span>
                </div>
            </div>
         </div>
      </header>

      {/* Hero (P) */}
      <section className="relative pt-64 pb-40 bg-[#0a0a0b] text-white overflow-hidden">
         <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/10 blur-[200px] -mr-96 -mt-96" />
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-block px-4 py-1.5 bg-[#00c1cf]/10 border border-[#00c1cf]/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[#00c1cf] mb-12">
                Regional Strategy Dashboard
            </div>
            <h1 className="text-6xl lg:text-[110px] font-black tracking-tighter leading-[0.85] mb-16 font-display">
                The Founder's Ceiling:<br />
                <span className="spectrum-gradient">Why 90% of SMEs Stagnate.</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-white/50 mb-16 leading-relaxed max-w-3xl mx-auto font-medium font-display italic">
                "Hard work isn't enough to scale. You need structural clarity. Excellence in your trade won't fix a broken business engine."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <button 
                    onClick={scrollToSurvey}
                    className="w-full sm:w-auto bg-[#00c1cf] text-white px-20 py-10 rounded-[2.5rem] font-black text-3xl hover:bg-[#00a8b5] transition-all shadow-[0_30px_70px_-15px_rgba(0,193,207,0.5)] flex items-center justify-center group"
                >
                    Start Free Diagnostic
                    <ChevronRight size={32} className="ml-4 group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
         </div>
      </section>

      {/* Agitation (A) */}
      <section className="py-40 bg-white">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
               <h2 className="text-5xl lg:text-7xl font-black text-blue-950 font-display leading-[0.9] tracking-tighter">
                  Are you <span className="text-blue-600">Guessing?</span>
               </h2>
               <div className="space-y-10 text-xl text-slate-500 font-medium leading-relaxed">
                  <p>
                    Most regional owners operate in a 'financial fog'. You know you're busy, but you don't know exactly where your profit is leaking.
                  </p>
                  <p className="p-10 bg-slate-50 border-l-8 border-blue-600 rounded-r-[3rem] italic text-blue-950 font-bold">
                    "If you can't step away for 30 days without the business stalling, you haven't built an asset—you've built a trap."
                  </p>
               </div>
            </div>
            <div className="space-y-8">
               {[
                  { title: "Profit Erosion", desc: "Operational friction is quietly draining your bank account every day.", icon: <Zap size={32} className="text-orange-500" /> },
                  { title: "Decision Fatigue", desc: "Reactive management is stealing your family time and your long-term vision.", icon: <Target size={32} className="text-blue-600" /> },
                  { title: "Scale Friction", desc: "Your current systems can't handle the growth you're working so hard to achieve.", icon: <Users size={32} className="text-indigo-600" /> }
               ].map((item, i) => (
                  <div key={i} className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-start space-x-8 shadow-sm">
                     <div className="p-5 bg-white rounded-2xl shadow-sm">{item.icon}</div>
                     <div>
                        <h3 className="text-2xl font-black text-blue-950 mb-4 font-display">{item.title}</h3>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Solution (S) */}
      <section className="py-40 bg-slate-50 overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-32 items-center">
               <div>
                  <div className="inline-block px-4 py-1.5 bg-blue-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-10">The Antidote</div>
                  <h2 className="text-5xl lg:text-[80px] font-black text-blue-950 font-display leading-[0.9] tracking-tighter mb-12">
                    7 Minutes to <span className="text-[#00c1cf]">Total Clarity.</span>
                  </h2>
                  <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                    A professional-grade diagnostic designed specifically for regional Victorian SMEs. No fluff, just strategic data.
                  </p>
                  <ul className="space-y-6">
                     {["Cash Flow Audit", "Scale Readiness Score", "Profit Leak Analysis"].map((t, i) => (
                        <li key={i} className="flex items-center space-x-4 text-xl font-bold text-blue-950">
                           <div className="w-8 h-8 bg-[#00c1cf]/10 text-[#00c1cf] rounded-full flex items-center justify-center"><CheckCircle2 size={18} /></div>
                           <span>{t}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="bg-white rounded-[4rem] p-16 shadow-2xl border border-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#00c1cf]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="space-y-12 relative z-10">
                     <div className="flex justify-between items-center pb-8 border-b border-slate-100">
                        <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Diagnostic Mockup</span>
                        <FileDown className="text-[#00c1cf]" size={24} />
                     </div>
                     <div className="space-y-6">
                        {[85, 70, 40].map((w, i) => (
                           <div key={i} className="h-3 bg-slate-50 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-950 rounded-full" style={{ width: `${w}%` }} />
                           </div>
                        ))}
                     </div>
                     <p className="text-sm font-bold text-slate-400 text-center italic">Professional Strategic Dashboard Provided Upon Completion</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-52 bg-blue-950 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent" />
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-6xl lg:text-9xl font-black mb-16 font-display leading-[0.85] tracking-tighter">
                Scale with <span className="text-[#00c1cf]">Confidence.</span>
            </h2>
            <button 
               onClick={scrollToSurvey}
               className="bg-white text-blue-950 px-20 py-10 rounded-[3rem] font-black text-4xl hover:bg-slate-50 transition-all shadow-2xl active:scale-95 group mb-12"
            >
               Get My Score
               <ArrowRight size={40} className="ml-6 inline-block group-hover:translate-x-4 transition-transform" />
            </button>
            <p className="text-white/40 font-black text-sm uppercase tracking-[0.5em]">Free Strategy Initiative by Prism Business Initiatives</p>
         </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="py-24 bg-white border-t border-slate-50">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <div className="flex items-center justify-center space-x-4 opacity-40 grayscale hover:grayscale-0 transition-all">
                <img src="/Prism Business Intiatives - 300px.jpg" alt="Prism" className="h-10 w-auto object-contain" />
                <div className="flex flex-col text-left">
                    <span className="text-xl font-black tracking-tight text-blue-950 leading-none">PRISM</span>
                    <span className="text-[6px] uppercase tracking-[0.3em] text-slate-500 font-bold">Business Initiatives</span>
                </div>
            </div>
            <div className="flex justify-center space-x-12 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <button onClick={onHome} className="hover:text-blue-950 transition-colors">Return to Site</button>
                <button onClick={onConsultation} className="hover:text-blue-950 transition-colors">Direct Strategy Line</button>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-300 italic">© 2026. Regional Strategic Excellence.</p>
         </div>
      </footer>
    </div>
  );
};

export default HealthCheckLanding;
