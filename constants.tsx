
import { MuscleGroup, Exercise } from './types';

export const INITIAL_EXERCISES: Exercise[] = [
  // PEITO (4)
  { 
    id: 'p1', 
    name: 'Supino Reto', 
    muscleGroup: MuscleGroup.PEITO, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/supino.mp4?alt=media&token=4771e160-ce4f-4127-a175-b587dbb1bc1f', 
    sets: 4, 
    reps: 10, 
    weight: 60, 
    notes: '' 
  },
  { 
    id: 'p2', 
    name: 'Supino Inclinado', 
    muscleGroup: MuscleGroup.PEITO, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/supinoinclinado-_2_.mp4?alt=media&token=cfe14684-4236-4625-9f0e-e10c04c0865b', 
    sets: 4, 
    reps: 10, 
    weight: 50, 
    notes: '' 
  },
  { 
    id: 'p3', 
    name: 'Peck Deck', 
    muscleGroup: MuscleGroup.PEITO, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/peckdeck%20(1).mp4?alt=media&token=83f63199-6bbc-409d-84a1-0efe8352e0b9', 
    sets: 3, 
    reps: 12, 
    weight: 45, 
    notes: '' 
  },
  { 
    id: 'p4', 
    name: 'Crossover', 
    muscleGroup: MuscleGroup.PEITO, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/crossover.mp4?alt=media&token=5df74b58-52ca-4a59-9805-c0abf25c2b6d', 
    sets: 3, 
    reps: 15, 
    weight: 20, 
    notes: '' 
  },

  // TRICEPS (4)
  { 
    id: 't1', 
    name: 'Tríceps Unilateral', 
    muscleGroup: MuscleGroup.TRICEPS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/tricepsunilateral.mp4?alt=media&token=42dfc297-903f-42c1-b353-a91e75c999a4', 
    sets: 4, 
    reps: 12, 
    weight: 15, 
    notes: '' 
  },
  { 
    id: 't2', 
    name: 'Tríceps Barra', 
    muscleGroup: MuscleGroup.TRICEPS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/triceps%20barra.mp4?alt=media&token=3329f890-3931-44bb-90b4-47d531ba1233', 
    sets: 4, 
    reps: 12, 
    weight: 25, 
    notes: '' 
  },
  { 
    id: 't3', 
    name: 'Tríceps Coice', 
    muscleGroup: MuscleGroup.TRICEPS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/triceps%20coice.mp4?alt=media&token=db2d221d-9d24-4c85-b6d9-68dc0ff20572', 
    sets: 3, 
    reps: 10, 
    weight: 10, 
    notes: '' 
  },
  { 
    id: 't4', 
    name: 'Tríceps Francês', 
    muscleGroup: MuscleGroup.TRICEPS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/triceps%20frances.mp4?alt=media&token=96049046-bfe4-4595-9ae0-ec48cdf4b243', 
    sets: 3, 
    reps: 10, 
    weight: 12, 
    notes: '' 
  },

  // COSTAS (4)
  { 
    id: 'c1', 
    name: 'Puxada Frente', 
    muscleGroup: MuscleGroup.COSTAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/puxadafrente.mp4?alt=media&token=a1a9d140-cc9c-47e7-9344-bb0cb127fd94', 
    sets: 4, 
    reps: 12, 
    weight: 45, 
    notes: '' 
  },
  { 
    id: 'c2', 
    name: 'Remada Baixa', 
    muscleGroup: MuscleGroup.COSTAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/remadabaixa.mp4?alt=media&token=fa9cc8bc-55d2-4978-a68e-6e9bc0a1ae60', 
    sets: 4, 
    reps: 12, 
    weight: 50, 
    notes: '' 
  },
  { 
    id: 'c3', 
    name: 'Pulldown', 
    muscleGroup: MuscleGroup.COSTAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/pulldown.mp4?alt=media&token=d27b3db2-8ebc-431b-8d1f-30fde787b150', 
    sets: 3, 
    reps: 12, 
    weight: 35, 
    notes: '' 
  },
  { 
    id: 'c4', 
    name: 'Remada Curvada', 
    muscleGroup: MuscleGroup.COSTAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/remadacurvada.mp4?alt=media&token=ee056724-6256-410c-ac41-d016ec66e77a', 
    sets: 4, 
    reps: 10, 
    weight: 40, 
    notes: '' 
  },

  // BICEPS (4)
  { 
    id: 'b1', 
    name: 'Rosca W', 
    muscleGroup: MuscleGroup.BICEPS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/roscaw.mp4?alt=media&token=03c9a6e9-89e5-4878-81d1-1833fa5293ce', 
    sets: 4, 
    reps: 12, 
    weight: 20, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'b2', 
    name: 'Rosca Scott', 
    muscleGroup: MuscleGroup.BICEPS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/roscascott.mp4?alt=media&token=7040f705-9e58-4db7-848e-ec183951c013', 
    sets: 4, 
    reps: 12, 
    weight: 15, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'b3', 
    name: 'Rosca Alternada', 
    muscleGroup: MuscleGroup.BICEPS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/roscaalternada.mp4?alt=media&token=e8a6cac7-50a1-4794-bd95-ebcb73b40805', 
    sets: 4, 
    reps: 12, 
    weight: 12, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'b4', 
    name: 'Rosca 45', 
    muscleGroup: MuscleGroup.BICEPS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/rosca45.mp4?alt=media&token=5b96013a-0502-4d2a-883c-9d95989ae669', 
    sets: 4, 
    reps: 12, 
    weight: 10, 
    notes: '',
    prValue: '0kg'
  },

  // OMBROS & PERNAS (5 OMBROS + 3 POSTERIORES + 3 QUADRICEPS)
  { 
    id: 'o1', 
    name: 'Desenvolvimento com Halteres', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/OMBRO%20HALTERES.mp4?alt=media&token=8aa202f6-e6f8-4315-bdac-25ba48d7ac1f', 
    sets: 4, 
    reps: 12, 
    weight: 18, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'o2', 
    name: 'Elevação Lateral Sentado', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/ELEVA%C3%87%C3%83O%20LATERAL%20SENTADO.mp4?alt=media&token=7685f85f-a47b-4436-86df-799e7b19eabb', 
    sets: 4, 
    reps: 12, 
    weight: 10, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'o3', 
    name: 'Elevação Frontal', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/ELEVA%C3%87%C3%83O%20FRONTAL.mp4?alt=media&token=f95b491e-f098-4613-91e4-ad1bba3d96f1', 
    sets: 4, 
    reps: 12, 
    weight: 8, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'o4', 
    name: 'Desenvolvimento Máquina', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/DESELVOV.%20MAQUINA.mp4?alt=media&token=80e6dc00-52c9-4e2e-85b2-4e7d66f9a3c5', 
    sets: 4, 
    reps: 12, 
    weight: 20, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'o5', 
    name: 'Crucifixo Inverso', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/CRUSCIFIXO%20INVERSO.mp4?alt=media&token=8346fc96-cc52-424d-95b6-d8a6648d9b0b', 
    sets: 4, 
    reps: 12, 
    weight: 8, 
    notes: '',
    prValue: '0kg'
  },
  // POSTERIORES (3)
  { 
    id: 'post1', 
    name: 'Stiff', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/STIFF.mp4?alt=media&token=a9a12188-2a14-40b9-a6c9-867bbe878d0b', 
    sets: 4, 
    reps: 12, 
    weight: 0, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'post2', 
    name: 'Mesa Flexora', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/mesa%20flexora.mp4?alt=media&token=94434a3b-efce-4389-9714-1156ca15c667', 
    sets: 4, 
    reps: 12, 
    weight: 0, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'post3', 
    name: 'Flexora Unilateral', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/flexora%20unilateral.mp4?alt=media&token=98e791e4-2dc9-4274-9009-791ad2049f19', 
    sets: 4, 
    reps: 12, 
    weight: 0, 
    notes: '',
    prValue: '0kg'
  },
  // QUADRICEPS (3)
  { 
    id: 'quad1', 
    name: 'Extensora', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/extensora.mp4?alt=media&token=1f658a77-76da-4516-95f1-d77bbdf0a24b', 
    sets: 4, 
    reps: 12, 
    weight: 0, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'quad2', 
    name: 'Agachamento com Halter', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/agachamento%20halter.mp4?alt=media&token=25d0b796-ab88-4347-a128-6dab4958bfe2', 
    sets: 4, 
    reps: 12, 
    weight: 0, 
    notes: '',
    prValue: '0kg'
  },
  { 
    id: 'quad3', 
    name: 'Leg Press', 
    muscleGroup: MuscleGroup.OMBROS_PERNAS, 
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/gym25-f9d83.firebasestorage.app/o/legpress.mp4?alt=media&token=3ae67268-1233-4194-955b-4dbc58857954', 
    sets: 4, 
    reps: 12, 
    weight: 0, 
    notes: '',
    prValue: '0kg'
  },
];
