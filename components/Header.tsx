
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-800 text-white p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="bg-white p-1 rounded-full overflow-hidden w-10 h-10 flex items-center justify-center">
          <img 
            src="https://picsum.photos/seed/fuuast/100/100" 
            alt="FUUAST Logo" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">FUUAST Gulshan</h1>
          <p className="text-xs text-green-100">Official Campus AI Assistant</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="px-2 py-0.5 bg-green-700 rounded text-[10px] font-semibold border border-green-600">
          PROTOTYPE v1.0
        </span>
        <span className="text-[10px] mt-1 text-green-200">Zero-Cost RAG Implementation</span>
      </div>
    </header>
  );
};

export default Header;
