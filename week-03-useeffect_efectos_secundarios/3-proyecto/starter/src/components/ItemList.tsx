import React, { useState, useEffect } from "react";
import type { Item } from "../types";
import { fetchItems } from "../utils/api";

// ============================================
// COMPONENTE: ItemList
// QUÉ: Muestra lista de miembros.
// PARA: Practicar fetch inicial con useEffect y AbortController.
// IMPACTO: Demuestra manejo de estados loading/error/data.
// ============================================

export const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchItems(controller.signal);
        setItems(data);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err instanceof Error ? err.message : "Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };

    loadItems();
    return () => controller.abort(); // cleanup
  }, []);

  if (loading) return <h2>Cargando miembros...</h2>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="item-list">
      <h2>Lista de Miembros</h2>
      <p>Total: {items.length} miembros</p>
      <ul>
        {items.map((m) => (
          <li key={m.id}>
            <strong>{m.name}</strong> — {m.description}
          </li>
        ))}
      </ul>
    </div>
  );
};