import React, { useEffect } from 'react';
import { ArrowLeft, Users, CheckCircle2 } from 'lucide-react';

const Payroll = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#202020] font-['Plus_Jakarta_Sans'] pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Hub</span>
        </button>

        <div className="space-y-6">
          <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-8">
            <Users className="text-indigo-600" size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-['Outfit'] font-black text-blue-950 tracking-tight">
            Compliant Payroll Systems
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            Placeholder: Efficient payroll management ensuring accuracy, compliance, and peace of mind for you and your employees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-12">
            {[
                "Customised Payroll Solutions",
                "Accuracy and Compliance",
                "Efficient Payroll Processing",
                "Employee Self-Service Portals"
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

export default Payroll;
