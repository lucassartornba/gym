
import React from 'react';
import { Exercise } from '../types';
import { Play, ChevronDown, ChevronUp, History } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  isExpanded: boolean;
  onToggle: () => void;
  onPRUpdate: (id: string, value: string) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, isExpanded, onToggle, onPRUpdate }) => {
  const prNumeric = parseInt(exercise.prValue?.replace('kg', '') || '0') || 0;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPRUpdate(exercise.id, `${e.target.value}kg`);
  };

  return (
    <div 
      className={`bg-white rounded-[32px] border transition-all duration-300 overflow-hidden ${
        isExpanded ? 'border-blue-200 shadow-xl shadow-blue-50/50 my-2' : 'border-gray-100 shadow-sm'
      }`}
    >
      {/* Cabeçalho do Card */}
      <div 
        onClick={onToggle}
        className="p-5 flex items-center gap-4 cursor-pointer active:bg-gray-50 transition-colors"
      >
        <div 
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 ${
            isExpanded ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
          }`}
        >
          <Play size={20} fill="currentColor" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-[15px] mb-0.5 truncate">{exercise.name}</h3>
          <div className="flex items-center gap-3 text-gray-400">
            <span className="text-[11px] font-medium tracking-tight">12, 10, 8, 6</span>
            <div className="h-3 w-[1px] bg-gray-100"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-extrabold text-blue-500 uppercase tracking-widest">PR:</span>
              <span className="text-[11px] font-bold text-gray-700">{exercise.prValue || '0kg'}</span>
            </div>
          </div>
        </div>

        <div className="text-gray-300">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {/* Conteúdo Expandido */}
      {isExpanded && (
        <div className="px-5 pb-6 space-y-5 animate-in slide-in-from-top-4 duration-300">
          
          {/* Player de Vídeo HTML5 Inline */}
          <div className="relative w-full aspect-[9/16] max-h-[500px] bg-black rounded-[20px] overflow-hidden shadow-2xl ring-1 ring-black/5">
            {exercise.videoUrl.includes('firebasestorage') ? (
              <video
                src={exercise.videoUrl}
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                autoPlay={false}
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            ) : (
              <iframe
                src={exercise.videoUrl}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Ajuste de Recorde Pessoal (PR) */}
          <div className="space-y-4 bg-slate-50 p-5 rounded-[24px] border border-slate-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm border border-slate-100">
                  <History size={16} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Meu Recorde</span>
                  <span className="text-[11px] text-slate-400 font-medium">Melhor carga pessoal</span>
                </div>
              </div>
              <div className="bg-white px-5 py-2 rounded-2xl shadow-sm border border-slate-100 ring-4 ring-blue-500/5">
                <span className="text-2xl font-black text-blue-600 tracking-tight">{exercise.prValue || '0kg'}</span>
              </div>
            </div>
            
            <div className="pt-2">
              <input 
                type="range"
                min="0"
                max="200"
                step="1"
                value={prNumeric}
                onChange={handleSliderChange}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none ring-offset-4 focus:ring-2 ring-blue-500/10"
              />
              <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                <span>0kg</span>
                <span>100kg</span>
                <span>200kg</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
