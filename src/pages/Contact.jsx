import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  MessageSquare,
  Menu,
  X
} from 'lucide-react';
import Navigation from '../components/Navigation';

const Contact = ({ onBack, onHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredMethod: [],
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckboxChange = (method) => {
    setFormData(prev => {
      const current = prev.preferredMethod;
      if (current.includes(method)) {
        return { ...prev, preferredMethod: current.filter(m => m !== method) };
      } else {
        return { ...prev, preferredMethod: [...current, method] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Data:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100 text-center space-y-8 animate-in fade-in zoom-in duration-700">
           <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
           </div>
           <h2 className="text-4xl font-['Outfit'] font-black text-blue-950">Message Received</h2>
           <p className="text-gray-600 font-medium leading-relaxed">
             Thank you for reaching out to Prism Business Initiatives. We've received your query and one of our strategic experts will respond within one business day.
           </p>
           <button 
             onClick={onBack}
             className="w-full py-5 bg-blue-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl active:scale-95"
           >
             Return to Overview
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#202020] font-['Plus_Jakarta_Sans']">
      {/* Common Navigation */}
      <Navigation 
        onBack={onBack}
        onHome={onHome}
        onConsultation={() => {}} // Already on contact
        showBack={true}
        isLight={true}
      />

      <section className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[500px]">
            <div className="relative pt-20 pb-12 lg:py-32 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
               <div className="inline-flex items-center space-x-3 px-4 py-2 bg-blue-50 rounded-full">
                  <MessageSquare size={16} className="text-blue-600" />
                  <span className="text-blue-700 text-xs font-black uppercase tracking-[0.2em]">Contact Strategic Partners</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-['Outfit'] font-black leading-[0.95] text-[#202020] tracking-tight">
                 Let's Start the <span className="text-[#00c1cf]">Conversation.</span>
               </h1>
               <p className="text-xl text-gray-600 leading-relaxed max-w-xl font-medium">
                 Whether you have a specific scaling challenge or simply need clarity on your current position, we are here to provide professional, timely, and actionable insights.
               </p>
               <div className="space-y-4 pt-4">
                  {[
                    "Response guaranteed within 24 hours",
                    "No-obligation initial discovery",
                    "Direct access to strategic leadership"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm font-bold text-slate-500">
                       <CheckCircle2 size={16} className="text-emerald-500" />
                       <span>{point}</span>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="relative pt-0 lg:pt-32 pb-20 animate-in fade-in zoom-in duration-1000 delay-200">
              <div className="absolute -inset-10 bg-blue-50/50 blur-3xl rounded-full" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-square lg:aspect-auto lg:h-[600px] transform hover:scale-[1.01] transition-transform duration-700 overflow-hidden">
                <img 
                  src="/rebecaaHearn.jpg" 
                  alt="Rebecca Hearn - Strategy Lead" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
                <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white space-y-1">
                   <p className="text-2xl font-black font-['Outfit']">Rebecca Hearn</p>
                   <p className="text-xs font-bold uppercase tracking-widest opacity-80 italic">Director & Strategic Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Details Section */}
      <section className="py-24 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Contact Form */}
            <div className="lg:col-span-7">
               <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-100">
                  <h2 className="text-3xl font-['Outfit'] font-black text-blue-950 mb-10">Direct Query Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-8 font-medium">
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">Full Name</label>
                           <input 
                             type="text" 
                             required 
                             placeholder="John Doe"
                             className="w-full px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-[#00c1cf] focus:bg-white outline-none transition-all"
                             onChange={(e) => setFormData({...formData, name: e.target.value})}
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">Email Address</label>
                           <input 
                             type="email" 
                             required 
                             placeholder="john@example.com"
                             className="w-full px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-[#00c1cf] focus:bg-white outline-none transition-all"
                             onChange={(e) => setFormData({...formData, email: e.target.value})}
                           />
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">Phone Number (Optional)</label>
                        <input 
                          type="tel" 
                          placeholder="+61 400 000 000"
                          className="w-full px-8 py-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-[#00c1cf] focus:bg-white outline-none transition-all"
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                     </div>

                     <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">Preferred Contact Method</label>
                        <div className="flex space-x-8 pl-4">
                           <label className="flex items-center space-x-3 cursor-pointer group">
                              <div 
                                onClick={() => handleCheckboxChange('email')}
                                className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${formData.preferredMethod.includes('email') ? 'bg-[#00c1cf] border-[#00c1cf]' : 'bg-slate-50 border-slate-200'}`}
                              >
                                {formData.preferredMethod.includes('email') && <CheckCircle2 size={16} className="text-white" />}
                              </div>
                              <span className="text-sm font-bold text-slate-700 group-hover:text-[#00c1cf] transition-colors">Email</span>
                           </label>
                           <label className="flex items-center space-x-3 cursor-pointer group">
                              <div 
                                onClick={() => handleCheckboxChange('phone')}
                                className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${formData.preferredMethod.includes('phone') ? 'bg-[#00c1cf] border-[#00c1cf]' : 'bg-slate-50 border-slate-200'}`}
                              >
                                {formData.preferredMethod.includes('phone') && <CheckCircle2 size={16} className="text-white" />}
                              </div>
                              <span className="text-sm font-bold text-slate-700 group-hover:text-[#00c1cf] transition-colors">Phone</span>
                           </label>
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-4">How can we help?</label>
                        <textarea 
                          rows="6"
                          placeholder="Please describe your query here..."
                          className="w-full px-8 py-5 bg-slate-50 rounded-[2rem] border border-slate-100 focus:border-[#00c1cf] focus:bg-white outline-none transition-all resize-none"
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                     </div>

                     <div className="pt-6">
                        <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 border-dashed flex items-center justify-between mb-8">
                           <div className="flex items-center space-x-4">
                              <ShieldCheck className="text-slate-400" />
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recaptcha Provision</span>
                           </div>
                           <div className="w-6 h-6 bg-slate-200 rounded animate-pulse" />
                        </div>
                        <button 
                          type="submit"
                          className="w-full py-6 bg-[#00c1cf] text-white rounded-2xl font-black text-lg hover:bg-[#00a8b5] transition-all shadow-2xl hover:shadow-[#00c1cf]/20 flex items-center justify-center group active:scale-95"
                        >
                          Send Message
                          <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                     </div>
                  </form>
               </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-12 pt-10 lg:pt-20">
               <div>
                  <h2 className="text-4xl font-['Outfit'] font-black text-blue-950 mb-8">Contact Us</h2>
                  <div className="space-y-10">
                     <div className="flex items-start space-x-6 group cursor-pointer" onClick={() => window.open('tel:+61402142198')}>
                        <div className="p-4 bg-blue-50 text-blue-900 rounded-2xl group-hover:bg-blue-950 group-hover:text-white transition-all">
                           <Phone size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Direct Line</p>
                           <p className="text-xl font-black text-blue-950">+61 402 142 198</p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-6 group cursor-pointer" onClick={() => window.open('mailto:admin@prismbusiness.au')}>
                        <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                           <Mail size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Email Strategy</p>
                           <p className="text-xl font-black text-blue-950">admin@prismbusiness.au</p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-6 group cursor-pointer" onClick={() => window.open('https://www.prismbusiness.au')}>
                        <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all">
                           <Globe size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Web Ecosystem</p>
                           <p className="text-xl font-black text-blue-950">www.prismbusiness.au</p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-6 group">
                        <div className="p-4 bg-slate-50 text-slate-600 rounded-2xl group-hover:bg-[#202020] group-hover:text-white transition-all">
                           <MapPin size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Head Office</p>
                           <p className="text-xl font-black text-blue-950">Tatura, VIC 3616</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Trust Card */}
               <div className="p-10 bg-blue-950 rounded-[2.5rem] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl -mr-16 -mt-16" />
                  <div className="relative z-10 space-y-6 font-medium leading-relaxed">
                     <p className="text-blue-100/70">
                       "Strategic partnership begins with trust. When you reach out, you are not contacting a 'support desk'—you are connecting directly with our core leadership."
                     </p>
                     <div className="flex items-center space-x-4">
                        <div className="w-10 h-1 rounded-full bg-[#00c1cf]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-300">The Prism Guarantee</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">© 2026 Prism Business Initiatives. Professional Strategy.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
