// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/SettingsPanel/SettingsPanel.tsx
// ============================================

import { useConfig } from '../../contexts/ConfigContext';
import { Card } from '../Card/Card';

// ============================================
// THEME SELECTOR
// ============================================

const ThemeSelector = () => {
  const { theme, setTheme } = useConfig();

  return (
    <Card variant="outlined">
      <Card.Header>
        <Card.Title>🎨 Tema</Card.Title>
      </Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['light', 'dark', 'system'].map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t as typeof theme)}
              style={{
                padding: '6px 12px',
                backgroundColor: theme === t ? '#2196f3' : '#eee',
                color: theme === t ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              {t}
            </button>
          ))}
        </div>
        <p style={{ marginTop: '8px' }}>Tema actual: {theme}</p>
      </Card.Body>
    </Card>
  );
};

// ============================================
// FONT SIZE SELECTOR
// ============================================

const FontSizeSelector = () => {
  const { fontSize, setFontSize } = useConfig();

  return (
    <Card variant="outlined">
      <Card.Header>
        <Card.Title>🔤 Tamaño de Texto</Card.Title>
      </Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['small', 'medium', 'large'].map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size as typeof fontSize)}
              style={{
                padding: '6px 12px',
                backgroundColor: fontSize === size ? '#2196f3' : '#eee',
                color: fontSize === size ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              {size}
            </button>
          ))}
        </div>
        <p style={{ marginTop: '8px', fontSize }}>
          Ejemplo de texto ({fontSize})
        </p>
      </Card.Body>
    </Card>
  );
};

// ============================================
// DENSITY SELECTOR
// ============================================

const DensitySelector = () => {
  const { density, setDensity } = useConfig();

  return (
    <Card variant="outlined">
      <Card.Header>
        <Card.Title>📐 Densidad</Card.Title>
      </Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['compact', 'normal', 'spacious'].map((d) => (
            <button
              key={d}
              onClick={() => setDensity(d as typeof density)}
              style={{
                padding: '6px 12px',
                backgroundColor: density === d ? '#2196f3' : '#eee',
                color: density === d ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              {d}
            </button>
          ))}
        </div>
        <div style={{ marginTop: '8px', display: 'flex', gap: density === 'compact' ? '4px' : density === 'spacious' ? '16px' : '8px' }}>
          <div style={{ width: '40px', height: '40px', background: '#ccc' }} />
          <div style={{ width: '40px', height: '40px', background: '#ccc' }} />
          <div style={{ width: '40px', height: '40px', background: '#ccc' }} />
        </div>
      </Card.Body>
    </Card>
  );
};

// ============================================
// NOTIFICATION SETTINGS
// ============================================

const NotificationSettings = () => {
  const { notifications, setNotification } = useConfig();

  return (
    <Card variant="outlined">
      <Card.Header>
        <Card.Title>🔔 Notificaciones</Card.Title>
      </Card.Header>
      <Card.Body>
        {Object.entries(notifications).map(([key, value]) => (
          <label key={key} style={{ display: 'block', marginBottom: '8px' }}>
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => setNotification(key as keyof typeof notifications, e.target.checked)}
            />
            {key}
          </label>
        ))}
      </Card.Body>
    </Card>
  );
};

// ============================================
// RESET BUTTON
// ============================================

const ResetSettings = () => {
  const { reset } = useConfig();

  return (
    <button
      onClick={reset}
      style={{
        marginTop: '16px',
        padding: '8px 16px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      Restaurar valores por defecto
    </button>
  );
};

// ============================================
// SETTINGS PANEL PRINCIPAL
// ============================================

export const SettingsPanel = () => {
  return (
    <div className="settings-panel" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2>⚙️ Configuración</h2>
      <ThemeSelector />
      <FontSizeSelector />
      <DensitySelector />
      <NotificationSettings />
      <ResetSettings />
    </div>
  );
};
