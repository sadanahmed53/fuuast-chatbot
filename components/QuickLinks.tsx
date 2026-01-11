
import React from 'react';

interface QuickLinksProps {
  onSelect: (text: string) => void;
}

const QuickLinks: React.FC<QuickLinksProps> = ({ onSelect }) => {
  const suggestions = [
    "Admission Eligibility?",
    "BS Computer Science Fee?",
    "Academic Calendar Fall 2024",
    "Convocation Requirements",
    "Campus Location & Facilities"
  ];

  return (
    <div className="px-4 py-2 overflow-x-auto whitespace-nowrap flex space-x-2 bg-slate-50 border-t border-slate-100">
      {suggestions.map((s, i) => (
        <button
          key={i}
          onClick={() => onSelect(s)}
          className="inline-block px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs hover:border-green-400 hover:text-green-700 transition-all shadow-sm"
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default QuickLinks;
