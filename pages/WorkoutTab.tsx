
import React, { useState, useEffect } from 'react';
import { MuscleGroup, Exercise } from '../types';
import { dataService } from '../services/dataService';
import ExerciseCard from '../components/ExerciseCard';
import { Search, TrendingUp, ChevronLeft } from 'lucide-react';

const CINEMATIC_ASSETS: Record<MuscleGroup, string> = {
  [MuscleGroup.PEITO]: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
  [MuscleGroup.TRICEPS]: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?q=80&w=800&auto=format&fit=crop',
  [MuscleGroup.COSTAS]: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop',
  [MuscleGroup.BICEPS]: 'https://images.unsplash.com/photo-1581009146145-b5ef03a74e7f?q=80&w=800&auto=format&fit=crop',
  [MuscleGroup.OMBROS_PERNAS]: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
};

const WorkoutTab: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<MuscleGroup | null>(null);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [expandedExerciseId, setExpandedExerciseId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  // Carrega os exercícios com PRs do localStorage ao montar
  useEffect(() => {
    const loadedExercises = dataService.getExercises();
    setExercises(loadedExercises);
  }, []);

  const handlePRUpdate = (id: string, value: string) => {
    // 1. Persiste imediatamente no localStorage (incluindo a chave individual pr_<id>)
    dataService.updateExercise(id, { prValue: value });
    
    // 2. Atualiza o estado da UI para feedback fluido
    setExercises(prev => prev.map(ex => ex.id === id ? { ...ex, prValue: value } : ex));
  };

  const toggleExpand = (id: string) => {
    setExpandedExerciseId(expandedExerciseId === id ? null : id);
  };

  const filteredExercises = exercises.filter(ex => 
    (!selectedGroup || ex.muscleGroup === selectedGroup) &&
    (ex.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">
      {/* Header Visual */}
      <div className="relative h-56 overflow-hidden rounded-b-[48px] mx-1 shadow-2xl shadow-blue-900/10">
        <img 
          src={selectedGroup ? CINEMATIC_ASSETS[selectedGroup] : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop'} 
          className="w-full h-full object-cover transition-all duration-1000 scale-105"
          alt="Gym Header"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-blue-900/40 to-slate-900/20"></div>
        
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-400 mb-1">
              <TrendingUp size={14} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Foco em Resultados</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              {selectedGroup ? (selectedGroup === MuscleGroup.OMBROS_PERNAS ? "Ombros & Pernas" : selectedGroup) : 'Meus Treinos'}
            </h2>
          </div>
          {selectedGroup && (
            <button 
              onClick={() => setSelectedGroup(null)}
              className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white/80 active:scale-90 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
          )}
        </div>
      </div>

      <div className="px-6 space-y-7">
        {/* Busca */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 transition-colors group-focus-within:text-blue-500" size={18} />
          <input 
            type="text"
            placeholder="Qual exercício hoje?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-50 border border-gray-100 rounded-[24px] py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-blue-100 transition-all font-medium text-gray-700 placeholder:text-gray-300"
          />
        </div>

        {/* Categorias (Muscle Groups) */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar flex-nowrap items-center">
          {Object.values(MuscleGroup).map(group => (
            <button
              key={group}
              onClick={() => {
                setSelectedGroup(selectedGroup === group ? null : group);
                setExpandedExerciseId(null);
              }}
              className={`px-4 py-3 min-h-[52px] rounded-[18px] text-[10px] font-bold uppercase tracking-wider transition-all border shrink-0 ${
                selectedGroup === group 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200/50 scale-105' 
                : 'bg-white border-gray-100 text-gray-400 hover:border-blue-200'
              }`}
            >
              {group === MuscleGroup.OMBROS_PERNAS ? "Ombros / Pernas" : group}
            </button>
          ))}
        </div>

        {/* Lista de Exercícios */}
        <div className="grid gap-4 pb-12">
          {filteredExercises.map((exercise, index) => (
            <React.Fragment key={exercise.id}>
              {/* Header Ombros */}
              {selectedGroup === MuscleGroup.OMBROS_PERNAS && index === 0 && (
                <div className="flex items-center gap-4 mt-2 mb-4 px-2">
                  <span className="text-[10px] font-extrabold text-blue-500/80 uppercase tracking-widest">Ombros</span>
                  <div className="h-[1px] flex-1 bg-gray-100"></div>
                </div>
              )}
              {/* Header Pernas: Posteriores */}
              {selectedGroup === MuscleGroup.OMBROS_PERNAS && index === 5 && (
                <div className="flex items-center gap-4 mt-8 mb-4 px-2">
                  <div className="h-[1px] flex-1 bg-gray-100"></div>
                  <span className="text-[10px] font-extrabold text-blue-500/80 uppercase tracking-widest">Pernas: Posteriores</span>
                </div>
              )}
              {/* Header Pernas: Quadríceps */}
              {selectedGroup === MuscleGroup.OMBROS_PERNAS && index === 8 && (
                <div className="flex items-center gap-4 mt-8 mb-4 px-2">
                  <div className="h-[1px] flex-1 bg-gray-100"></div>
                  <span className="text-[10px] font-extrabold text-blue-500/80 uppercase tracking-widest">Pernas: Quadríceps</span>
                </div>
              )}
              <ExerciseCard 
                exercise={exercise} 
                isExpanded={expandedExerciseId === exercise.id}
                onToggle={() => toggleExpand(exercise.id)}
                onPRUpdate={handlePRUpdate}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutTab;
