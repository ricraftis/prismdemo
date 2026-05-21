import React from 'react';
import { ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonialBoxes = ({ onViewTestimonials, showTitle = true }) => {
  return (
    <section className="py-24 bg-white font-medium">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <h2 className="text-2xl font-black text-slate-400 uppercase tracking-[0.3em] mb-16 text-center">
            What Our Clients Say
          </h2>
        )}
        <div className="space-y-12">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className={`relative p-12 bg-slate-50 rounded-[3rem] italic text-xl text-slate-800 leading-relaxed border-l-8 ${item.accent}`}
            >
              &ldquo;{item.excerpt}&hellip;&rdquo;
              <footer className="mt-8 not-italic flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="font-black text-blue-950">&mdash; {item.name}</span>
                <button
                  type="button"
                  onClick={onViewTestimonials}
                  className="inline-flex items-center space-x-2 text-sm font-black uppercase tracking-widest text-[#00c1cf] hover:text-[#00a8b5] transition-colors not-italic"
                >
                  <span>Read full testimonial</span>
                  <ChevronRight size={16} />
                </button>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialBoxes;
