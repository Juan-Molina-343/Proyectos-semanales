// ============================================
// COMPONENTE: LoadingSpinner - Dominio Gimnasio
// ============================================
// Indicador de carga

import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <span className="icon">⏳</span>
      <p>Cargando clases...</p>
    </div>
  );
};
