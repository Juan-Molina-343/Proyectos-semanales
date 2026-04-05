import React, { useState, useEffect } from "react";
import { fetchStats } from "../utils/api";

// ============================================
// COMPONENTE: StatsCard
// QUÉ: Muestra métricas clave del gimnasio.
// PARA: Practicar múltiples useEffect independientes.
// IMPACTO: Demuestra manejo de efectos separados y estados.
// ============================================

export const StatsCard: React.FC = () => {
  const [totalMembers, setTotalMembers] = useState(0);
  const [dailyAttendance, setDailyAttendance] = useState(0);
  const [occupancyRate, setOccupancyRate] = useState(0);

  useEffect(() => { fetchStats().then((s) => setTotalMembers(s.total)); }, []);
  useEffect(() => { fetchStats().then((s) => setDailyAttendance(s.active)); }, []);
  useEffect(() => { fetchStats().then((s) => setOccupancyRate(s.percentage)); }, []);

  return (
    <div className="stats-card">
      <h2>📊 Estadísticas del Gimnasio</h2>
      <div className="stats-grid">
        <div className="stat">
          <div className="stat-value">{totalMembers}</div>
          <div className="stat-label">Total de Miembros</div>
        </div>
        <div className="stat">
          <div className="stat-value">{dailyAttendance}</div>
          <div className="stat-label">Asistencias Hoy</div>
        </div>
        <div className="stat">
          <div className="stat-value">{occupancyRate}%</div>
          <div className="stat-label">Ocupación</div>
        </div>
      </div>
    </div>
  );
};