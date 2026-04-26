import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft } from 'lucide-react';
import { businessTypes, branchedQuestions } from '../../data/surveyData';
import AutoTextArea from './AutoTextArea';
import ReactMarkdown from 'react-markdown';

const SurveyFlow = () => {
  const [step, setStep] = useState(1);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '' });
  const [businessType, setBusinessType] = useState('');
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [reportContent, setReportContent] = useState('');

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
    try {
      const pathValue = businessTypes.find(b => b.id === businessType).label;
      const formattedAnswers = activeQuestions.map(q => ({
        choice: answers[q.id]?.option || 'No answer provided',
        comment: answers[q.id]?.notes || ''
      }));

      // Call the AI report generator endpoint
      const response = await fetch('/api/generate-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path: pathValue,
          answers: formattedAnswers
        }),
      });

      if (!response.ok) throw new Error('Failed to generate report');
      
      const data = await response.json();
      setReportContent(data.report);

      // Attempt to send subscription email in background
      fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: contactInfo.email,
          name: contactInfo.name,
          businessType: pathValue,
          surveyResponses: activeQuestions.map(q => ({
            question: q.text,
            selectedOption: answers[q.id]?.option || 'No answer provided',
            furtherInfo: answers[q.id]?.notes || ''
          }))
        }),
      }).catch(err => console.error('Subscription error:', err));

      setIsSubmitting(false);
      setIsComplete(true);
    } catch (error) {
      console.error('Submission Error:', error);
      // Fallback for demo if API isn't live yet
      setTimeout(() => {
        setIsSubmitting(false);
        setIsComplete(true);
        setReportContent("## Report Generation Failed\n\nThere was an issue generating your report via the API. Please ensure the API keys are configured correctly or try again later.");
      }, 1500);
    }
  };

  if (isComplete) {
    const reportData = activeQuestions.map(q => ({
      question: q.text,
      selected: answers[q.id]?.option || 'Not answered',
      notes: answers[q.id]?.notes || ''
    }));

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
        {/* Report Header */}
        <div className="p-12 bg-white rounded-[3rem] shadow-2xl border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <CheckCircle className="w-48 h-48 text-emerald-600" />
          </div>
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Diagnostic Complete</div>
            <h2 className="text-4xl md:text-6xl font-black text-blue-950 mb-6 font-display leading-tight tracking-tighter">Your Strategic <span className="text-[#00c1cf]">Roadmap.</span></h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              Analysed for <span className="text-blue-950 font-black">{contactInfo.name}</span>. This report synthesises your operational data into an actionable growth profile.
            </p>
          </div>
        </div>

        {/* AI Synthesis Section - Powered by Gemini 2.5 Flash */}
        <div className="p-12 bg-blue-950 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="mb-8 flex justify-center">
              <img src="/Prism Business Intiatives - 300px.jpg" alt="Prism Business Initiatives" className="h-16 w-auto object-contain bg-white p-2 rounded-xl shadow-lg" />
            </div>
            <div className="mb-10 text-center border-b border-white/10 pb-10">
              <p className="text-lg font-medium text-blue-100/90 leading-relaxed max-w-2xl mx-auto italic">
                Thank you for requesting this report. We trust it is of assistance and welcome your call to discuss any aspects covered.
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-[#00c1cf] rounded-lg flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 bg-white rounded-full bg-opacity-30" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00c1cf]">AI Synthesis: Gemini 2.5 Flash</span>
            </div>
            
            <div className="space-y-6 prose prose-invert prose-p:text-blue-100/80 prose-headings:text-[#00c1cf] max-w-none leading-[1.5]">
              <ReactMarkdown>
                {reportContent}
              </ReactMarkdown>
            </div>

            <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-yellow-200/80 text-sm">
              <p className="font-bold mb-1">Disclaimer</p>
              <p>This report is generated by AI for informational purposes only and is not to be construed as financial, legal, or strategic business advice. Always seek professional advice before proceeding with any significant business decisions.</p>
            </div>
          </div>
        </div>

        {/* Your Responses Grid */}
        <div className="grid gap-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 pl-8">Detailed Insights Summary</h3>
          {reportData.map((data, i) => (
            <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-[#00c1cf]/30 transition-all">
              <div className="space-y-2">
                <p className="text-xs font-black text-slate-300 uppercase tracking-widest">Question {i + 1}</p>
                <p className="text-lg font-black text-blue-950 font-display leading-[0.95]">{data.question}</p>
                {data.notes && <p className="text-sm text-slate-400 font-medium italic mt-2">"{data.notes}"</p>}
              </div>
              <div className="shrink-0 bg-blue-50 px-6 py-3 rounded-xl border border-blue-100 group-hover:bg-[#00c1cf] group-hover:text-white transition-all">
                 <span className="text-sm font-black uppercase tracking-widest">{data.selected}</span>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="w-full py-8 text-slate-400 font-black uppercase tracking-[0.3em] text-xs hover:text-blue-950 transition-colors"
        >
          Reset Diagnostic & Start Over
        </button>
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
              <p className="text-slate-500 font-medium leading-relaxed">
                Please provide your details so we can deliver your bespoke strategic analysis. <br />
                <span className="text-blue-600 font-bold italic">The more detail you provide, the deeper the insights we can generate for your roadmap.</span>
              </p>
          </div>
          
          <div className="space-y-6">
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 pl-4">Full Name</label>
              <input 
                type="text" 
                value={contactInfo.name}
                onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                className="w-full p-6 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#00c1cf] focus:border-[#00c1cf] transition-all outline-none font-medium text-slate-900"
                placeholder="CEO / Managing Director"
              />
            </div>
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 pl-4">Email Address</label>
              <input 
                type="email" 
                value={contactInfo.email}
                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                className="w-full p-6 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#00c1cf] focus:border-[#00c1cf] transition-all outline-none font-medium text-slate-900"
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
                    Additional Context (Optional) — <span className="text-blue-600 italic">More detail leads to greater insights</span>
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
