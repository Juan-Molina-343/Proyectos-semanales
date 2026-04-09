// ============================================
// COMPONENTE: SearchBar - Dominio Gimnasio
// ============================================

import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/**
 * Barra de búsqueda en tiempo real
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Buscar clases...',
}) => {
  return (
    <div className="search-bar">
      {/* Input controlado */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />

      {/* Botón para limpiar búsqueda */}
      {value && (
        <button
          onClick={() => onChange('')}
          className="clear-button"
          aria-label="Limpiar búsqueda"
        >
          ✕
        </button>
      )}
    </div>
  );
};
