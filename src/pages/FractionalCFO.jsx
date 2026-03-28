import React from 'react';
import { 
  ChevronRight, 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  ArrowLeft,
  PieChart,
  Target,
  FileSearch
} from 'lucide-react';

const FractionalCFO = ({ onBack, onConsultation, onDiagnostic, onHome }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 relative overflow-hidden">
      {/* Navigation - Minimal for Service Page */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-slate-500 hover:text-blue-900 transition-colors font-bold text-sm group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Overview</span>
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
            <button 
              onClick={onConsultation}
              className="bg-blue-950 text-white px-6 py-2.5 rounded-full text-xs font-black hover:bg-blue-900 transition-all shadow-lg active:scale-95"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 mb-16 lg:mb-0">
              <div className="inline-flex items-center space-x-3 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-900 mb-8">
                Strategic Growth
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-[#202020] tracking-tighter leading-[0.95] mb-8 font-display">
                Fractional CFO Services: <span className="spectrum-gradient">Strategic Financial Leadership.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl font-medium">
                Get board-level financial expertise to optimise cash flow, drive profit, and secure your business legacy without the cost of a full-time executive.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button 
                  onClick={onConsultation}
                  className="bg-[#00c1cf] text-white px-10 py-5 rounded-2xl font-black hover:bg-[#00a8b5] transition-all shadow-2xl hover:shadow-[#00c1cf]/20 flex items-center justify-center group"
                >
                  Schedule Consultation
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/fractional_cfo_hero.jpg" 
                  alt="Fractional CFO Strategic Leadership" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
              </div>
              {/* Accents */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 animate-fade-in-up">
                 <div className="flex items-center space-x-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Impact Result</p>
                        <p className="text-lg font-black text-blue-950">+51% Net Profit</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section (Problem/Agitation) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-5xl font-black text-blue-950 mb-10 font-display leading-[0.95]">
              The "Growing Pains"
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                Many regional business owners find themselves trapped in a reactive cycle. You know your industry inside and out, yet you are often bogged down by tax compliance, payroll complexities, and the constant stress of unpredictable cash flow.
              </p>
              <p>
                This lack of financial clarity is not just a nuisance; it is a ceiling on your growth. When decisions are made based on "gut feel" rather than real-time data, you risk missing critical market opportunities or failing to identify internal inefficiencies that quietly erode your hard-earned margins. You are busy, but you may not be profitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (Solution/Value Proposition) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-24 items-center font-medium">
             <div className="order-2 lg:order-1">
                <img 
                  src="/financial_strategy_dashboard.png" 
                  alt="Strategic Financial Dashboard" 
                  className="rounded-[3rem] shadow-2xl border border-slate-100"
                />
             </div>
             <div className="order-1 lg:order-2 mb-16 lg:mb-0">
                <h2 className="text-3xl lg:text-5xl font-black text-blue-950 mb-10 font-display leading-[0.95]">
                  Your Path to Sustainable Growth
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Prism Business Initiatives provides the antidote to financial opacity. We deliver the strategic leadership your business needs at a fraction of the cost of a full-time hire.
                  </p>
                  <p>
                    By partnering with Prism, you gain an external perspective unclouded by internal politics, focused solely on the key metrics that drive your profit. Our methodology moves your business from historical reporting to forward-looking strategy. We don't just tell you what happened last month; we use predictive forecasting to show you exactly where your business is going and how to course-correct before challenges become crises.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section (Service Deep Dive) */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-medium">
           <h2 className="text-3xl lg:text-5xl font-black mb-16 font-display leading-[0.95] text-center">
             How We Work
           </h2>
           <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Identify Your Profit Leaks",
                  desc: "Stop the 'bleeding' in your first 90 days. We pinpoint hidden risks and immediate opportunities to boost your bottom line, giving you instant financial breathing room.",
                  icon: <FileSearch size={32} />
                },
                {
                  title: "Clarity for Confident Decisions",
                  desc: "Move from guesswork to certainty. Our bespoke dashboards provide the 'Single Source of Truth' you need to lead with precision and stay ahead of market shifts.",
                  icon: <BarChart3 size={32} />
                },
                {
                  title: "Strategic Backup for Big Moves",
                  desc: "You don't have to carry the load alone. Whether it's raising capital or preparing for a high-value exit, we provide the board-level foresight you need to win.",
                  icon: <Target size={32} />
                }
              ].map((step, idx) => (
                <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors">
                   <div className="text-[#00c1cf] mb-8">{step.icon}</div>
                   <h3 className="text-xl font-black mb-4 font-display">{step.title}</h3>
                   <p className="text-blue-100/70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white font-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-2xl font-black text-slate-400 uppercase tracking-[0.3em] mb-16 text-center">What Our Clients Say</h2>
           <div className="space-y-12">
              <blockquote className="relative p-12 bg-slate-50 rounded-[3rem] italic text-xl text-slate-800 leading-relaxed border-l-8 border-blue-600">
                "Prism helped us increase our net profit by 51% within twelve months of implementing their Strategic CFO framework. We finally have the clarity we need to expand."
                <footer className="mt-8 not-italic">
                   <span className="font-black text-blue-950">— [Illustrative Client Name], Regional Manufacturer</span>
                </footer>
              </blockquote>
              <blockquote className="relative p-12 bg-slate-50 rounded-[3rem] italic text-xl text-slate-800 leading-relaxed border-l-8 border-indigo-600">
                "The 90-day action plan gave our board the confidence to secure a $2M expansion loan. We couldn't have done it without Prism's expert forecasting."
                <footer className="mt-8 not-italic">
                   <span className="font-black text-blue-950">— [Illustrative Client Name], Professional Services</span>
                </footer>
              </blockquote>
           </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-32 bg-slate-50 text-center relative overflow-hidden font-medium">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-blue-950 mb-10 font-display leading-[0.95]">
            Take the Next Step
          </h2>
          <div className="space-y-12 mb-16">
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Ready to move from reactive management to strategic growth? <span className="font-black text-blue-950">Download Your Free Business Growth Diagnostic</span> today to identify your immediate opportunities and uncover hidden gaps in your financial strategy.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Prefer to speak with an expert right away? <span className="font-black text-blue-950">Schedule a Free 30-Minute Consultation</span> to discuss your specific scaling challenges. Don't let financial fog hold your business back any longer.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button 
              onClick={onDiagnostic}
              className="bg-[#00c1cf] text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-[#00a8b5] transition-all shadow-2xl hover:shadow-[#00c1cf]/20"
            >
              Start Free Diagnostic
            </button>
            <button 
              onClick={onConsultation}
              className="bg-blue-950 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-blue-900 transition-all shadow-2xl"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer Copy from main page for consistency if needed or just simple copyright */}
      <footer className="bg-white py-12 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
            © 2026 Prism Business Initiatives. Serving Regional Victoria.
         </div>
      </footer>
    </div>
  );
};

export default FractionalCFO;
