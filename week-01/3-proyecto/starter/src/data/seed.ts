// QUÉ: Datos de ejemplo para probar el flujo
// PARA: Proveer clientes y rutinas iniciales sin necesidad de crear todo manualmente
// IMPACTO: Permite demostrar la funcionalidad en index.ts rápidamente

import type { Client, Routine, Exercise } from '../models';

const ex1: Exercise = {
  id: 'e-1',
  name: 'Sentadilla',
  muscleGroup: 'Pierna',
  repsOrTime: '3x10',
  level: 'beginner'
};

const ex2: Exercise = {
  id: 'e-2',
  name: 'Flexiones',
  muscleGroup: 'Pecho',
  repsOrTime: '3x8',
  level: 'beginner'
};

const ex3: Exercise = {
  id: 'e-3',
  name: 'Plancha',
  muscleGroup: 'Core',
  repsOrTime: '3x30s',
  level: 'beginner'
};

export const sampleRoutines: Omit<Routine, 'id'>[] = [
  {
    name: 'Rutina Full Body Principiante',
    exercises: [ex1, ex2, ex3],
    durationMinutes: 40,
    level: 'beginner'
  },
  {
    name: 'Cardio y Core',
    exercises: [
      { ...ex3, id: 'e-4', name: 'Plancha lateral', repsOrTime: '3x20s', level: 'beginner' }
    ],
    durationMinutes: 30,
    level: 'beginner'
  }
];

export const sampleClients: Omit<Client, 'id' | 'assignedRoutineIds' | 'sessions'>[] = [
  {
    name: 'María Pérez',
    age: 28,
    goal: 'Perder grasa y tonificar',
    goalStatus: 'planned'
  },
  {
    name: 'Carlos Gómez',
    age: 35,
    goal: 'Ganar fuerza en piernas',
    goalStatus: 'in_progress'
  }
];