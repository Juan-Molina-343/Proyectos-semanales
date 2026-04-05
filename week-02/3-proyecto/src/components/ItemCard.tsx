import React from 'react';
import { Member } from '../types';

interface Props {
  member: Member;
  onEdit: (m: Member) => void;
  onDelete: (id: number) => void;
}

// Componente simple: tarjeta que muestra un miembro y acciones.
export const ItemCard: React.FC<Props> = ({ member, onEdit, onDelete }) => (
  <div style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
    <h3>{member.name} {member.active ? '' : '(inactivo)'}</h3>
    <p>Email: {member.email}</p>
    <p>Plan: {member.plan}</p>
    <p>Inicio: {new Date(member.startDate).toLocaleDateString()}</p>
    <button onClick={() => onEdit(member)}>Editar</button>
    <button onClick={() => onDelete(member.id)}>Eliminar</button>
  </div>
);

/*
Por qué: muestra la información de un miembro para que el usuario la vea de un vistazo.
Para qué: permitir editar o eliminar ese miembro desde la lista.
Consecuencia: si falta o está mal, el usuario no podrá gestionar miembros fácilmente; si está claro, mejora la usabilidad.
*/