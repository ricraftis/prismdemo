import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft } from 'lucide-react';
import { businessTypes, branchedQuestions } from '../../data/surveyData';
import AutoTextArea from './AutoTextArea';

const SurveyFlow = () => {
  const [step, setStep] = useState(1);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '' });
  const [businessType, setBusinessType] = useState('');
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Derived questions based on selected business type
  const activeQuestions = businessType ? branchedQuestions[businessType] : [];

  const handleAnswer = (questionId, field, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        ...prev[questionId],
        [field]: value
      }
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // THIS IS YOUR PAYLOAD FOR FIREBASE AND GEMINI
    const payload = {
      contact: contactInfo,
      businessType: businessTypes.find(b => b.id === businessType).label,
      surveyResponses: activeQuestions.map(q => ({
        question: q.text,
        selectedOption: answers[q.id]?.option || 'No answer provided',
        furtherInfo: answers[q.id]?.notes || ''
      })),
      submittedAt: new Date().toISOString()
    };

    console.log("Data ready for Firebase & Gemini:", JSON.stringify(payload, null, 2));

    // Simulate API delay for Firebase / Gemini trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 1500);
  };

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto p-12 bg-white rounded-[3rem] shadow-2xl text-center border mr-2 border-slate-100 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
        </div>
        <h2 className="text-4xl font-black text-blue-950 mb-6 font-display">Diagnostic Complete.</h2>
        <p className="text-slate-500 text-lg leading-relaxed font-medium">
          Thank you, <span className="text-blue-950 font-black">{contactInfo.name}</span>. Your strategic profile has been submitted. 
        </p>
        <p className="text-slate-500 text-lg leading-relaxed font-medium mt-4">
          Our AI and advisory team are preparing a bespoke response which will be sent to <span className="text-[#00c1cf] font-black">{contactInfo.email}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-1 lg:p-1 lg:bg-transparent rounded-3xl animate-in fade-in slide-in-from-bottom duration-700">
      
      {/* STEP 1: Contact Info */}
      {step === 1 && (
        <div className="space-y-8 p-10 bg-white rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="space-y-4">
              <h2 className="text-4xl font-black text-blue-950 font-display leading-tight tracking-tighter italic">"Precision starts with identity."</h2>
              <p className="text-slate-500 font-medium">Please provide your details so we can deliver your bespoke strategic analysis.</p>
          </div>
          
          <div className="space-y-6">
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 pl-4">Full Name</label>
              <input 
                type="text" 
                value={contactInfo.name}
                onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                className="w-full p-6 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#00c1cf] focus:border-[#00c1cf] transition-all outline-none font-medium"
                placeholder="CEO / Managing Director"
              />
            </div>
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 pl-4">Email Address</label>
              <input 
                type="email" 
                value={contactInfo.email}
                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                className="w-full p-6 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#00c1cf] focus:border-[#00c1cf] transition-all outline-none font-medium"
                placeholder="strategy@yourcompany.com"
              />
            </div>
          </div>

          <button 
            disabled={!contactInfo.name || !contactInfo.email}
            onClick={() => setStep(2)}
            className="w-full flex items-center justify-center gap-2 bg-[#00c1cf] text-white p-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#00a8b5] disabled:opacity-20 transition-all shadow-xl hover:-translate-y-1 active:scale-95 group"
          >
            Continue to Analysis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* STEP 2: Branching Selection */}
      {step === 2 && (
        <div className="space-y-8 p-10 bg-white rounded-[3rem] shadow-2xl border border-slate-100">
          <button onClick={() => setStep(1)} className="text-slate-400 flex items-center gap-4 hover:text-blue-950 transition-colors text-[10px] font-black uppercase tracking-widest group">
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to details
          </button>
          
          <div className="space-y-4">
              <h2 className="text-4xl font-black text-blue-950 font-display leading-[0.95] tracking-tighter">Your Operational Reality.</h2>
              <p className="text-slate-500 font-medium leading-relaxed">How would you describe the current structure of your business?</p>
          </div>
          
          <div className="grid gap-4">
            {businessTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setBusinessType(type.id)}
                className={`w-full text-left p-8 rounded-2xl border-2 transition-all duration-300 transform ${
                  businessType === type.id 
                    ? 'border-[#00c1cf] bg-white shadow-xl scale-[1.02]' 
                    : 'border-slate-50 bg-slate-50/50 hover:border-blue-100 hover:bg-white text-slate-400'
                }`}
              >
                <span className={`text-xl font-black font-display tracking-tight ${businessType === type.id ? 'text-blue-950' : ''}`}>{type.label}</span>
              </button>
            ))}
          </div>

          <button 
            disabled={!businessType}
            onClick={() => setStep(3)}
            className="w-full flex items-center justify-center gap-2 bg-blue-950 text-white p-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-900 disabled:opacity-20 transition-all shadow-xl hover:-translate-y-1 active:scale-95 group"
          >
            Start Diagnostic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* STEP 3: Branched Questions */}
      {step === 3 && (
        <div className="space-y-12 pb-16">
          <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] flex items-center justify-between">
            <button onClick={() => setStep(2)} className="text-white/60 flex items-center gap-4 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
            </button>
            <span className="text-[10px] font-black text-[#00c1cf] bg-[#00c1cf]/10 px-6 py-2 rounded-full uppercase tracking-widest">
              Context: {businessTypes.find(b => b.id === businessType)?.label}
            </span>
          </div>

          <div className="grid gap-12">
            {activeQuestions.map((q, index) => (
              <div key={q.id} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-6xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {index + 1}
                </div>
                <h3 className="text-2xl font-black text-blue-950 mb-10 font-display leading-[0.95] tracking-tight relative z-10">
                   {q.text}
                </h3>
                
                {/* Multiple Choice Options */}
                <div className="grid gap-4 mb-10">
                  {q.options.map(opt => (
                    <label key={opt} className={`flex items-center p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        answers[q.id]?.option === opt 
                        ? 'border-[#00c1cf] bg-white shadow-lg' 
                        : 'border-slate-50 bg-slate-50/30 hover:bg-slate-50'
                    }`}>
                      <input 
                        type="radio" 
                        name={`question-${q.id}`} 
                        value={opt}
                        className="hidden"
                        checked={answers[q.id]?.option === opt}
                        onChange={() => handleAnswer(q.id, 'option', opt)}
                      />
                      <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-all ${
                          answers[q.id]?.option === opt ? 'bg-[#00c1cf] border-[#00c1cf]' : 'border-slate-300'
                      }`}>
                          {answers[q.id]?.option === opt && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className={`font-bold transition-colors ${answers[q.id]?.option === opt ? 'text-blue-950' : 'text-slate-500'}`}>{opt}</span>
                    </label>
                  ))}
                </div>

                {/* Optional Further Information */}
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 pl-4">
                    Additional Context (Optional)
                  </label>
                  <AutoTextArea 
                    value={answers[q.id]?.notes || ''}
                    onChange={(e) => handleAnswer(q.id, 'notes', e.target.value)}
                    placeholder="Describe specific challenges or patterns..."
                  />
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-4 bg-white text-blue-950 p-8 rounded-[2.5rem] font-black text-xl hover:bg-[#00c1cf] hover:text-white disabled:opacity-20 transition-all shadow-[0_20px_60px_rgba(0,0,0,0.4)] active:scale-95 group"
          >
            {isSubmitting ? 'Analysing Profiles...' : 'Submit Diagnostic Analysis'}
            {!isSubmitting && <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default SurveyFlow;
