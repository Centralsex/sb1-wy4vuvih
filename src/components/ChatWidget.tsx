import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { getAutoResponse } from '../utils/chatResponses';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! Como posso ajudar você hoje?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    const botResponse = { text: getAutoResponse(input), isBot: true };
    
    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80">
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <span className="font-bold">Atendimento Online</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="h-96 p-4 overflow-y-auto">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} {...msg} />
            ))}
          </div>
          <form onSubmit={handleSend} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <button type="submit" className="bg-red-600 text-white p-2 rounded-lg">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};