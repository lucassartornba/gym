
import React from 'react';
import { authService } from '../services/authService';
import { LogOut, ChevronRight, Shield, Bell, HelpCircle, Settings, UserCheck } from 'lucide-react';

interface ProfileTabProps {
  onLogout: () => void;
}

const ProfileTab: React.FC<ProfileTabProps> = ({ onLogout }) => {
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    // Para login anônimo, logout funciona como "Resetar conta"
    if (confirm('Deseja resetar seus dados? Isso apagará seus treinos e dieta salvos localmente.')) {
      authService.logout();
      onLogout();
    }
  };

  const menuItems = [
    { icon: <Settings size={20} />, label: 'Preferências', color: 'text-blue-600' },
    { icon: <Shield size={20} />, label: 'Segurança dos Dados', color: 'text-green-600' },
    { icon: <Bell size={20} />, label: 'Notificações', color: 'text-orange-600' },
    { icon: <UserCheck size={20} />, label: 'Sincronizar Conta', color: 'text-blue-600' },
  ];

  return (
    <div className="px-6 py-4 animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-[40px] p-8 text-white mb-8 shadow-xl shadow-blue-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex items-center gap-5 mb-2 relative">
          <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl font-bold border border-white/30">
            {user?.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <div className="bg-blue-400/30 px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider inline-block">
              Conta Anônima
            </div>
            <p className="text-blue-100 text-[10px] mt-1 opacity-70">ID: {user?.id}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-10">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2 mb-4">Gerenciamento</h3>
        {menuItems.map((item, idx) => (
          <button 
            key={idx}
            className="w-full flex items-center justify-between p-5 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm ${item.color}`}>
                {item.icon}
              </div>
              <span className="font-semibold text-gray-700">{item.label}</span>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
          </button>
        ))}
      </div>

      <button 
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 p-5 bg-red-50 text-red-600 rounded-3xl font-bold hover:bg-red-100 transition-colors"
      >
        <LogOut size={20} />
        Resetar Aplicativo
      </button>

      <div className="mt-10 text-center">
        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">Sessão Protegida por MyGym Pro</p>
      </div>
    </div>
  );
};

export default ProfileTab;
