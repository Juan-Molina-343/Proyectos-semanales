# 🎯 Proyecto Week 03: Dashboard con Datos en Tiempo Real

## 🚀 Cómo Ejecutar el Proyecto

1. **Navega al directorio starter**:
   ```bash
   cd week-03-useeffect_efectos_secundarios/3-proyecto/starter
   ```

2. **Instala dependencias** (si no están instaladas):
   ```bash
   pnpm init
   pnpm add react react-dom @types/react @types/react-dom
   pnpm add -D @vitejs/plugin-react vite typescript
   ```

3. **Ejecuta el servidor de desarrollo**:
   ```bash
   pnpm dev
   ```

4. **Abre el navegador**:
   Ve a `http://localhost:5173` para ver el dashboard funcionando.

**Nota**: El proyecto incluye datos mock, así que funciona sin backend real. Los componentes demuestran fetching inicial, polling en tiempo real y manejo de efectos secundarios.

## 📖 ¿Cómo Funciona el Proyecto?

Este proyecto es un **dashboard interactivo** que simula un sistema de gestión para un gimnasio (o cualquier dominio asignado). Utiliza React con `useEffect` para manejar operaciones asíncronas y efectos secundarios de manera eficiente.

### Arquitectura General
- **Frontend**: React + TypeScript + Vite
- **Datos**: Mock API (sin backend real)
- **Estilos**: CSS básico para layout responsivo
- **Estado**: useState para estado local, useEffect para efectos

### Componentes y su Funcionamiento

#### 1. **Dashboard** (Componente Principal)
**¿Para qué sirve?**: Es el contenedor raíz que organiza y renderiza todos los demás componentes del dashboard.

**Cómo funciona**:
- Importa y renderiza `StatsCard`, `ItemList` y `RealTimeIndicator`
- No maneja estado propio, delega a los componentes hijos
- Proporciona el layout general de la aplicación

#### 2. **StatsCard** (Estadísticas)
**¿Para qué sirve?**: Muestra métricas clave del gimnasio en tarjetas visuales (total miembros, asistencias, ocupación).

**Cómo funciona**:
- Usa **tres `useEffect` independientes** para llamar a `fetchStats()` y actualizar cada estadística
- Cada efecto se ejecuta solo al montar el componente (array de dependencias vacío `[]`)
- **Problema de diseño**: Hace 3 llamadas API separadas cuando podría ser 1
- **Mejora sugerida**: Combinar en un solo `useEffect` que actualice todos los estados

#### 3. **ItemList** (Lista de Elementos)
**¿Para qué sirve?**: Muestra la lista completa de miembros del gimnasio con estados de carga y error.

**Cómo funciona**:
- **useEffect con AbortController**: Cancela peticiones si el componente se desmonta antes de completar
- **Estados asíncronos**: `loading`, `error`, `data` para manejar diferentes estados
- **Cleanup automático**: `return () => controller.abort()` previene memory leaks
- Renderiza condicionalmente: loading → mensaje, error → error, success → lista

#### 4. **RealTimeIndicator** (Datos en Tiempo Real)
**¿Para qué sirve?**: Muestra la ocupación actual del gimnasio con actualizaciones automáticas cada 5 segundos.

**Cómo funciona**:
- **Polling con setInterval**: Actualiza datos periódicamente sin intervención del usuario
- **useEffect con cleanup**: `clearInterval(id)` al desmontar para evitar timers huérfanos
- **Estados**: `data`, `loading`, `isUpdating` para feedback visual
- **Intervalo configurable**: `POLLING_INTERVAL = 5000` ms

### Funciones de API (utils/api.ts)
**¿Para qué sirven?**: Simulan llamadas a un backend real con delays y datos mock.

- `fetchItems()`: Retorna lista de miembros con delay de 1 segundo
- `fetchStats()`: Retorna estadísticas con delay de 800ms
- `fetchRealTimeData()`: Genera datos aleatorios de ocupación con delay de 500ms

### Tipos (types/index.ts)
**¿Para qué sirven?**: Definen la estructura de datos para tipado fuerte en TypeScript.

- `Item`: Miembro del gimnasio (id, name, description, etc.)
- `Stats`: Métricas (total, active, percentage)
- `RealTimeData`: Datos en tiempo real (value, label, unit, lastUpdated)

## 🎯 Conceptos de useEffect Aprendidos

1. **Fetch Inicial**: Cargar datos al montar componente
2. **Cleanup**: Limpiar timers, abortar peticiones, remover listeners
3. **Dependencias**: Controlar cuándo se ejecuta el efecto
4. **Múltiples Efectos**: Separar concerns en efectos independientes
5. **Estados Asíncronos**: Loading, error, data patterns
6. **Polling**: Actualización automática con intervalos

## ⏱️ Duración Estimada

**2-2.5 horas** de trabajo enfocado

