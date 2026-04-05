import { Member } from '../types';

export const initialMembers: Member[] = [
  { id: 1, name: 'Rayan musculos', email: 'Rayan@GYM.com', plan: 'basico', startDate: new Date().toISOString(), active: true },
  { id: 2, name: 'Enma Star', email: 'Femboy214@GYM.com', plan: 'premium', startDate: new Date().toISOString(), active: true },
  { id: 3, name: 'Patricio Estrella', email: 'Patricio@Estrella.com', plan: 'vip', startDate: new Date().toISOString(), active: false },
];

/*
Por qué: datos de ejemplo para que la app tenga contenido al iniciar.
Para qué: probar la lista, edición y eliminación sin crear miembros manualmente.
Consecuencia: si no hay datos iniciales, la UI puede verse vacía; con estos ejemplos se facilita el desarrollo y la evaluación.
*/