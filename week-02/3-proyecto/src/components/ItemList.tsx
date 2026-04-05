import React from 'react';
import { Member } from '../types';
import { ItemCard } from './ItemCard';

interface Props {
  items: Member[];
  onEdit: (m: Member) => void;
  onDelete: (id: number) => void;
}

// Lista de miembros: muestra ItemCard por cada miembro
export const ItemList: React.FC<Props> = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) return <p>No hay miembros aún.</p>;
  return (
    <div>
      {items.map(m => (
        <ItemCard key={m.id} member={m} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

/*
Por qué: muestra todos los miembros disponibles para que el usuario los vea.
Para qué: permitir ver la lista y acceder a acciones (editar/eliminar) desde cada tarjeta.
Consecuencia: si no existe, el usuario no podrá ver ni gestionar los miembros; si está bien, facilita la administración del CRUD.
*/