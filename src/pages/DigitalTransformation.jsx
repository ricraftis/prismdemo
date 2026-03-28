import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  MessageSquare, 
  PlayCircle, 
  Rocket, 
  ShieldCheck, 
  BarChart3, 
  Cpu, 
  Cloud, 
  Users, 
  Zap,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import Navigation from '../components/Navigation';

const DigitalTransformation = ({ onBack, onConsultation, onDiagnostic, onHome }) => {
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
              <span className="text-[#00c1cf] text-xs font-black uppercase tracking-[0.2em]">Level 02: Operational Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-['Outfit'] font-black leading-[1.1] text-[#202020]">
              Digital Transformation: <span className="text-[#00c1cf]">Automate</span> Operations & Maximise Efficiency
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Transition from spreadsheet-dependency to a unified, cloud-based platform that provides real-time visibility and scales seamlessly with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-[#00c1cf] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#00a8b5] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 group flex items-center justify-center"
              >
                Get Your Digital Roadmap
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-[#00c1cf] hover:text-[#00c1cf] transition-all flex items-center justify-center group active:scale-95"
              >
                <PlayCircle size={20} className="mr-2 text-[#00c1cf]" />
                Watch Methodology
              </button>
            </div>
          </div>
          
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00c1cf]/20 to-transparent blur-3xl opacity-50 rounded-full" />
            <img 
              src="/becDigitalTransformation.jpg" 
              alt="Digital Transformation Specialist" 
              className="relative w-full aspect-square object-cover rounded-[2rem] shadow-2xl border border-white/20"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl space-y-4 max-w-xs border border-gray-50 hidden md:block animate-bounce-subtle">
              <div className="flex items-center space-x-3 text-[#00c1cf]">
                <Zap size={24} fill="currentColor" />
                <span className="font-black uppercase tracking-widest text-xs">Efficiency Boost</span>
              </div>
              <p className="text-2xl font-black font-['Outfit']">30% - 60%</p>
              <p className="text-xs text-gray-500 font-bold leading-tight italic">Reduction in administrative processing time recorded across regional clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Growing Pains */}
      <section id="methodology" className="py-24 bg-[#202020] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00c1cf]/5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-['Outfit'] font-black leading-tight">
                The Cost of the <span className="text-[#00c1cf]">Digital Divide</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Many regional SMEs are operating with fragmented data scattered across spreadsheets, manual notebooks, and disconnected software apps. This siloed approach is the primary cause of operational chaos, leading to duplicate data entry, frequent human errors, and a total lack of transparency.
                </p>
                <p>
                  When your team spends 40% of their time on repetitive administrative tasks, they are not focusing on innovation or customer care. For the business owner, this fragmentation means making critical decisions based on assumptions rather than data-driven intelligence.
                </p>
                <p className="text-white font-bold">
                  The digital divide in regional Victoria is real—relying on paper-based systems risks leaving your business behind agile, tech-enabled competitors.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Manual Bottlenecks", desc: "Papwork-heavy processes that delay invoicing and cash flow." },
                { title: "Data Silos", desc: "Fragmented information leading to costly human errors and duplicates." },
                { title: "Zero Real-Time Visibility", desc: "Making critical strategic decisions based on outdated reports." },
                { title: "Scaling Constraints", desc: "Legacy systems that break under the pressure of business growth." }
              ].map((pain, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#00c1cf]/50 transition-colors group">
                  <div className="mb-4 text-[#00c1cf] group-hover:scale-110 transition-transform origin-left">
                    <CheckCircle2 size={24} className="opacity-40" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{pain.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scalability Without Chaos */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-5xl font-['Outfit'] font-black">Scalability Without Chaos</h2>
            <div className="w-20 h-1.5 bg-[#00c1cf] mx-auto rounded-full" />
            <p className="text-xl text-gray-600 leading-relaxed">
              We help you move beyond isolated tools toward a unified ecosystem—such as a robust cloud-based ERP—that connects your finance, sales, inventory, and HR functions. 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src="/digital_roadmap.png" 
                alt="Digital Transformation Roadmap" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 space-y-8 pl-0 lg:pl-12">
              {[
                { 
                  title: "Data Centralization", 
                  desc: "Replace fragmented silos with a Single Source of Truth accessible from any device.",
                  icon: <Cloud className="text-[#00c1cf]" size={32} />
                },
                { 
                  title: "Workflow Optimisation", 
                  desc: "Redesign business processes to take full advantage of intelligent automation.",
                  icon: <Cpu className="text-[#00c1cf]" size={32} />
                },
                { 
                  title: "Real-Time Intelligence", 
                  desc: "Gain instant visibility into your finance, inventory, and HR metrics.",
                  icon: <BarChart3 className="text-[#00c1cf]" size={32} />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="shrink-0 w-16 h-16 bg-[#00c1cf]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#00c1cf] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-wider">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Transformation Roadmap */}
      <section id="roadmap" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-['Outfit'] font-black mb-16 text-center">Your Transformation Roadmap</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Process Discovery",
                desc: "We conduct a thorough audit of your current workflows to identify manual bottlenecks and paperwork-heavy delays.",
                icon: <Zap size={32} />
              },
              {
                title: "Team Training & Change",
                desc: "Hand-on support to ensure your staff is comfortable and confident with new digital tools, ensuring 100% adoption.",
                icon: <Users size={32} />
              },
              {
                title: "Intelligent Automation",
                desc: "Setting up automated triggers for invoicing and payment reminders, moving towards true paperless operations.",
                icon: <Zap size={32} />
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group">
                <div className="w-16 h-16 bg-[#00c1cf]/10 rounded-2xl flex items-center justify-center text-[#00c1cf] mb-8 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black font-['Outfit'] mb-4 leading-tight">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center italic text-gray-600">
          <p className="text-2xl leading-relaxed mb-8">
            "Implementation of the cloud ERP saved us $200k in operational waste within the first year. The transparency across our regional logistics is absolute."
          </p>
          <div className="flex items-center justify-center space-x-4 not-italic">
            <div className="w-12 h-12 bg-gray-200 rounded-full" />
            <div className="text-left">
              <p className="font-black uppercase tracking-widest text-sm text-[#202020]">Managing Director</p>
              <p className="text-xs font-bold text-[#00c1cf] uppercase tracking-widest leading-tight">Regional Logistics Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#202020] to-[#1a1a1a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00c1cf]/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#be70ae]/10 blur-[100px] -ml-48 -mb-48 rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-['Outfit'] font-black leading-tight">
            Ready to <span className="text-[#00c1cf]">Leave the Spreadsheets</span> Behind?
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Download our Free Digital Maturity Checklist or talk to Prism Business Initiatives on how we can create a team-based transformation in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button 
              onClick={onDiagnostic}
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

export default DigitalTransformation;
