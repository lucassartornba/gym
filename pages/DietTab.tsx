
import React, { useState, useEffect } from 'react';
import { DailyDiet, MealItem } from '../types';
import { dataService } from '../services/dataService';
import { Coffee, Sun, Moon, Apple, Plus, Save, Check, Trash2 } from 'lucide-react';

const DietTab: React.FC = () => {
  const [diet, setDiet] = useState<DailyDiet>(dataService.getDiet());
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setDiet(dataService.getDiet());
  }, []);

  const handleSave = () => {
    dataService.saveDiet(diet);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  // Fix: Restrict category to meal types and cast to MealItem[] to avoid union type confusion with userId (string)
  const addMealItem = (category: Exclude<keyof DailyDiet, 'userId'>) => {
    setDiet(prev => ({
      ...prev,
      [category]: [...(prev[category] as MealItem[]), { name: '', quantity: '', notes: '' }]
    }));
  };

  // Fix: Cast to MealItem[] to resolve error on line 31: 'map' does not exist on 'string | MealItem[]'
  const updateMealItem = (category: Exclude<keyof DailyDiet, 'userId'>, index: number, updates: Partial<MealItem>) => {
    setDiet(prev => ({
      ...prev,
      [category]: (prev[category] as MealItem[]).map((item, i) => i === index ? { ...item, ...updates } : item)
    }));
  };

  // Fix: Cast to MealItem[] to resolve error on line 38: 'filter' does not exist on 'string | MealItem[]'
  const removeMealItem = (category: Exclude<keyof DailyDiet, 'userId'>, index: number) => {
    setDiet(prev => ({
      ...prev,
      [category]: (prev[category] as MealItem[]).filter((_, i) => i !== index)
    }));
  };

  // Fix: Explicitly type category keys to exclude 'userId' to ensure alignment with MealItem operations
  const categories: { key: Exclude<keyof DailyDiet, 'userId'>, label: string, icon: React.ReactNode, color: string }[] = [
    { key: 'breakfast', label: 'Café da Manhã', icon: <Coffee size={20} />, color: 'bg-orange-50 text-orange-600' },
    { key: 'lunch', label: 'Almoço', icon: <Sun size={20} />, color: 'bg-blue-50 text-blue-600' },
    { key: 'dinner', label: 'Jantar', icon: <Moon size={20} />, color: 'bg-purple-50 text-purple-600' },
    { key: 'snacks', label: 'Lanches', icon: <Apple size={20} />, color: 'bg-green-50 text-green-600' }
  ];

  return (
    <div className="px-6 py-4 animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-gray-500 text-sm">Plano Alimentar</p>
          <h2 className="text-2xl font-bold">Minha Dieta</h2>
        </div>
        <button 
          onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold transition-all ${isSaved ? 'bg-green-500 text-white' : 'bg-blue-600 text-white active:scale-95 shadow-lg shadow-blue-100'}`}
        >
          {isSaved ? <Check size={18} /> : <Save size={18} />}
          {isSaved ? 'Salvo' : 'Salvar'}
        </button>
      </div>

      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.key} className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.color}`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800">{cat.label}</h3>
              </div>
              <button 
                onClick={() => addMealItem(cat.key)}
                className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:bg-blue-50 px-3 py-1.5 rounded-xl transition-colors"
              >
                <Plus size={16} /> Adicionar
              </button>
            </div>

            <div className="space-y-3">
              {/* Fix: Cast to MealItem[] to resolve error on line 84: 'map' does not exist on 'string | MealItem[]' */}
              {(diet[cat.key] as MealItem[]).map((item, index) => (
                <div key={index} className="bg-gray-50/50 p-4 rounded-[24px] border border-gray-100/50 space-y-3">
                  <div className="flex items-center gap-2">
                    <input 
                      type="text"
                      placeholder="Nome do alimento"
                      value={item.name}
                      onChange={e => updateMealItem(cat.key, index, { name: e.target.value })}
                      className="flex-1 bg-transparent border-none focus:ring-0 font-bold placeholder:text-gray-300 text-gray-700 p-0"
                    />
                    <button 
                      onClick={() => removeMealItem(cat.key, index)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="text"
                      placeholder="Quantidade"
                      value={item.quantity}
                      onChange={e => updateMealItem(cat.key, index, { quantity: e.target.value })}
                      className="bg-white border-none rounded-xl px-3 py-2 text-xs font-medium placeholder:text-gray-400 focus:ring-1 focus:ring-blue-100"
                    />
                    <input 
                      type="text"
                      placeholder="Notas"
                      value={item.notes}
                      onChange={e => updateMealItem(cat.key, index, { notes: e.target.value })}
                      className="bg-white border-none rounded-xl px-3 py-2 text-xs font-medium placeholder:text-gray-400 focus:ring-1 focus:ring-blue-100"
                    />
                  </div>
                </div>
              ))}
              {diet[cat.key].length === 0 && (
                <p className="text-center text-gray-300 text-xs py-4 border-2 border-dashed border-gray-50 rounded-2xl">
                  Nenhum alimento cadastrado.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietTab;
