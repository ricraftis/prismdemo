import React, { useEffect } from 'react';
import { 
  ArrowLeft,
  Calendar,
  ChevronRight
} from 'lucide-react';
import Navigation from '../components/Navigation';

const Booking = ({ onBack, onHome, onConsultation }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 relative overflow-hidden">
      {/* Common Navigation */}
      <Navigation 
        onBack={onBack}
        onHome={onHome}
        onConsultation={onConsultation}
        showBack={true}
        isLight={true}
      />

      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-900 mb-8 animate-fade-in-up">
            <Calendar size={14} />
            <span>Strategic Alignment</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#202020] tracking-tighter leading-[0.95] mb-8 font-display animate-fade-in-up">
            Secure Your <span className="spectrum-gradient">Time.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium animate-fade-in-up">
            An appointment is the best way to communicate, build a relationship, and dive deep into your business's strategic potential.
          </p>
        </div>
      </section>

      {/* TidyCal Embed Section */}
      <section className="py-20 px-4 bg-slate-50 min-h-[800px]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden relative min-h-[700px] flex items-center justify-center">
            {/* TidyCal Embed */}
            <div className="w-full h-full min-h-[700px]">
              <iframe 
                src="https://tidycal.com/prismbusiness" 
                width="100%" 
                height="700px" 
                frameBorder="0"
                title="TidyCal Booking Calendar"
                className="rounded-[3rem]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          © 2026 Prism Business Initiatives. Serving Regional Victoria.
        </div>
      </footer>
    </div>
  );
};

export default Booking;
