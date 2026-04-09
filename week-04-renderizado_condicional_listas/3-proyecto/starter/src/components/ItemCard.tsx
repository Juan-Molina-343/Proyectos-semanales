// ============================================
// COMPONENTE: ItemCard - Dominio Gimnasio
// ============================================

import React from 'react';
import { GymClass } from '../types';

interface ItemCardProps {
  item: GymClass;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete, onView }) => {
  return (
    <div className="item-card">
      <h3>{item.nombre}</h3>
      <p><strong>Instructor:</strong> {item.instructor}</p>
      <p><strong>Horario:</strong> {item.horario}</p>
      <p><strong>Nivel:</strong> {item.nivel}</p>
      <p><strong>Cupos:</strong> {item.cupos}</p>

      {item.isAvailable ? (
        <span className="status available">✅ Disponible</span>
      ) : (
        <span className="status unavailable">❌ Agotado</span>
      )}

      <div className="actions">
        {onView && (
          <button onClick={() => onView(item.id)}>Ver detalles</button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(item.id)}>Eliminar</button>
        )}
      </div>
    </div>
  );
};
