// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Layout/Layout.tsx
// ============================================

import { type ReactNode } from 'react';
import { useConfig } from '../../contexts/ConfigContext';

// ============================================
// LAYOUT PROPS
// ============================================

interface LayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

// ============================================
// LAYOUT COMPONENT
// ============================================

export const Layout = ({ children, sidebar }: LayoutProps) => {
  const { theme, fontSize, density } = useConfig();

  const getFontSizeValue = () => {
    switch (fontSize) {
      case 'small':
        return '14px';
      case 'medium':
        return '16px';
      case 'large':
        return '18px';
    }
  };

  const getPaddingValue = () => {
    switch (density) {
      case 'compact':
        return '8px';
      case 'normal':
        return '16px';
      case 'spacious':
        return '24px';
    }
  };

  return (
    <div
      data-theme={theme}
      style={{
        fontSize: getFontSizeValue(),
        padding: getPaddingValue(),
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary, #fff)',
        color: 'var(--text-primary, #000)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header style={{ marginBottom: '16px' }}>
        <h1>🏋️ Gimnasio - Dashboard Configurable</h1>
      </header>
      <main style={{ display: 'flex', flex: 1, minWidth: 0, overflow: 'hidden' }}>
        {sidebar && (
          <aside
            style={{
              width: '250px',
              marginRight: '16px',
              borderRight: '1px solid #ddd',
              paddingRight: '16px',
              minWidth: 0,
              overflow: 'hidden',
            }}
          >
            {sidebar}
          </aside>
        )}
        <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>{children}</div>
      </main>
    </div>
  );
};
