
import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.role === 'assistant';

  // Function to process citations in text for better UI
  const processContent = (content: string) => {
    // Basic regex to find brackets like (Source, Page)
    const parts = content.split(/(\([^)]+\))/g);
    return parts.map((part, i) => {
      if (part.startsWith('(') && part.endsWith(')') && part.includes('Page')) {
        return (
          <span key={i} className="text-[10px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded border border-green-100 font-bold ml-1 inline-block">
            {part.replace(/[()]/g, '')}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      <div 
        className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
          isAssistant 
            ? 'bg-white border border-slate-200 text-slate-800' 
            : 'bg-green-700 text-white'
        }`}
      >
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          {processContent(message.content)}
        </div>
        <div className={`text-[10px] mt-2 ${isAssistant ? 'text-slate-400' : 'text-green-200'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          {isAssistant && <span className="ml-2 font-medium">• Verified Record</span>}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
