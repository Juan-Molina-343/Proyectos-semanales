# Semana 4 - Renderizado condicional y listas

Este proyecto es una aplicación React + TypeScript creada con Vite. Simula un catálogo de clases de gimnasio donde se pueden buscar, filtrar, ordenar y ver detalles de las clases.

## Qué hace

- Muestra una lista de clases de gimnasio usando datos mock.
- Permite buscar por nombre de clase o instructor.
- Filtra por categoría y disponibilidad.
- Ordena por nombre, instructor o cupos.
- Muestra un estado vacío cuando no hay resultados.
- Permite eliminar una clase y ver los detalles de una clase mediante alert.

## Estructura del proyecto

```
starter/
  ├─ index.html
  ├─ package.json
  ├─ pnpm-lock.yaml
  ├─ tsconfig.json
  ├─ src/
  │   ├─ App.tsx
  │   ├─ App.css
  │   ├─ main.tsx
  │   ├─ vite-env.d.ts
  │   ├─ components/
  │   │   ├─ Catalog.tsx
  │   │   ├─ ItemList.tsx
  │   │   ├─ ItemCard.tsx
  │   │   ├─ FilterPanel.tsx
  │   │   ├─ SearchBar.tsx
  │   │   ├─ SortSelector.tsx
  │   │   ├─ EmptyState.tsx
  │   │   └─ LoadingSpinner.tsx
  │   ├─ data/
  │   │   └─ items.ts
  │   ├─ hooks/
  │   │   └─ useDebounce.ts
  │   └─ types/
  │       └─ index.ts
  └─ node_modules/
```

## Archivos principales y su propósito

### `index.html`
Punto de entrada de Vite. Contiene el elemento `<div id="root"></div>` donde React monta la aplicación y el script que carga `src/main.tsx`.

### `package.json`
Define dependencias, scripts y la configuración del proyecto.
- `dev`: inicia el servidor de desarrollo de Vite.
- `build`: compila TypeScript y genera el build de producción.
- `preview`: vista previa del build de Vite.

### `tsconfig.json`
Configura TypeScript para funcionar con React y Vite.

### `vite-env.d.ts`
Archivo necesario para que TypeScript reconozca los tipos de Vite, incluyendo importaciones de CSS y otros recursos.

### `src/main.tsx`
Archivo de arranque que monta el componente raíz `App` en el DOM.

### `src/App.tsx`
Componente principal que renderiza el catálogo completo a través de `Catalog`.

### `src/App.css`
Estilos generales de la aplicación, diseño del catálogo, tarjetas, botones y los controles de filtro.

## Componentes principales

### `src/components/Catalog.tsx`
Componente principal del catálogo.
- Usa `useState` para manejar los datos, filtros y estado de carga/error.
- Aplica `useDebounce` para retrasar la búsqueda mientras el usuario escribe.
- Usa `useMemo` para aplicar búsqueda, filtros y ordenamiento de manera eficiente.
- Renderiza `SearchBar`, `FilterPanel`, `SortSelector` e `ItemList`.

### `src/components/SearchBar.tsx`
Barra de búsqueda controlada.
- Actualiza `searchTerm` en el componente padre.
- Permite limpiar el texto con un botón.

### `src/components/FilterPanel.tsx`
Panel de filtros.
- Selecciona categoría.
- Activa/desactiva "Solo disponibles".
- Botón para limpiar filtros.

### `src/components/SortSelector.tsx`
Selector de ordenamiento.
- Ordena por nombre, instructor o cupos.

### `src/components/ItemList.tsx`
Muestra la lista de clases.
- Atiende estados de carga, error y vacío.
- Renderiza `ItemCard` para cada clase.

### `src/components/ItemCard.tsx`
Tarjeta de clase.
- Muestra información de cada clase.
- Botones para ver detalles y eliminar.

### `src/components/EmptyState.tsx`
Estado que se muestra cuando no hay clases tras aplicar filtros o búsqueda.

### `src/components/LoadingSpinner.tsx`
Indicador de carga opcional.

## Datos y tipos

### `src/data/items.ts`
Mock de clases de gimnasio con:
- `id`, `nombre`, `instructor`, `horario`, `nivel`, `cupos`, `categoria`, `isAvailable`
- Lista de categorías y opciones de ordenamiento.

### `src/types/index.ts`
Define las interfaces y tipos de TypeScript usados en la app.
- `GymClass`
- `Category`
- `SortOption`
- `FilterState`

### `src/hooks/useDebounce.ts`
Hook personalizado para aplicar debounce al valor de búsqueda.
- Evita que la búsqueda se ejecute en cada tecla.
- Espera `delay` milisegundos antes de actualizar el valor.

## Cómo ejecutar el proyecto

1. Abre la terminal en `week-04-renderizado_condicional_listas/3-proyecto/starter`
2. Instala dependencias:

```bash
pnpm install
```

3. Inicia el servidor de desarrollo:

```bash
pnpm run dev
```

4. Abre en el navegador:

```text
http://localhost:5173/
```

> Si ves un `404`, asegúrate de que exista `index.html` en la raíz del proyecto y que el servidor de Vite esté corriendo en la carpeta correcta.

## Notas finales

- Este proyecto es ideal para aprender renderizado condicional, manejo de listas, hooks de React y filtros de búsqueda.
- El mock de datos está en `src/data/items.ts`, así que puedes agregar o cambiar clases fácilmente.
- La lógica de filtros y ordenamiento está centralizada en `Catalog.tsx`, lo que facilita extenderla.
