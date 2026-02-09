
import React, { useState } from 'react';
import { authService } from '../services/authService';
import { Mail, Lock, LogIn } from 'lucide-react';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setLoading(true);
    // Simula atraso do Firebase
    setTimeout(async () => {
      await authService.login(email, name || 'Usuário');
      setLoading(false);
      onLoginSuccess();
    }, 1200);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white p-8 justify-center animate-in fade-in duration-500">
      <div className="mb-10 text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-[30%] mx-auto mb-6 flex items-center justify-center shadow-xl shadow-blue-100">
          <LogIn size={40} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">MyGym Pro</h1>
        <p className="text-gray-400 font-medium">Sua evolução começa aqui</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nome Completo</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Como quer ser chamado?"
              className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-100 transition-all font-medium text-gray-700"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">E-mail</label>
          <div className="relative">
            <input 
              type="email" 
              placeholder="seu@email.com"
              className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-100 transition-all font-medium text-gray-700"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Senha</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-100 transition-all font-medium text-gray-700"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button 
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-5 rounded-3xl shadow-lg shadow-blue-100 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 disabled:bg-blue-300"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            'Entrar no App'
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Não tem uma conta? <span className="text-blue-600 font-bold cursor-pointer hover:underline">Cadastre-se</span>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
