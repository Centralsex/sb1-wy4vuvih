import React, { useState } from 'react';
import { validateCPF } from '../utils/validateCPF';
import { formatCPF } from '../utils/formatCPF';

interface FormData {
  cpf: string;
  name: string;
}

export const RegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    cpf: '',
    name: ''
  });
  const [error, setError] = useState('');

  const handleCPFSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCPF(formData.cpf)) {
      setError('CPF inválido. Por favor, verifique.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://go.disruptybr.net/jlfqxcyedt';
  };

  const renderStep1 = () => (
    <form onSubmit={handleCPFSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">CPF do Responsável</label>
        <input
          type="text"
          value={formData.cpf}
          onChange={(e) => setFormData({ ...formData, cpf: formatCPF(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
          placeholder="000.000.000-00"
          maxLength={14}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            <strong>Importante:</strong> Esta oferta é exclusiva para famílias de baixa renda.
            Apenas 1 CPF por família será aceito.
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
      >
        Continuar
      </button>
    </form>
  );

  const renderStep2 = () => (
    <form onSubmit={handleFinalSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
      >
        Acessar Página de Vendas Oficial
      </button>
      <p className="text-sm text-center text-gray-600 mt-2">
        Você será redirecionado para nossa página de vendas oficial
      </p>
    </form>
  );

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Cadastre-se para Receber seu Kit Volta às Aulas</h3>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
    </div>
  );
};