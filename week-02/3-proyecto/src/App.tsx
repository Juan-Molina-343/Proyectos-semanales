import React, { useState } from 'react';
import { Header } from './components/Header';
import { ItemForm } from './components/ItemForm';
import { ItemList } from './components/ItemList';
import { Member } from './types';
import { initialMembers } from './data/seed';

export const App: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [editing, setEditing] = useState<Member | null>(null);
  const [nextId, setNextId] = useState<number>(() => Math.max(...initialMembers.map(m => m.id), 0) + 1);

  const addOrUpdate = (data: Omit<Member, 'id'>, id?: number) => {
    if (id != null) {
      setMembers(prev => prev.map(m => (m.id === id ? { ...m, ...data } : m)));
      setEditing(null);
      return;
    }
    const newMember: Member = { id: nextId, ...data };
    setMembers(prev => [...prev, newMember]);
    setNextId(prev => prev + 1);
  };

  const handleEdit = (m: Member) => setEditing(m);
  const handleDelete = (id: number) => setMembers(prev => prev.filter(m => m.id !== id));
  const handleCancel = () => setEditing(null);

  return (
    <div style={{ padding: 16 }}>
      <Header />
      <ItemForm onSave={addOrUpdate} editing={editing} onCancel={handleCancel} />
      <ItemList items={members} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};


/*
Por qué: coordina el estado y conecta los componentes (Header, ItemForm, ItemList).
Para qué: permitir crear, editar, eliminar y listar miembros desde una sola vista.
Consecuencia: si falla, la app no podrá gestionar miembros; si funciona, el CRUD queda operativo.
*/