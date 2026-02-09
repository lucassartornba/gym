
export enum MuscleGroup {
  PEITO = 'Peito',
  TRICEPS = 'Tríceps',
  COSTAS = 'Costas',
  BICEPS = 'Bíceps',
  OMBROS_PERNAS = 'Ombros & Pernas'
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  videoUrl: string;
  sets: number;
  reps: number;
  weight: number;
  notes: string;
  prValue?: string; // Recorde Pessoal individual
}

export interface PersonalRecord {
  id: string;
  userId: string;
  exerciseName: string;
  maxWeight: number;
  reps: number;
  date: string;
  videoLink?: string;
}

export interface MealItem {
  name: string;
  quantity: string;
  notes: string;
}

export interface DailyDiet {
  userId: string;
  breakfast: MealItem[];
  lunch: MealItem[];
  dinner: MealItem[];
  snacks: MealItem[];
}

export type TabType = 'workout' | 'diet' | 'profile';
