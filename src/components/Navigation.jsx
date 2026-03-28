import React, { useState } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';

const Navigation = ({ onBack, onHome, onConsultation, showBack = false, isLight = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Strategy', target: 'services' },
    { label: 'Health Check', target: 'diagnostic' },
    { label: 'About', target: 'about' }
  ];

  const handleLinkClick = (target) => {
    onHome();
    setIsMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isLight ? 'bg-white/80 border-gray-100' : 'bg-blue-950/80 border-white/10 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {showBack && (
              <button 
                onClick={onBack}
                className={`flex items-center space-x-2 text-sm font-bold uppercase tracking-widest transition-colors group ${
                  isLight ? 'text-[#00c1cf] hover:text-[#00a8b5]' : 'text-blue-300 hover:text-white'
                }`}
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">Back</span>
              </button>
            )}
            
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => handleLinkClick(link.target)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  isLight ? 'text-slate-500 hover:text-[#00c1cf]' : 'text-blue-200/60 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                onConsultation();
              }}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-sm active:scale-95 ${
                isLight ? 'bg-blue-950 text-white hover:bg-blue-900' : 'bg-[#00c1cf] text-white hover:bg-[#00a8b5]'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isLight ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-20 left-0 right-0 border-b p-6 space-y-6 animate-in slide-in-from-top duration-300 ${
            isLight ? 'bg-white border-gray-100' : 'bg-blue-950 border-white/10 text-white'
          }`}>
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => handleLinkClick(link.target)}
                className="block w-full text-left text-lg font-bold"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                onConsultation();
              }}
              className="block w-full bg-[#00c1cf] text-white px-6 py-4 rounded-2xl font-bold text-center shadow-lg active:scale-[0.98]"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
