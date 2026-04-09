# Proyecto Semana 05 - Starter

Este es el proyecto starter para la semana 05: **Composición de Componentes y Context API**.
La aplicación es un dashboard de gimnasio con un panel de configuración que permite cambiar tema, tamaño de texto, densidad y notificaciones.

## 🚀 Instalación

1. Abrir terminal en el directorio del proyecto:

```bash
cd "c:\Users\zerit\OneDrive\Documentos\proyectos git\week-05-composicion_context_api\3-proyecto\starter"
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Ejecutar en modo desarrollo:

```bash
pnpm dev
```

4. Abrir el navegador en la dirección que muestra Vite, por ejemplo:

```bash
http://localhost:5174/
```

## 🧪 Scripts disponibles

- `pnpm dev`: inicia el servidor de desarrollo con Vite.
- `pnpm build`: crea la versión de producción del proyecto.
- `pnpm preview`: sirve la build de producción localmente.

## 📁 Estructura de archivos

- `index.html` - Entrada HTML que carga el bundle generado por Vite.
- `package.json` - Configuración del proyecto, dependencias y scripts.
- `pnpm-lock.yaml` - Bloqueo de versiones de dependencias.
- `tsconfig.json` - Configuración principal de TypeScript.
- `tsconfig.node.json` - Configuración de TypeScript para el archivo `vite.config.ts`.
- `vite.config.ts` - Configuración de Vite y plugin de React.
- `src/` - Código fuente de la aplicación.

### Contenido de `src/`

- `main.tsx` - Punto de entrada de React que renderiza `<App />`.
- `App.tsx` - Componente principal que monta el `ConfigProvider`, el layout y el contenido principal.
- `vite-env.d.ts` - Tipos globales de Vite para el entorno de desarrollo.
- `styles/App.css` - Estilos globales y variables CSS para tema, tamaño y densidad.
- `contexts/ConfigContext.tsx` - Provider y hook `useConfig` para compartir la configuración global.
- `hooks/useLocalStorage.ts` - Hook personalizado para persistir datos en `localStorage`.
- `components/` - Componentes reutilizables y compound components:
  - `Layout/Layout.tsx` - Layout principal con barra lateral y contenido.
  - `SettingsPanel/SettingsPanel.tsx` - Panel de configuración con controles de tema, texto, densidad y notificaciones.
  - `Card/Card.tsx` - Compound component `Card` con `Header`, `Body`, `Footer` y `Actions`.
  - `Modal/Modal.tsx` - Compound component `Modal` con `Trigger`, `Content` y `Close`.
  - `Tabs/Tabs.tsx` - Compound component `Tabs` con `List`, `Tab` y `Panel`.

## 🎯 Para qué sirve cada parte

- `ConfigContext.tsx`: guarda y comparte el estado de la configuración de la UI.
- `useLocalStorage.ts`: mantiene vigente la configuración después de recargar la página.
- `SettingsPanel.tsx`: permite cambiar tema, tamaño y densidad en tiempo real.
- `Card/Card.tsx`: muestra tarjetas con contenido estructurado.
- `Modal/Modal.tsx` y `Tabs/Tabs.tsx`: añaden interacción avanzada con componentes compuestos.
- `App.tsx`: muestra el contenido del dominio gimnasio y conecta los componentes.

## 🧩 Tecnologías usadas

- **React** - Biblioteca de UI.
- **TypeScript** - Tipado estático y desarrollo seguro.
- **Vite** - Herramienta de bundling y servidor de desarrollo rápido.
- **pnpm** - Gestor de paquetes ligero y rápido.

## 💡 Notas

- El proyecto está diseñado para practicar patrones de composición y Context API.
- La configuración de tema, tamaño y densidad se aplica con variables CSS y data atributos.
- El proyecto es totalmente local y no requiere backend.
