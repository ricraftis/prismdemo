import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ClipboardCheck, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  Zap,
  BarChart3,
  Search
} from 'lucide-react';

const BAS = ({ onBack, onConsultation, onHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      title: "Meticulous Preparation",
      desc: "Comprehensive ledger review and transaction reconciliation to ensure every BAS statement is 100% accurate and audit-ready.",
      icon: <Search size={28} />
    },
    {
      title: "Compliant Lodging",
      desc: "Guaranteed timely submission to the ATO, eliminating late-filing penalties and ensuring total regulatory peace of mind.",
      icon: <ClipboardCheck size={28} />
    },
    {
      title: "Strategic Concessions",
      desc: "We pinpoint every available deduction and concession, optimizing your tax position while maintaining strict compliance.",
      icon: <Zap size={28} />
    },
    {
      title: "Audit Protection",
      desc: "Meticulous record-keeping and governance that provide a bulletproof shield for your business during ATO reviews.",
      icon: <ShieldCheck size={28} />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-blue-900 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Hub</span>
          </button>
          
          <button 
            onClick={onHome}
            className="flex items-center space-x-4 hover:scale-105 transition-transform"
          >
             <img 
              src="/Prism Business Intiatives - 300px.jpg" 
              alt="Prism Logo" 
              className="h-10 w-auto"
            />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center space-x-3 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-900">
                Level 03: Taxation Governance
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-blue-950 tracking-tighter leading-[0.95] font-display">
                BAS Completion & <span className="text-blue-600">Pure Lodging.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                Navigating ATO obligations with total precision. We turn complex compliance into a seamless, automatic part of your growth strategy.
              </p>
              <div className="pt-4">
                <button 
                  onClick={onConsultation}
                  className="bg-blue-950 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl hover:-translate-y-1 flex items-center group"
                >
                  Streamline Your Compliance
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-10 bg-blue-50/50 blur-[80px] rounded-full" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="/PrismBAS_Systems.jpg" 
                  alt="BAS and Taxation Governance" 
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
             <h2 className="text-4xl lg:text-6xl font-black text-blue-950 font-display leading-[0.95] mb-8">
               Governance Excellence
             </h2>
             <p className="text-lg text-slate-500 font-medium leading-relaxed">
               Managing BAS isn't just about filing forms—it's about protecting your legacy. Our experts ensure your business remains bulletproof and transparent at every level.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((item, idx) => (
              <div key={idx} className="p-12 bg-white rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group flex flex-col items-start text-left">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-10 text-blue-900 group-hover:bg-blue-950 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-950 mb-6 font-display">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex items-center justify-between gap-24">
             <div className="lg:w-1/2 mb-16 lg:mb-0">
               <h2 className="text-4xl lg:text-6xl font-black text-blue-950 font-display leading-[0.95] mb-10">
                 Clear Direction for <span className="text-blue-600">Ambitious Scale.</span>
               </h2>
               <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
                  <p>
                    Most regional SMEs get 'compliance-only' support, leaving them to navigate actual growth alone. Prism bridges that gap.
                  </p>
                  <p>
                    By starting with an unbreakable foundation of debt-ready data and BAS integrity, we provide the foresight needed to scale with total confidence.
                  </p>
               </div>
               <div className="mt-12 flex items-center space-x-10 grayscale opacity-40">
                  <span className="font-black text-sm tracking-[0.3em]">IPA AU</span>
                  <span className="font-black text-sm tracking-[0.3em]">REGISTERED AGENT</span>
               </div>
             </div>
             <div className="lg:w-1/2">
                <div className="relative group">
                   <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                   <div className="relative bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 italic text-xl text-slate-700 leading-[1.6]">
                     "The 90-day action plan gave our board the confidence to secure a high-value expansion loan. We couldn't have done it without Prism's expert BAS forecasting and governance."
                     <footer className="mt-8 not-italic">
                       <p className="text-sm font-black text-blue-950 uppercase tracking-widest">— Regional MD, Professional Services</p>
                     </footer>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-blue-950 text-center relative overflow-hidden font-medium">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900 blur-[120px] opacity-30 rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 font-display leading-[0.95]">
            Secure Your <span className="text-blue-400">Taxation Integrity.</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-16 max-w-2xl mx-auto">
             Experience a seamless, transparent, and 100% compliant lodging journey. Don't let financial fog hold your business back any longer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={onConsultation}
              className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-600/20"
            >
              Start My Health Check
            </button>
            <button 
              onClick={onBack}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
            >
              Explore Ecosystem
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">© 2026 Prism Business Initiatives. Total Taxation Governance.</p>
        </div>
      </footer>
    </div>
  );
};

export default BAS;
