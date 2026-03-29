import React, { useRef, useEffect } from 'react';

const AutoTextArea = ({ value, onChange, placeholder }) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textAreaRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full min-h-[80px] p-6 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#00c1cf] focus:border-[#00c1cf] transition-all duration-300 resize-none overflow-hidden text-slate-700 font-medium text-sm leading-relaxed"
      rows={1}
    />
  );
};

export default AutoTextArea;
