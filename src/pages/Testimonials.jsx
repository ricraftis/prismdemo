import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import { testimonials } from '../data/testimonials';

const Testimonials = ({ onBack, onHome, onConsultation }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      <Navigation
        onBack={onBack}
        onHome={onHome}
        onConsultation={onConsultation}
        showBack={true}
        isLight={true}
      />

      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#00c1cf] mb-4">
              Client Testimonials
            </p>
            <h1 className="text-4xl lg:text-6xl font-black text-blue-950 font-display leading-[0.95] mb-8">
              What Our Clients Say
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Real feedback from regional business leaders who have partnered with Prism Business Initiatives.
            </p>
          </div>

          <div className="space-y-16">
            {testimonials.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className={`p-12 bg-slate-50 rounded-[3rem] border-l-8 ${item.accent}`}
              >
                <p className="text-xl text-slate-800 leading-relaxed font-medium italic">
                  &ldquo;{item.fullText}&rdquo;
                </p>
                <footer className="mt-10 not-italic">
                  <span className="font-black text-blue-950 text-lg">&mdash; {item.name}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
          &copy; 2026 Prism Business Initiatives. Serving Regional Victoria.
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;
