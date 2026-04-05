# 🔹  Proyecto Semana 1

## 🎯 Objetivo
Este proyecto modela un dominio de **Entrenador personal** con clientes, rutinas, ejercicios y registros de sesiones.

## 🧭 Dominio y decisiones
**Dominio:** Entrenador personal  
**Entidades principales:** `Client`, `Routine`, `Exercise`, `SessionRecord`  
**Decisiones de diseño**
- IDs simples con prefijos: `c-`, `r-`, `e-` ✅  
- Servicios en memoria para demo y pruebas rápidas ✅  
- Tipos literales: `GoalStatus = 'planned'|'in_progress'|'completed'` ✅  
- `DifficultyLevel = 'beginner'|'intermediate'|'advanced'` ✅

## 📋 Instrucciones
1. Lee este README completo. 📖  
2. Adapta el proyecto si quieres cambiar el dominio. 🛠️  
3. Trabaja en `starter/src` siguiendo los comentarios QUÉ / PARA / IMPACTO. 🧩  
4. Implementa o ajusta entidades y funciones tipadas. 🧑‍💻  
5. Ejecuta y prueba con los comandos de la sección Ejecución. ▶️



## ▶️ Ejecución
```bash
# desde la raíz del proyecto
pnpm install
pnpm run check   # comprueba tipos (tsc --noEmit)
pnpm start       # ejecuta demo (tsx starter/src/index.ts)
