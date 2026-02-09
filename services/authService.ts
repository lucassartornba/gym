
import { User } from '../types';

const USER_KEY = 'mygym_auth_user_v1';

export const authService = {
  login: async (email: string, name: string): Promise<User> => {
    const user: User = {
      id: 'user_local_main',
      email: email,
      name: name
    };
    
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  },

  loginAnonymously: async (): Promise<User> => {
    const existingUser = authService.getCurrentUser();
    if (existingUser) return existingUser;

    const user: User = {
      id: 'visitor_local_main',
      email: 'anonimo@mygym.com',
      name: 'Visitante'
    };
    
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  },
  
  logout: () => {
    window.localStorage.clear(); // Limpa TUDO para o reset completo solicitado no perfil
  },
  
  getCurrentUser: (): User | null => {
    const data = window.localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  }
};
