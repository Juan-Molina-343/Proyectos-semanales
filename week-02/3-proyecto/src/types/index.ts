export type Plan = 'basico' | 'premium' | 'vip';

export interface Member {
  id: number;
  name: string;
  email: string;
  plan: Plan;
  startDate: string; 
  active: boolean;
}

/*
Por qué: define los tipos que usa toda la app para evitar errores.
Para qué: asegurar que los datos de miembros sean consistentes y tipados.
Consecuencia: sin esto, el código sería más propenso a errores y menos claro.
*/