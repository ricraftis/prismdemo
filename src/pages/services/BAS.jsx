import React, { useEffect } from 'react';
import { ArrowLeft, ClipboardCheck, CheckCircle2 } from 'lucide-react';

const BAS = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#202020] font-['Plus_Jakarta_Sans'] pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-blue-900 hover:text-blue-950 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Hub</span>
        </button>

        <div className="space-y-6">
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-8">
            <ClipboardCheck className="text-blue-900" size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-['Outfit'] font-black text-blue-950 tracking-tight">
            BAS Completion & Lodging
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Placeholder: Expert guidance in completing and lodging Business Activity Statements, ensuring total compliance and accuracy with ATO regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-12">
            {[
                "Expert Tax Knowledge",
                "Customised BAS Solutions",
                "Efficient Lodging Processes",
                "Ongoing ATO Support"
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

export default BAS;
