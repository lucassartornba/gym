
import React from 'react';
import { TabType } from '../types';
import { Dumbbell, Utensils, UserCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange, title }) => {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white border-x border-gray-100 relative overflow-hidden">
      {/* Header */}
      <header className="px-6 py-5 bg-white border-b border-gray-50 sticky top-0 z-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h1>
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
          <span className="text-sm font-bold uppercase">MP</span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-md border-t border-gray-100 flex justify-around items-center py-3 px-2 safe-bottom z-20">
        <button
          onClick={() => onTabChange('workout')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'workout' ? 'text-blue-600' : 'text-gray-400'}`}
        >
          <Dumbbell size={24} strokeWidth={activeTab === 'workout' ? 2.5 : 2} />
          <span className="text-[10px] font-bold">Treino</span>
        </button>

        <button
          onClick={() => onTabChange('diet')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'diet' ? 'text-blue-600' : 'text-gray-400'}`}
        >
          <Utensils size={24} strokeWidth={activeTab === 'diet' ? 2.5 : 2} />
          <span className="text-[10px] font-bold">Dieta</span>
        </button>

        <button
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-400'}`}
        >
          <UserCircle size={24} strokeWidth={activeTab === 'profile' ? 2.5 : 2} />
          <span className="text-[10px] font-bold">Perfil</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
