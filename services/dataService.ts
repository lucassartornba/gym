
import { Exercise, PersonalRecord, DailyDiet } from '../types';
import { INITIAL_EXERCISES } from '../constants';

// Chaves de armazenamento fixas para garantir persistência entre sessões do navegador
const STORAGE_KEYS = {
  EXERCISES: 'mygym_exercises_v1',
  PRS: 'mygym_prs_v1',
  DIET: 'mygym_diet_v1',
  INDIVIDUAL_PR_PREFIX: 'pr' // O padrão solicitado: pr_<id_do_exercicio>
};

export const dataService = {
  /**
   * Obtém a lista de exercícios injetando os PRs salvos individualmente.
   * Garante que o valor no localStorage sempre prevaleça.
   */
  getExercises: (): Exercise[] => {
    const storedData = window.localStorage.getItem(STORAGE_KEYS.EXERCISES);
    let exercises: Exercise[] = storedData ? JSON.parse(storedData) : INITIAL_EXERCISES;
    
    // Injeção de PRs Individuais (Padrão: pr_<id>)
    return exercises.map(ex => {
      const prKey = `${STORAGE_KEYS.INDIVIDUAL_PR_PREFIX}_${ex.id}`;
      const savedPR = window.localStorage.getItem(prKey);
      
      // Se houver um valor salvo, ele substitui o valor do objeto
      return savedPR ? { ...ex, prValue: savedPR } : ex;
    });
  },
  
  /**
   * Salva a lista completa e também o PR individual para redundância
   */
  saveExercises: (exercises: Exercise[]) => {
    window.localStorage.setItem(STORAGE_KEYS.EXERCISES, JSON.stringify(exercises));
  },
  
  /**
   * Atualiza um exercício específico e garante a persistência do PR na chave individual
   */
  updateExercise: (id: string, updates: Partial<Exercise>) => {
    const exercises = dataService.getExercises();
    
    // Persistência Crítica: Salva o PR na chave individual pr_<id>
    if (updates.prValue !== undefined) {
      const prKey = `${STORAGE_KEYS.INDIVIDUAL_PR_PREFIX}_${id}`;
      window.localStorage.setItem(prKey, updates.prValue);
    }
    
    const updated = exercises.map(ex => ex.id === id ? { ...ex, ...updates } : ex);
    dataService.saveExercises(updated);
  },
  
  getPRs: (): PersonalRecord[] => {
    const data = window.localStorage.getItem(STORAGE_KEYS.PRS);
    return data ? JSON.parse(data) : [];
  },
  
  savePR: (pr: PersonalRecord) => {
    const prs = dataService.getPRs();
    const updated = [pr, ...prs];
    window.localStorage.setItem(STORAGE_KEYS.PRS, JSON.stringify(updated));
  },
  
  getDiet: (): DailyDiet => {
    const data = window.localStorage.getItem(STORAGE_KEYS.DIET);
    if (data) return JSON.parse(data);
    
    return {
      userId: 'local_user',
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: []
    };
  },
  
  saveDiet: (diet: DailyDiet) => {
    window.localStorage.setItem(STORAGE_KEYS.DIET, JSON.stringify(diet));
  }
};
