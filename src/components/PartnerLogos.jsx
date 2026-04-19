import React from 'react';

const PartnerLogos = ({ className = "" }) => {
  return (
    <div className={`bg-blue-950/90 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 shadow-2xl ${className}`}>
      <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-90">
         <div className="group relative">
            <img 
               src="/CPA.png" 
               alt="CPA Australia" 
               className="h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110" 
            />
         </div>
         <div className="group relative">
            <img 
               src="/registeredBASagent.png" 
               alt="Registered BAS Agent" 
               className="h-8 md:h-10 w-auto object-contain transition-all duration-500 group-hover:scale-110" 
            />
         </div>
         <div className="group relative">
            <img 
               src="/xero-advisor-certified-individual-badge.avif" 
               alt="Xero Advisor Certified" 
               className="h-14 md:h-18 w-auto object-contain transition-all duration-500 group-hover:scale-110" 
            />
         </div>
         <div className="group relative">
            <img 
               src="/Partner-Program-logo-Purple-horizontal-300x91.avif" 
               alt="Partner Program" 
               className="h-8 md:h-10 w-auto object-contain transition-all duration-500 group-hover:scale-110" 
            />
         </div>
      </div>
      <p className="text-center mt-8 text-[8px] font-black uppercase tracking-[0.5em] text-blue-300/30">
        Professional Accreditations & Strategic Partnerships
      </p>
    </div>
  );
};

export default PartnerLogos;
