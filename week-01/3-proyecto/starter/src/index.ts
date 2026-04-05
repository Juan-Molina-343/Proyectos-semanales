// QUÉ: Punto de entrada demo que muestra un flujo mínimo del dominio
// PARA: Demostrar creación, asignación y registro de sesiones con los servicios
// IMPACTO: Evidencia funcional para la entrega y sirve como ejemplo para pruebas

import { initializeData, createClient, createRoutine, listClients, assignRoutineToClient, recordSession, listRoutines } from './services/clientService';
import { sampleClients, sampleRoutines } from './data/seed';

console.log('💪 Gimnasio mi primer musculito 💪\n');

// Inicializamos datos de ejemplo
const createdRoutines = sampleRoutines.map(r => createRoutine(r));
const createdClients = sampleClients.map(c => createClient(c));

// Re-inicializar el servicio con los objetos creados (opcional, pero mantiene consistencia)
initializeData(createdClients, createdRoutines);

console.log('🔥 RUTINAS DISPONIBLES 🔥:');
console.table(listRoutines().map(r => ({ id: r.id, name: r.name, duration: r.durationMinutes, level: r.level })));

console.log('\n 🏃‍♂️ CLIENTES INICIALES 🏃‍♂️ :');
console.table(listClients().map(c => ({ id: c.id, name: c.name, age: c.age, goal: c.goal, status: c.goalStatus })));

// Asignar una rutina a María
const maria = listClients().find(c => c.name.includes('María'));
const primeraRutina = listRoutines()[0];
if (maria && primeraRutina) {
  assignRoutineToClient(maria.id, primeraRutina.id);
  console.log(`\nRutina "${primeraRutina.name}" asignada a ${maria.name}`);
}


// Registrar una sesión para Carlos (si existe)
const carlos = listClients().find(c => c.name.includes('Carlos'));
if (carlos && primeraRutina) {
  recordSession(carlos.id, { routineId: primeraRutina.id, notes: 'Buen progreso, aumentar peso la próxima semana', actualDurationMinutes: 42 });
  console.log(`\nSesión registrada para ${carlos.name}`);
}

// Mostrar clientes con sus rutinas y sesiones
console.log('\n 🏋️‍♂️‍ ESTADO FINAL DE CLIENTES 🏋️‍♂️‍ :');
const final = listClients().map(c => ({
  id: c.id,
  name: c.name,
  assignedRoutines: c.assignedRoutineIds,
  sessionsCount: c.sessions.length
}));
console.table(final);

console.log('\n !!!!!GRACIAS POR VISITARNOS¡¡¡¡¡¡‍  🔩 SI QUIERE REVISAR LAS RUTINAS DE NUEVO 🔩 :');
console.log('\n 🥊 ESCRIBA: pnpm start 🥊 :');