// QUÉ: Definición de tipos y entidades del dominio "Entrenador personal"
// PARA: Tipar todo el proyecto y evitar errores en cuando lo ejecute 
// IMPACTO: Facilita refactor, autocompletado y comprobación con TypeScript (strict)

export type GoalStatus = 'planned' | 'in_progress' | 'completed';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Exercise {
  /** Identificador único local */
  id: string;
  /** Nombre del ejercicio */
  name: string;
  /** Grupo muscular principal */
  muscleGroup: string;
  /** Repeticiones o duración  */
  repsOrTime: string;
  /** Nivel recomendado */
  level: DifficultyLevel;
}

export interface Routine {
  /** Identificador único */
  id: string;
  /** Nombre de la rutina  */
  name: string;
  /** Lista de ejercicios incluidos en la rutina */
  exercises: Exercise[];
  /** Duración estimada en minutos */
  durationMinutes: number;
  /** Nivel objetivo */
  level: DifficultyLevel;
}

export interface SessionRecord {
  /** Fecha de la sesión */
  date: string;
  /** Id de la rutina usada */
  routineId: string;
  /** Notas libres del entrenador o cliente */
  notes?: string;
  /** Duración real en minutos */
  actualDurationMinutes?: number;
}

export interface Client {
  /** Identificador único */
  id: string;
  /** Nombre completo */
  name: string;
  /** Edad */
  age: number;
  /** Objetivo principal  */
  goal: string;
  /** Estado del objetivo */
  goalStatus: GoalStatus;
  /** Ids de rutinas asignadas */
  assignedRoutineIds: string[];
  /** Historial de sesiones */
  sessions: SessionRecord[];
}