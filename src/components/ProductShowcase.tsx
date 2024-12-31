import React from 'react';

const products = [
  {
    name: "Lápis de Cor EcoLápis",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    description: "Kit com 24 cores vibrantes e super resistentes"
  },
  {
    name: "Mochila Escolar",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    description: "Mochila resistente e espaçosa com compartimentos"
  },
  {
    name: "Kit Material Completo",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80",
    description: "Cola, lápis, borracha, apontador e canetas"
  }
];

export const ProductShowcase: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};