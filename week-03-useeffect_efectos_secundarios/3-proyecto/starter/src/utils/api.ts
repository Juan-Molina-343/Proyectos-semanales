// ============================================
// FUNCIONES DE API Y DATOS MOCK - DOMINIO: GIMNASIO
// ============================================
// QUÉ: Simulan llamadas a API.
// PARA: Probar el dashboard sin backend real.
// IMPACTO: Permite evaluar funcionalidad completa con datos mock.

import type { Item, Stats, RealTimeData } from "../types";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_ITEMS: Item[] = [
  { id: 1, name: "Carlos Pérez", description: "Plan Mensual", membershipType: "Mensual", joinDate: "2024-01-10", active: true },
  { id: 2, name: "Ana Gómez", description: "Plan Anual", membershipType: "Anual", joinDate: "2024-02-15", active: true },
  { id: 3, name: "Luis Torres", description: "Plan Trimestral", membershipType: "Trimestral", joinDate: "2024-03-01", active: false },
];

export const fetchItems = async (signal?: AbortSignal): Promise<Item[]> => {
  await delay(1000);
  if (signal?.aborted) throw new Error("Request aborted");
  return MOCK_ITEMS;
};

export const fetchStats = async (): Promise<Stats> => {
  await delay(800);
  return { total: 120, active: 35, percentage: 70 };
};

export const fetchRealTimeData = async (): Promise<RealTimeData> => {
  await delay(500);
  const randomValue = Math.floor(Math.random() * 100);
  return {
    value: randomValue,
    label: "Personas en el gimnasio ahora",
    unit: "personas",
    lastUpdated: new Date().toISOString(),
  };
};