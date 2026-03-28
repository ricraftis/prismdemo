import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  FileSearch, 
  CheckCircle2, 
  BarChart3, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  LayoutDashboard,
  Zap,
  ArrowLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import Navigation from '../../components/Navigation';

const Bookkeeping = ({ onBack, onConsultation, onHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "MYOB & Xero Mastery",
      desc: "Harness the power of Australia's leading accounting platforms with bespoke integration and accurate tracking.",
      icon: <LayoutDashboard size={28} />
    },
    {
      title: "Bespoke Solutions",
      desc: "Services that align with your unique business goals, from startup to enterprise.",
      icon: <Zap size={28} />
    },
    {
      title: "Time Efficiency",
      desc: "Focus on growth while we ensure your records are impeccably organised.",
      icon: <Clock size={28} />
    },
    {
      title: "Total Governance",
      desc: "Comprehensive management from daily transactions to BAS lodging.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "Strategic Insights",
      desc: "Understand your position at a glance with clear, regular financial reporting.",
      icon: <BarChart3 size={28} />
    },
    {
      title: "Unparalleled Support",
      desc: "A partnership approach with personalised support and clear communication.",
      icon: <MessageSquare size={28} />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Common Navigation */}
      <Navigation 
        onBack={onBack}
        onHome={onHome}
        onConsultation={onConsultation}
        showBack={true}
        isLight={true}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center space-x-3 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-900">
                Precision Governance
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-[#202020] tracking-tighter leading-[0.95] font-display">
                Revolutionise Your <span className="spectrum-gradient">Financial Management.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                Effective bookkeeping is the cornerstone of every successful business. Transform your numbers into strategic assets with Australia's leading expertise.
              </p>
              <div className="pt-4">
                <button 
                  onClick={onConsultation}
                  className="bg-blue-950 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl hover:-translate-y-1 flex items-center group"
                >
                  Experience the Difference
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-10 bg-blue-50/50 blur-[80px] rounded-full" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="/bookkeeping_hero.png" 
                  alt="Modern Financial Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex items-center justify-between mb-24 gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
               <h2 className="text-4xl lg:text-5xl font-black text-blue-950 font-display leading-[0.95]">
                 Your Global View of Local Success.
               </h2>
            </div>
            <div className="lg:w-1/2">
               <p className="text-lg text-slate-500 font-medium leading-relaxed">
                 Our dedicated team leverages cutting-edge MYOB Accounting software to transform your experience. We move you from "catching up" to "moving ahead," providing clear direction at every stage of your growth.
               </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-blue-950 group-hover:bg-blue-950 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-blue-950 mb-4 font-display">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Focus - MYOB */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1">
                <div className="relative p-12 bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden group">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32" />
                   <div className="relative z-10 space-y-8">
                      <div className="flex items-center space-x-4 mb-8">
                         <div className="p-3 bg-blue-100 text-blue-900 rounded-xl"><FileSearch size={24} /></div>
                         <p className="text-xs font-black uppercase tracking-widest text-slate-400">Integrated Ecosystem</p>
                      </div>
                      <h3 className="text-3xl font-black text-blue-950 font-display">Harness the Power of MYOB & Xero.</h3>
                      <p className="text-slate-500 font-medium">
                        Our proficiency in MYOB and Xero ensures seamless integration, accurate tracking, and insightful reporting—all at your fingertips. We tailor the software to meet your specific operational needs.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                         {['Real-time Entry', 'Cloud Automation', 'Direct ATO Links', 'Predictive Analysis'].map(tag => (
                           <div key={tag} className="flex items-center space-x-2 text-xs font-bold text-slate-700">
                             <CheckCircle2 size={16} className="text-emerald-500" />
                             <span>{tag}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
             <div className="order-1 lg:order-2 space-y-8">
                <h2 className="text-4xl lg:text-6xl font-black text-blue-950 font-display leading-[0.95]">
                  Focus on Growth.<br />
                  <span className="text-[#00c1cf]">Leave the Numbers to Us.</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
                  <p>
                    Don't let complex bookkeeping tasks slow you down. Our streamlined processes and advanced tools ensure your financial records are impeccably organised and always up-to-date.
                  </p>
                  <p>
                    From day-to-day transactions to preparing and lodging BAS statements, our comprehensive services cover all aspects of bookkeeping, giving you total peace of mind.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final Discovery CTA */}
      <section className="py-32 px-6 bg-blue-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900 blur-[120px] opacity-30 rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 font-display leading-[0.95]">
            Elevate Your Business with <span className="text-[#00c1cf]">Strategic Data.</span>
          </h2>
          <p className="text-xl text-blue-100/70 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
            Discover how we can help turn your financial data into a strategic asset. Partner with Prism Business Initiatives for a seamless, efficient, and transparent bookkeeping journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={onConsultation}
              className="bg-[#00c1cf] text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-[#00a8b5] transition-all shadow-2xl hover:shadow-[#00c1cf]/20"
            >
              Contact Us
            </button>
            <button 
              onClick={onBack}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
            >
              Explore Hub
            </button>
          </div>
        </div>
      </section>

      {/* Modern Footer Integration */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">© 2026 Prism Business Initiatives. Strategic Excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Bookkeeping;
