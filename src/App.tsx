import React from 'react';
import { Header } from './components/Header';
import { ProductShowcase } from './components/ProductShowcase';
import { Testimonials } from './components/Testimonials';
import { RegistrationForm } from './components/RegistrationForm';
import { ChatWidget } from './components/ChatWidget';
import { Users, ShieldCheck } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Kit Volta às Aulas
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Kit completo com mochila, cadernos, lápis de cor e muito mais
          </p>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center">
              <Users className="w-6 h-6 text-green-500 mr-2" />
              <span>146+ pessoas já adquiriram</span>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="w-6 h-6 text-blue-500 mr-2" />
              <span>Selo Oficial</span>
            </div>
          </div>
        </div>

        <ProductShowcase />
        <RegistrationForm />

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Depoimentos de Quem Já Adquiriu
          </h2>
          <Testimonials />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">Faber-Castell Brasil</h3>
              <p className="text-sm">
                CNPJ: 59.596.908/0001-52<br />
                Razão Social: A.W. Faber-Castell S.A.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Endereço</h3>
              <p className="text-sm">
                Rua Cel. José Augusto de O. Salles, 1863<br />
                São Carlos - SP, 13560-900
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contato</h3>
              <p className="text-sm">
                Email: atendimento@faber-castell.com.br<br />
                Tel: 0800 701 7001
              </p>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-700 pt-4">
            © 2024. Promoção válida apenas para famílias de baixa renda.
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;