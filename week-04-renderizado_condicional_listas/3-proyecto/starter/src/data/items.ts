// ============================================
// DATOS MOCK - Dominio Gimnasio
// ============================================

import { GymClass } from '../types';

export const items: GymClass[] = [
  {
    id: 1,
    nombre: 'Yoga Avanzado',
    instructor: 'María López',
    horario: 'Lunes 7:00 AM',
    nivel: 'avanzado',
    cupos: 0,
    categoria: 'yoga',
    isAvailable: false,
  },
  {
    id: 2,
    nombre: 'Spinning Intenso',
    instructor: 'Carlos Pérez',
    horario: 'Martes 6:00 PM',
    nivel: 'intermedio',
    cupos: 5,
    categoria: 'spinning',
    isAvailable: true,
  },
  {
    id: 3,
    nombre: 'Cardio Funcional',
    instructor: 'Ana Torres',
    horario: 'Miércoles 8:00 AM',
    nivel: 'principiante',
    cupos: 10,
    categoria: 'cardio',
    isAvailable: true,
  },
  {
    id: 4,
    nombre: 'Entrenamiento de Fuerza',
    instructor: 'Luis Gómez',
    horario: 'Jueves 5:00 PM',
    nivel: 'intermedio',
    cupos: 3,
    categoria: 'fuerza',
    isAvailable: true,
  },
  {
    id: 5,
    nombre: 'Yoga Básico',
    instructor: 'María López',
    horario: 'Viernes 9:00 AM',
    nivel: 'principiante',
    cupos: 8,
    categoria: 'yoga',
    isAvailable: true,
  },
  {
    id: 6,
    nombre: 'Spinning Express',
    instructor: 'Carlos Pérez',
    horario: 'Sábado 10:00 AM',
    nivel: 'principiante',
    cupos: 0,
    categoria: 'spinning',
    isAvailable: false,
  },
  {
    id: 7,
    nombre: 'Cardio HIIT',
    instructor: 'Ana Torres',
    horario: 'Domingo 11:00 AM',
    nivel: 'avanzado',
    cupos: 2,
    categoria: 'cardio',
    isAvailable: true,
  },
  {
    id: 8,
    nombre: 'Fuerza Total',
    instructor: 'Luis Gómez',
    horario: 'Lunes 6:00 PM',
    nivel: 'avanzado',
    cupos: 4,
    categoria: 'fuerza',
    isAvailable: true,
  },
];

// Categorías con etiquetas
export const categories = [
  { value: 'all', label: 'Todas las clases' },
  { value: 'cardio', label: '🏃 Cardio' },
  { value: 'fuerza', label: '💪 Fuerza' },
  { value: 'yoga', label: '🧘 Yoga' },
  { value: 'spinning', label: '🚴 Spinning' },
];

// Opciones de ordenamiento
export const sortOptions = [
  { value: 'nombre-asc', label: 'Nombre (A-Z)' },
  { value: 'nombre-desc', label: 'Nombre (Z-A)' },
  { value: 'instructor-asc', label: 'Instructor (A-Z)' },
  { value: 'instructor-desc', label: 'Instructor (Z-A)' },
  { value: 'cupos-asc', label: 'Cupos (menor a mayor)' },
  { value: 'cupos-desc', label: 'Cupos (mayor a menor)' },
];
