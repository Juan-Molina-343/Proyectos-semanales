import React, { useState, useEffect } from 'react';
import { Member, Plan } from '../types';

interface Props {
  onSave: (m: Omit<Member, 'id'>, id?: number) => void;
  editing?: Member | null;
  onCancel: () => void;
}

const initial = { name: '', email: '', plan: 'basico' as Plan, startDate: new Date().toISOString(), active: true };

// Formulario para crear/editar un miembro
export const ItemForm: React.FC<Props> = ({ onSave, editing, onCancel }) => {
  const [form, setForm] = useState<Omit<Member, 'id'>>(initial);

  // Si hay un miembro en edición, cargar sus datos en el formulario
  useEffect(() => {
    if (editing) {
      const { id, ...rest } = editing;
      setForm(rest);
    } else {
      setForm(initial);
    }
  }, [editing]);

  // Maneja cambios en inputs y select
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

   // Enviar formulario: validar y llamar a onSave
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      alert('Nombre y email son obligatorios');
      return;
    }
    onSave(form, editing?.id);
    setForm(initial);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <select name="plan" value={form.plan} onChange={handleChange}>
        <option value="basico">Básico</option>
        <option value="premium">Premium</option>
        <option value="vip">VIP</option>
      </select>
      <label>
        <input type="checkbox" name="active" checked={form.active} onChange={handleChange} />
        Activo
      </label>
      <button type="submit">{editing ? 'Actualizar' : 'Agregar'}</button>
      {editing && <button type="button" onClick={onCancel}>Cancelar</button>}
    </form>
  );
};

/*
Por qué: muestra un formulario para ingresar o editar los datos de un miembro.
Para qué: permitir crear o actualizar miembros y enviar los datos al estado padre.
Consecuencia: si no existe este formulario, no se pueden añadir ni modificar miembros; si funciona bien, facilita la gestión del CRUD.
*/