// ============================================
// TIPOS E INTERFACES - Dominio Gimnasio
// ============================================

export interface GymClass {
  id: number;
  nombre: string;
  instructor: string;
  horario: string;
  nivel: 'principiante' | 'intermedio' | 'avanzado';
  cupos: number;
  categoria: Category;
  isAvailable: boolean;
}

// Categorías de clases en el gimnasio
export type Category = 'all' | 'cardio' | 'fuerza' | 'yoga' | 'spinning';

// Opciones de ordenamiento
export type SortOption =
  | 'nombre-asc'
  | 'nombre-desc'
  | 'instructor-asc'
  | 'instructor-desc'
  | 'cupos-asc'
  | 'cupos-desc';

// Estado de los filtros
export interface FilterState {
  searchTerm: string;
  category: Category;
  showOnlyAvailable: boolean;
  sortBy: SortOption;
  nivel?: 'principiante' | 'intermedio' | 'avanzado';
}
