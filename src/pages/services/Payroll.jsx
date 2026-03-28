import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  LayoutDashboard, 
  Clock, 
  ChevronRight,
  Zap,
  BarChart3
} from 'lucide-react';

const Payroll = ({ onBack, onConsultation, onHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      title: "Automated Accuracy",
      desc: "Single Touch Payroll (STP) automation and real-time reconciliation to eliminate manual errors and ensure day-one precision.",
      icon: <Zap size={28} />
    },
    {
      title: "Compliance Governance",
      desc: "Stay ahead of changing PAYG, Superannuation, and Award regulations with our meticulously managed governance protocols.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "Employee Portals",
      desc: "Provide your team with self-service access to payslips, leave requests, and year-to-date reports via a secure, intuitive interface.",
      icon: <Users size={28} />
    },
    {
      title: "Strategic Integration",
      desc: "Direct synchronization with your ledger and cash flow forecasting models for a unified view of your business financial health.",
      icon: <BarChart3 size={28} />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-sm font-black uppercase tracking-widest text-slate-500 hover:text-indigo-900 transition-colors group"
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
              <div className="inline-flex items-center space-x-3 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-900 animate-in fade-in slide-in-from-left duration-700">
                Level 03: Operational Integrity
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-blue-950 tracking-tighter leading-[0.95] font-display animate-in fade-in slide-in-from-left duration-1000">
                Precision Payroll.<br />
                <span className="text-indigo-600">Compliant Growth.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium animate-in fade-in slide-in-from-left duration-1000 delay-200">
                Automated, error-free payroll systems designed for regional excellence. Move from reactive recording to proactive governance.
              </p>
              <div className="pt-4 animate-in fade-in slide-in-from-left duration-1000 delay-300">
                <button 
                  onClick={onConsultation}
                  className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl hover:-translate-y-1 flex items-center group"
                >
                  Streamline Your Systems
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-500">
              <div className="absolute -inset-10 bg-indigo-50/50 blur-[80px] rounded-full" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src="/Prism_payroll_Systems.jpg" 
                  alt="Modern Payroll Management" 
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
               Customised Solutions
             </h2>
             <p className="text-lg text-slate-500 font-medium">
               We don't believe in one-size-fits-all. Our payroll services are bespoke architectures designed to sync perfectly with your business goals.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((item, idx) => (
              <div key={idx} className="p-12 bg-white rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-indigo-900/5 transition-all group flex flex-col items-start text-left">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-950 mb-6 font-display">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex items-center justify-between gap-20">
             <div className="lg:w-1/2 mb-12 lg:mb-0">
                <div className="space-y-8">
                   <h2 className="text-4xl lg:text-6xl font-black text-blue-950 font-display leading-[0.95]">
                     Trust Your Team.<br />
                     <span className="text-indigo-600">Trust the Process.</span>
                   </h2>
                   <p className="text-lg text-slate-500 font-medium leading-relaxed">
                     Payroll is more than just a transaction; it's the heartbeat of your team's culture. We ensure that every payment is accurate, every super contribution is accounted for, and every team member feels supported.
                   </p>
                   <div className="space-y-4 pt-4">
                      {['Accurate Superannuation Tracking', 'STP Phase 2 Compliance', 'Modern Award Interpretation'].map(point => (
                        <div key={point} className="flex items-center space-x-3 text-sm font-bold text-slate-700">
                          <CheckCircle2 size={18} className="text-emerald-500" />
                          <span>{point}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-6">
                   <div className="bg-indigo-900 p-12 rounded-[2.5rem] text-white flex flex-col justify-between aspect-square">
                      <Clock size={40} className="text-indigo-300" />
                      <p className="text-2xl font-black font-display">Time-Saving<br />Excellence</p>
                   </div>
                   <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between aspect-square shadow-xl">
                      <ShieldCheck size={40} className="text-indigo-600" />
                      <p className="text-2xl font-black text-blue-950 font-display">Governance-First<br />Architecture</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-indigo-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900 blur-[120px] opacity-30 rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 font-display leading-[0.95]">
            Elevate Your <span className="text-indigo-400">Payroll Experience.</span>
          </h2>
          <p className="text-xl text-indigo-100/70 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
            Ready to experience a seamless, efficient, and 100% compliant payroll journey? Let Prism handle the complexity while you lead the growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={onConsultation}
              className="bg-indigo-600 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-2xl hover:shadow-indigo-600/20"
            >
              Get Started Today
            </button>
            <button 
              onClick={onBack}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
            >
              Back to Hub
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">© 2026 Prism Business Initiatives. Integrity in Every Payment.</p>
        </div>
      </footer>
    </div>
  );
};

export default Payroll;
