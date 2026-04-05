// QUÉ: Servicio en memoria para gestionar clientes y rutinas
// PARA: Proveer funciones CRUD y operaciones comunes sin persistencia
// IMPACTO: Permite probar la lógica del dominio sin base de datos

import type { Client, Routine, SessionRecord } from '../models';

// Generador simple de ids (no requiere dependencias externas)
let idCounter = 1;
function nextId(prefix = ''): string {
  return `${prefix}${idCounter++}`;
}

/** Estado interno (encapsulado) */
const clients: Client[] = [];
const routines: Routine[] = [];

/**
 * QUÉ: Inicializa los arrays internos con datos de seed
 * PARA: Permitir reiniciar el estado en pruebas
 * IMPACTO: Evita efectos colaterales entre ejecuciones
 */

export function initializeData(initialClients: Client[], initialRoutines: Routine[]): void {
  clients.length = 0;
  routines.length = 0;
  initialRoutines.forEach(r => routines.push(r));
  initialClients.forEach(c => clients.push(c));
}

/** Crea un cliente y lo añade al array */
export function createClient(data: Omit<Client, 'id' | 'assignedRoutineIds' | 'sessions'>): Client {
  const client: Client = {
    id: nextId('c-'),
    name: data.name,
    age: data.age,
    goal: data.goal,
    goalStatus: data.goalStatus,
    assignedRoutineIds: [],
    sessions: []
  };
  clients.push(client);
  return client;
}

/** Lista todos los clientes */
export function listClients(): Client[] {
  // devolvemos copia superficial para evitar mutaciones externas accidentales
  return clients.map(c => ({ ...c, assignedRoutineIds: [...c.assignedRoutineIds], sessions: [...c.sessions] }));
}

/** Busca rutina por id */
export function getRoutineById(id: string): Routine | undefined {
  return routines.find(r => r.id === id);
}

/** Lista rutinas */
export function listRoutines(): Routine[] {
  return routines.map(r => ({ ...r, exercises: r.exercises.map(e => ({ ...e })) }));
}

/** Asigna una rutina a un cliente (por ids) */
export function assignRoutineToClient(clientId: string, routineId: string): boolean {
  const client = clients.find(c => c.id === clientId);
  const routine = routines.find(r => r.id === routineId);
  if (!client || !routine) return false;
  if (!client.assignedRoutineIds.includes(routineId)) {
    client.assignedRoutineIds.push(routineId);
  }
  return true;
}

/** Registra una sesión completada por el cliente */
export function recordSession(clientId: string, session: Omit<SessionRecord, 'date'> & { date?: string }): boolean {
  const client = clients.find(c => c.id === clientId);
  if (!client) return false;
  const record: SessionRecord = {
    date: session.date ?? new Date().toISOString(),
    routineId: session.routineId,
    notes: session.notes,
    actualDurationMinutes: session.actualDurationMinutes
  };
  client.sessions.push(record);
  return true;
}

/** Filtra clientes por estado del objetivo */
export function filterClientsByGoalStatus(status: string): Client[] {
  return clients.filter(c => c.goalStatus === status).map(c => ({ ...c }));
}

/** Función auxiliar para crear rutinas desde seed */
export function createRoutine(data: Omit<Routine, 'id'>): Routine {
  const routine: Routine = {
    id: nextId('r-'),
    name: data.name,
    exercises: data.exercises,
    durationMinutes: data.durationMinutes,
    level: data.level
  };
  routines.push(routine);
  return routine;
}