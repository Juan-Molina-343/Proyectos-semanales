// ============================================
// COMPONENTE: ItemList - Dominio Gimnasio
// ============================================

import React from 'react';
import { GymClass } from '../types';
import { ItemCard } from './ItemCard';
import { EmptyState } from './EmptyState';

interface ItemListProps {
  items: GymClass[];
  isLoading?: boolean;
  error?: string | null;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
  onClearFilters?: () => void;
}

export const ItemList: React.FC<ItemListProps> = ({
  items,
  isLoading = false,
  error = null,
  onDelete,
  onView,
  onClearFilters,
}) => {
  if (isLoading) {
    return <div className="loading">⏳ Cargando clases...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>❌ Error: {error}</p>
      </div>
    );
  }

  if (items.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onView={onView}
        />
      ))}
    </div>
  );
};
