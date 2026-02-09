
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import WorkoutTab from './pages/WorkoutTab';
import DietTab from './pages/DietTab';
import ProfileTab from './pages/ProfileTab';
import { TabType, User } from './types';
import { authService } from './services/authService';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('workout');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      // Realiza login anônimo automático
      const currentUser = await authService.loginAnonymously();
      setUser(currentUser);
      setInitialized(true);
    };
    initAuth();
  }, []);

  if (!initialized) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  const getTitle = (tab: TabType) => {
    switch (tab) {
      case 'workout': return 'Treinos';
      case 'diet': return 'Alimentação';
      case 'profile': return 'Perfil';
      default: return 'MyGym Pro';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'workout': return <WorkoutTab />;
      case 'diet': return <DietTab />;
      case 'profile': return <ProfileTab onLogout={() => window.location.reload()} />;
      default: return <WorkoutTab />;
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      onTabChange={setActiveTab} 
      title={getTitle(activeTab)}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
