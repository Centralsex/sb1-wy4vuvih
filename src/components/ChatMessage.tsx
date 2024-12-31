import React from 'react';

interface ChatMessageProps {
  text: string;
  isBot: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ text, isBot }) => (
  <div className={`mb-4 ${isBot ? '' : 'text-right'}`}>
    <div
      className={`inline-block rounded-lg p-3 max-w-[80%] ${
        isBot ? 'bg-gray-100' : 'bg-red-50'
      }`}
    >
      {text}
    </div>
  </div>
);