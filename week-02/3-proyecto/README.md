# Proyecto Semana 02 — Sistema CRUD Básico

## Resumen
Proyecto de la semana 02: sistema CRUD básico implementado con **React + TypeScript + Vite**. Interfaz con lista de items (nombre, email, plan, fecha) y acciones para crear, editar y eliminar.



## Estado actual
- Vite: **8.0.1**
- @vitejs/plugin-react: **6.0.1**
- Node recomendado: **18** (ver `.nvmrc`)
- TypeScript: **5.9.3**
- Resultado local: `pnpm dev` arranca en `http://localhost:5173`



## Requisitos de entorno
1. Instalar Node (recomendado con nvm): `nvm install 18 && nvm use 18`
2. Instalar pnpm si no está: `npm i -g pnpm`



## ejecucion rapida

## Ejecutar rápido (para evaluador)

 cd bootcamp/week-02/3-proyecto
  pnpm install --frozen-lockfile
   pnpm run check
    pnpm dev

//-----------------------------------------------------------------------------------
1. Abrir terminal en `bootcamp/week-02/3-proyecto`
2. Ejecutar:
   - `pnpm install --frozen-lockfile`
   - `pnpm run check`
   - `pnpm dev`
3. Abrir la URL que muestre Vite 
//-----------------------------------------------------------------------------------




## Instalación larga -- por si sale mal.

# para windows

# 1) Clona el repositorio y entra en la carpeta del proyecto
git clone <https://github.com/Juan-Molina-343/Proyecto-semana-2.git>            
cd bootcamp/week-02/3-proyecto

# 2) Fija la versión de Node recomendada en .nvmrc
Set-Content -Path .nvmrc -Value "18" -Force

# 3) Instala y usa Node 18 con nvm-windows (si tienes nvm)
nvm install 18.18.0             # instala Node 18 (versión ejemplo)
nvm use 18.18.0                 # activa Node 18 en esta sesión

# 4) Asegura pnpm (solo si no está instalado)
npm install -g pnpm             # instala pnpm globalmente

# 5) Instala dependencias exactamente según el lockfile
pnpm install --frozen-lockfile  # usa el pnpm-lock.yaml para reproducibilidad

# 6) Verifica TypeScript y arranca el servidor de desarrollo
pnpm run check                  # tsc --noEmit, debe salir sin errores
pnpm dev                        # arranca Vite; abre la URL que muestre 


//-----------------------------------------------------------------------------------

# Para linux

# 1) Clona el repositorio y entra en la carpeta del proyecto
git clone <https://github.com/Juan-Molina-343/Proyecto-semana-2.git>            
cd bootcamp/week-02/3-proyecto

# 2) Fija la versión de Node recomendada en .nvmrc
echo "18" > .nvmrc

# 3) Instala y usa Node 18 con nvm (si tienes nvm)
nvm install 18                  # instala Node 18
nvm use 18                      # activa Node 18 en esta sesión

# 4) Asegura pnpm (solo si no está instalado)
npm install -g pnpm             # instala pnpm globalmente

# 5) Instala dependencias exactamente según el lockfile
pnpm install --frozen-lockfile      # usa el pnpm-lock.yaml para reproducibilidad

# 6) Verifica TypeScript y arranca el servidor de desarrollo
pnpm run check                  # tsc --noEmit, debe salir sin errores
pnpm dev                        # arranca Vite; abre la URL que muestre 



