import React from 'react';

// Encabezado simple: título y subtítulo.
export const Header: React.FC = () => (
  <header style={{ marginBottom: 16 }}>
    <h1>Gimnasio — Gestión de Miembros</h1>
    <p>CRUD básico: agregar, editar, eliminar y listar miembros.</p>
  </header>
);

/*
Por qué: muestra el título para que el usuario sepa qué página está viendo.
Para qué: da contexto inmediato sobre la funcionalidad (CRUD) y facilita la orientación.
Consecuencia: si falta o es confuso, el usuario puede no entender la app; si está claro, mejora la usabilidad.
*/