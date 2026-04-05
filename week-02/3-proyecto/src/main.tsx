import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/App.css';

createRoot(document.getElementById('root')!).render(<App />);
/*
Por qué: punto de entrada que monta la app en el DOM.
Para qué: iniciar la aplicación y aplicar estilos globales.
Consecuencia: sin esto la app no se renderiza en el navegador; con esto arranca correctamente.
*/