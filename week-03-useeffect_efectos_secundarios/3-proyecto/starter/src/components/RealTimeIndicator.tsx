import React, { useState, useEffect } from "react";
import type { RealTimeData } from "../types";
import { fetchRealTimeData } from "../utils/api";

// ============================================
// COMPONENTE: RealTimeIndicator
// QUÉ: Muestra ocupación actual con polling.
// PARA: Practicar setInterval y cleanup.
// IMPACTO: Demuestra actualización periódica y prevención de memory leaks.
// ============================================

const POLLING_INTERVAL = 5000;

export const RealTimeIndicator: React.FC = () => {
  const [data, setData] = useState<RealTimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsUpdating(true);
      const newData = await fetchRealTimeData();
      setData(newData);
      setLoading(false);
      setIsUpdating(false);
    };

    loadData();
    const id = setInterval(loadData, POLLING_INTERVAL);
    return () => clearInterval(id);
  }, []);

  if (loading) return <h2>Cargando ocupación actual...</h2>;
  if (!data) return null;

  const formatTimestamp = (iso: string) =>
    new Date(iso).toLocaleTimeString();

  return (
    <div className="realtime-indicator">
      <div className="realtime-header">
        <h2>🏋️ Ocupación Actual</h2>
        {isUpdating && <span className="updating-badge">Actualizando...</span>}
      </div>
      <div className="realtime-content">
        <div className="realtime-value">{data.value} {data.unit}</div>
        <div className="realtime-label">{data.label}</div>
        <div className="realtime-timestamp">
          Última actualización: {formatTimestamp(data.lastUpdated)}
        </div>
        <div className="next-update">
          Próxima actualización en {POLLING_INTERVAL / 1000} segundos
        </div>
      </div>
    </div>
  );
};