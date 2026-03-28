import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  FileSearch, 
  Users, 
  BarChart3, 
  ArrowRight,
  ClipboardCheck,
  Search
} from 'lucide-react';

const FoundationalIntegrity = ({ onBack, onNavigateService, onConsultation, onDiagnostic }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#202020] font-['Plus_Jakarta_Sans']">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-[#00c1cf] hover:text-[#00a8b5] transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Overview</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Bookkeeping', 'Payroll', 'BAS'].map(item => (
              <button 
                key={item} 
                onClick={() => onNavigateService(item.toLowerCase())}
                className="text-sm font-bold uppercase tracking-widest hover:text-[#00c1cf] transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={onConsultation}
              className="px-6 py-2 bg-blue-950 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-blue-900 transition-all shadow-sm active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-emerald-50 rounded-full">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span className="text-emerald-700 text-xs font-black uppercase tracking-[0.2em]">Level 03: Foundational Integrity</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-['Outfit'] font-black leading-[1.1] text-[#202020] tracking-tight">
              Precision Data.<br />
              <span className="text-[#00c1cf]">Unbreakable</span> Trust.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
              We provide the decision-ready accuracy and regulatory peace of mind your business needs to scale. From flawless bookkeeping to compliant payroll, your foundation is our priority.
            </p>
            <div className="pt-4">
              <button 
                onClick={onConsultation}
                className="px-10 py-5 bg-blue-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl hover:-translate-y-1 active:scale-95 group flex items-center"
              >
                Secure Your Foundation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-10 bg-blue-50/50 blur-3xl rounded-full" />
            <img 
              src="/foundational_integrity_hero.png" 
              alt="Foundational Integrity Hub" 
              className="relative w-full rounded-[3rem] shadow-2xl border border-white/20 aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Core Hub - Three Main Services */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-['Outfit'] font-black tracking-tight text-blue-950">The Pillars of Governance</h2>
            <p className="text-lg text-gray-500 font-medium">We turn complex financial data into a strategic asset, ensuring your business operates with total transparency and compliance.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Bookkeeping */}
            <div className="group bg-[#f8fafc] p-12 rounded-[3rem] border border-slate-100 hover:border-[#00c1cf] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00c1cf]/5">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                <FileSearch className="text-[#00c1cf]" size={32} />
              </div>
              <h3 className="text-3xl font-['Outfit'] font-black mb-6">Decision-Ready Bookkeeping</h3>
              <p className="text-gray-600 leading-relaxed mb-10 font-medium">
                Harness the power of MYOB with bespoke processes tailored to your startup or established enterprise. Accurate tracking and insightful reporting at your fingertips.
              </p>
              <ul className="space-y-4 mb-12">
                {['Day-to-day transactions', 'MYOB or Xero integration', 'Insightful reporting'].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-sm font-bold text-slate-500">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onNavigateService('bookkeeping')}
                className="text-[#00c1cf] font-black uppercase tracking-[0.2em] text-xs flex items-center hover:translate-x-1 transition-transform group/link"
              >
                Service Details <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Payroll */}
            <div className="group bg-[#f8fafc] p-12 rounded-[3rem] border border-slate-100 hover:border-indigo-400 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-400/5">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                <Users className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-3xl font-['Outfit'] font-black mb-6">Compliant Payroll Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-10 font-medium">
                Streamline your payroll with state-of-the-art automation. We ensure accuracy, tax compliance, and an effortless experience for your employees.
              </p>
              <ul className="space-y-4 mb-12">
                {['Error-free processing', 'Tax & Law compliance', 'Self-service portals'].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-sm font-bold text-slate-500">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onNavigateService('payroll')}
                className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs flex items-center hover:translate-x-1 transition-transform group/link"
              >
                Payroll Excellence <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* BAS */}
            <div className="group bg-[#f8fafc] p-12 rounded-[3rem] border border-slate-100 hover:border-blue-900 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                <ClipboardCheck className="text-blue-900" size={32} />
              </div>
              <h3 className="text-3xl font-['Outfit'] font-black mb-6">Total Taxation Governance</h3>
              <p className="text-gray-600 leading-relaxed mb-10 font-medium">
                Navigating BAS obligations with ease. Our experts stay abreast of ATO regulations, providing timely lodging and meticulous reviews for total peace of mind.
              </p>
              <ul className="space-y-4 mb-12">
                {['Accurate BAS preparation', 'Timely ATO lodging', 'Ongoing tax strategy'].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-sm font-bold text-slate-500">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onNavigateService('bas')}
                className="text-blue-900 font-black uppercase tracking-[0.2em] text-xs flex items-center hover:translate-x-1 transition-transform group/link"
              >
                Governance Pack <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-24 pt-20 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
               <img src="/CPA.png" alt="CPA Australia" className="h-12 md:h-16 w-auto grayscale object-contain hover:grayscale-0 transition-all" />
               <img src="/registeredBASagent.png" alt="Registered BAS Agent" className="h-12 md:h-16 w-auto grayscale object-contain hover:grayscale-0 transition-all" />
               <img src="/xero-advisor-certified-individual-badge.avif" alt="Xero Advisor" className="h-16 md:h-20 w-auto grayscale object-contain hover:grayscale-0 transition-all" />
               <img src="/Partner-Program-logo-Purple-horizontal-300x91.avif" alt="Partner Program" className="h-8 md:h-12 w-auto grayscale object-contain hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section - Decision Ready */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/precision_bookkeeping_data.png" 
                alt="Precision Data Bookkeeping" 
                className="w-full rounded-[3rem] shadow-2xl border border-gray-100"
              />
              <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center space-x-3 text-blue-900 mb-2">
                   <BarChart3 size={20} />
                   <span className="font-black text-xs uppercase tracking-widest">Real-time Data</span>
                </div>
                <p className="text-2xl font-black font-['Outfit']">100% Accuracy</p>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-5xl font-['Outfit'] font-black leading-tight text-blue-950">Turn Financial Data into a <span className="text-[#00c1cf]">Strategic Asset</span></h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Effective bookkeeping is the cornerstone of business success. We don't just record the past; we provide regular, clear, and comprehensive reports that allow you to plan your business strategy with total confidence.
              </p>
              <div className="space-y-6 pt-4">
                 {[
                   { title: "Personalised Support", desc: "Expect clear communication and a partnership approach." },
                   { title: "ATO Compliance", desc: "Expert preparaton that identifies concessions and deductions." },
                   { title: "State-of-the-art Systems", desc: "Leveraging Australia's leading accounting platforms." }
                 ].map((item, i) => (
                   <div key={i} className="flex items-start space-x-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mt-1">
                         <CheckCircle2 size={14} className="text-emerald-600" />
                      </div>
                      <div>
                         <p className="font-black text-blue-950 uppercase tracking-widest text-xs mb-1">{item.title}</p>
                         <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-blue-950 relative overflow-hidden text-center">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900 blur-[100px] -mr-48 -mt-48 opacity-50" />
         <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-['Outfit'] font-black text-white leading-tight">Secure Your <span className="text-[#00c1cf]">Foundation</span> Today</h2>
            <p className="text-xl text-blue-100/70 font-medium leading-relaxed">
              Experience a seamless, efficient, and transparent financial journey. Let us handle the complexity while you focus on the growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button 
                onClick={onDiagnostic}
                className="px-12 py-6 bg-[#00c1cf] text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-[#00a8b5] transition-all hover:-translate-y-1 active:scale-95"
              >
                Start Health Check
              </button>
              <button 
                onClick={onConsultation}
                className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/20 transition-all active:scale-95"
              >
                Book Consultation
              </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default FoundationalIntegrity;
