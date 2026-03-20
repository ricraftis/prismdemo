import React, { useEffect } from 'react';
import { ArrowLeft, FileSearch, CheckCircle2 } from 'lucide-react';

const Bookkeeping = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#202020] font-['Plus_Jakarta_Sans'] pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-[#00c1cf] hover:text-[#00a8b5] transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Hub</span>
        </button>

        <div className="space-y-6">
          <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mb-8">
            <FileSearch className="text-[#00c1cf]" size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-['Outfit'] font-black text-blue-950 tracking-tight">
            Decision-Ready Bookkeeping
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Placeholder: Comprehensive bookkeeping services tailored to your unique business needs. Integrating MYOB and Xero for seamless financial management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-12">
            {[
                "Expertise in MYOB & Xero Software",
                "Tailored Financial Solutions",
                "Time-Saving Efficiency",
                "Insightful Financial Reporting"
            ].map(item => (
                <div key={item} className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <CheckCircle2 size={20} className="text-emerald-500" />
                    <span className="font-bold text-blue-950">{item}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Bookkeeping;
