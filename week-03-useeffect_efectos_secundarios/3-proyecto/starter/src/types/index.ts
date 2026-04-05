// ============================================
// TIPOS Y INTERFACES DEL PROYECTO - DOMINIO: GIMNASIO
// ============================================
// Estos tipos definen la estructura de los datos que usaremos.
// QUÉ: Representan miembros, estadísticas y datos en tiempo real.
// PARA: Garantizar tipado fuerte en TypeScript.
// IMPACTO: Evita errores y facilita el mantenimiento.

// Miembro del gimnasio
export interface Item {
  id: number;              // Identificador único
  name: string;            // Nombre del miembro
  description: string;     // Plan o detalle del miembro (ej: "Mensual", "Anual")
  membershipType?: string; // Tipo de membresía
  joinDate?: string;       // Fecha de inscripción
  active?: boolean;        // Estado activo/inactivo
}

// Estadísticas del gimnasio
export interface Stats {
  total: number;       // Total de miembros
  active: number;      // Asistencias hoy
  percentage: number;  // Porcentaje de ocupación
}

// Datos en tiempo real
export interface RealTimeData {
  value: number;       // Valor principal (ej: ocupación actual)
  label: string;       // Etiqueta descriptiva
  unit: string;        // Unidad de medida (ej: "personas")
  lastUpdated: string; // Timestamp de última actualización
}

// Estado genérico para peticiones asíncronas
export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Filtros de búsqueda (opcional)
export interface SearchFilters {
  query: string;
  membershipType?: string;
  active?: boolean;
}