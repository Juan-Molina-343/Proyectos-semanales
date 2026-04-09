// ============================================
// COMPONENTE: EmptyState - Dominio Gimnasio
// ============================================

import React from 'react';

interface EmptyStateProps {
  message?: string;
  onClearFilters?: () => void;
}

/**
 * Estado vacío del catálogo de clases
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  message = 'No se encontraron clases disponibles',
  onClearFilters,
}) => {
  return (
    <div className="empty-state">
      <span className="icon">📭</span>
      <h3>Sin resultados</h3>
      <p>{message}</p>

      {/* Botón condicional para limpiar filtros */}
      {onClearFilters && (
        <button onClick={onClearFilters} className="btn-clear">
          🔄 Limpiar filtros
        </button>
      )}
    </div>
  );
};
