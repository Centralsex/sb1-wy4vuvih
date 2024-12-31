import React, { useState } from 'react';
import { Gift } from 'lucide-react';

export const SpinWheel: React.FC<{ onWin: () => void }> = ({ onWin }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const newRotation = rotation + 1800 + Math.random() * 360;
    setRotation(newRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      onWin();
    }, 5000);
  };

  return (
    <div className="relative w-80 h-80 mx-auto">
      <div 
        className={`absolute w-full h-full rounded-full border-8 border-red-600 bg-white shadow-xl
          ${isSpinning ? 'transition-transform duration-5000 ease-out' : ''}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full"
            style={{
              transform: `rotate(${i * 45}deg)`,
              clipPath: 'polygon(50% 50%, 50% 0, 62% 0, 62% 50%)',
              backgroundColor: i % 2 === 0 ? '#cc0000' : '#ffffff',
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <Gift className="w-16 h-16 text-red-600" />
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-4 h-8 bg-yellow-400" />
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className="absolute top-full mt-8 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSpinning ? 'Girando...' : 'Girar Roleta'}
      </button>
    </div>
  );
};