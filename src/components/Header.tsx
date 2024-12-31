import React from 'react';
import { Shield } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Faber-Castell</h1>
            <span className="text-sm">Desde 1971</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Site 100% Seguro</span>
          </div>
        </div>
      </div>
    </header>
  );
};