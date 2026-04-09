// ============================================
// COMPONENTE: Catalog (Principal) - Gimnasio
// ============================================

import React, { useState, useMemo } from 'react';
import { GymClass, Category, SortOption } from '../types';
import { items as initialItems } from '../data/items';
import { useDebounce } from '../hooks/useDebounce';
import { SearchBar } from './SearchBar';
import { FilterPanel } from './FilterPanel';
import { SortSelector } from './SortSelector';
import { ItemList } from './ItemList';

export const Catalog: React.FC = () => {
  const [items, setItems] = useState<GymClass[]>(initialItems);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>('nombre-asc');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const processedItems = useMemo(() => {
    let result = [...items];

    if (debouncedSearchTerm) {
      const term = debouncedSearchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.nombre.toLowerCase().includes(term) ||
          item.instructor.toLowerCase().includes(term)
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((item) => item.categoria === selectedCategory);
    }

    if (showOnlyAvailable) {
      result = result.filter((item) => item.isAvailable);
    }

    switch (sortBy) {
      case 'nombre-asc':
        result.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'nombre-desc':
        result.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      case 'instructor-asc':
        result.sort((a, b) => a.instructor.localeCompare(b.instructor));
        break;
      case 'instructor-desc':
        result.sort((a, b) => b.instructor.localeCompare(a.instructor));
        break;
      case 'cupos-asc':
        result.sort((a, b) => a.cupos - b.cupos);
        break;
      case 'cupos-desc':
        result.sort((a, b) => b.cupos - a.cupos);
        break;
    }

    return result;
  }, [items, debouncedSearchTerm, selectedCategory, showOnlyAvailable, sortBy]);

  const handleDelete = (id: number): void => {
    if (window.confirm('¿Estás seguro de eliminar esta clase?')) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleView = (id: number): void => {
    const item = items.find((i) => i.id === id);
    if (item) {
      alert(`Detalles de la clase: ${item.nombre}\nInstructor: ${item.instructor}\nHorario: ${item.horario}`);
    }
  };

  const clearFilters = (): void => {
    setSearchTerm('');
    setSelectedCategory('all');
    setShowOnlyAvailable(false);
    setSortBy('nombre-asc');
  };

  return (
    <div className="catalog">
      <header className="catalog-header">
        <h1>🏋️ Catálogo de Clases de Gimnasio</h1>
      </header>

      <div className="search-bar">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar por nombre o instructor..."
        />
      </div>

      <div className="controls">
        <FilterPanel
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          showOnlyAvailable={showOnlyAvailable}
          onAvailableChange={setShowOnlyAvailable}
          onClearFilters={clearFilters}
        />
        <SortSelector value={sortBy} onChange={setSortBy} />
      </div>

      <p className="results-info">
        Mostrando {processedItems.length} de {items.length} clases
        {debouncedSearchTerm && ` para "${debouncedSearchTerm}"`}
      </p>

      <ItemList
        items={processedItems}
        isLoading={isLoading}
        error={error}
        onDelete={handleDelete}
        onView={handleView}
        onClearFilters={clearFilters}
      />
    </div>
  );
};

export default Catalog;
