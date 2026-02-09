
import React, { useState, useEffect } from 'react';
import { PersonalRecord } from '../types';
import { dataService } from '../services/dataService';
import { authService } from '../services/authService';
import { Plus, Flame, Calendar, Weight, Youtube, X } from 'lucide-react';

const PRTab: React.FC = () => {
  const [prs, setPrs] = useState<PersonalRecord[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newPr, setNewPr] = useState<Partial<PersonalRecord>>({
    exerciseName: '',
    maxWeight: 0,
    reps: 1,
    date: new Date().toISOString().split('T')[0],
    videoLink: ''
  });

  useEffect(() => {
    setPrs(dataService.getPRs());
  }, []);

  const handleAddPr = () => {
    // Get current user to include userId in the PR record
    const user = authService.getCurrentUser();
    if (!newPr.exerciseName || !newPr.maxWeight || !user) return;
    
    const fullPr: PersonalRecord = {
      id: Date.now().toString(),
      userId: user.id,
      exerciseName: newPr.exerciseName!,
      maxWeight: newPr.maxWeight!,
      reps: newPr.reps || 1,
      date: newPr.date || new Date().toISOString().split('T')[0],
      videoLink: newPr.videoLink
    };
    dataService.savePR(fullPr);
    setPrs(dataService.getPRs());
    setShowForm(false);
    setNewPr({
      exerciseName: '',
      maxWeight: 0,
      reps: 1,
      date: new Date().toISOString().split('T')[0],
      videoLink: ''
    });
  };

  return (
    <div className="px-6 py-4 animate-in fade-in duration-500 relative min-h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-500 text-sm">Seu progresso</p>
          <h2 className="text-2xl font-bold flex items-center gap-2">Recordes <Flame className="text-orange-500" size={20} fill="currentColor" /></h2>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100 active:scale-95 transition-all"
        >
          <Plus size={24} />
        </button>
      </div>

      {prs.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          Você ainda não registrou nenhum PR. Que tal começar agora?
        </div>
      ) : (
        <div className="grid gap-4">
          {prs.map(pr => (
            <div key={pr.id} className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10 opacity-40"></div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">{pr.exerciseName}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Weight size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider leading-none mb-1">Carga</p>
                    <p className="font-bold text-gray-700">{pr.maxWeight} kg</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider leading-none mb-1">Data</p>
                    <p className="font-bold text-gray-700">{new Date(pr.date).toLocaleDateString('pt-BR')}</p>
                  </div>
                </div>
              </div>
              {pr.videoLink && (
                <a 
                  href={pr.videoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider"
                >
                  <Youtube size={16} fill="currentColor" /> Assistir Execução
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-sm rounded-[32px] p-8 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Novo Recorde</h3>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Exercício</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Ex: Leg Press"
                  value={newPr.exerciseName}
                  onChange={e => setNewPr({...newPr, exerciseName: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Peso (kg)</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    value={newPr.maxWeight}
                    onChange={e => setNewPr({...newPr, maxWeight: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Reps</label>
                  <input 
                    type="number" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    value={newPr.reps}
                    onChange={e => setNewPr({...newPr, reps: Number(e.target.value)})}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Data</label>
                <input 
                  type="date" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  value={newPr.date}
                  onChange={e => setNewPr({...newPr, date: e.target.value})}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase block mb-1">Link Vídeo (Opcional)</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="https://youtube.com/..."
                  value={newPr.videoLink}
                  onChange={e => setNewPr({...newPr, videoLink: e.target.value})}
                />
              </div>
              <button 
                onClick={handleAddPr}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-100 active:scale-[0.98] transition-all mt-4"
              >
                Registrar PR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PRTab;
