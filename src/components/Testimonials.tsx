import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    comment: "Não acreditei quando ganhei! Minha filha adorou a mochila da Frozen!",
    date: "2 dias atrás"
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
    comment: "Kit escolar completo para meu filho. Muito obrigado Faber-Castell!",
    date: "5 dias atrás"
  },
  {
    name: "Ana Oliveira",
    location: "Belo Horizonte, MG",
    comment: "Material de excelente qualidade. Meus filhos amaram!",
    date: "1 semana atrás"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="flex-1">
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.location}</p>
            </div>
            <CheckCircle className="text-green-500 w-6 h-6" />
          </div>
          <p className="text-gray-700 mb-4">{testimonial.comment}</p>
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">{testimonial.date}</p>
        </div>
      ))}
    </div>
  );
};