
import React, { useState } from 'react';
import { Exercise } from '../types';
import { dataService } from '../services/dataService';
import { ArrowLeft, Check, Save } from 'lucide-react';

interface ExerciseDetailProps {
  exercise: Exercise;
  onBack: () => void;
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({ exercise, onBack }) => {
  const [formData, setFormData] = useState<Exercise>(exercise);
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'sets' || name === 'reps' || name === 'weight' ? Number(value) : value
    }));
    setIsSaved(false);
  };

  const handleSave = () => {
    dataService.updateExercise(exercise.id, formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-bottom duration-300">
      {/* Video Container */}
      <div className="relative aspect-video bg-black w-full shadow-lg">
        <iframe
          src={formData.videoUrl}
          className="absolute inset-0 w-full h-full border-0"
          title={formData.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="px-6 py-6 flex-1 overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{formData.name}</h2>
          <button 
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${isSaved ? 'bg-green-500 text-white' : 'bg-blue-600 text-white active:scale-95'}`}
          >
            {isSaved ? <Check size={18} /> : <Save size={18} />}
            {isSaved ? 'Salvo' : 'Salvar'}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Séries</label>
            <input
              type="number"
              name="sets"
              value={formData.sets}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 font-bold text-center focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Reps</label>
            <input
              type="number"
              name="reps"
              value={formData.reps}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 font-bold text-center focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Peso (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 font-bold text-center focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-8">
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Observações</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Alguma anotação sobre a execução?"
            className="w-full bg-gray-50 border border-gray-100 rounded-xl p-4 min-h-[100px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
