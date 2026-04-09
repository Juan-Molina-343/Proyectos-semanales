// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Tabs/Tabs.tsx
// ============================================

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type CSSProperties,
} from 'react';
import { useConfig } from '../../contexts/ConfigContext';

// ============================================
// TABS CONTEXT
// ============================================

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

const useTabsContext = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs subcomponent must be used within <Tabs>');
  return ctx;
};

// ============================================
// TABS ROOT
// ============================================

interface TabsRootProps {
  children: ReactNode;
  defaultValue: string;
}

const TabsRoot = ({ children, defaultValue }: TabsRootProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const value: TabsContextValue = {
    activeTab,
    setActiveTab,
  };

  return (
    <TabsContext.Provider value={value}>
      {children}
    </TabsContext.Provider>
  );
};

// ============================================
// TABS LIST
// ============================================

interface TabsListProps {
  children: ReactNode;
}

const TabsList = ({ children }: TabsListProps) => {
  const { density } = useConfig();

  const listStyle: CSSProperties = {
    display: 'flex',
    gap: 'var(--gap)',
    borderBottom: '2px solid var(--border-color)',
    padding: 'var(--padding-base)',
    marginBottom: 'var(--padding-card)',
  };

  return <div style={listStyle}>{children}</div>;
};

// ============================================
// TABS TAB (TRIGGER)
// ============================================

interface TabsTabProps {
  children: ReactNode;
  value: string;
}

const TabsTab = ({ children, value }: TabsTabProps) => {
  const { activeTab, setActiveTab } = useTabsContext();

  const isActive = activeTab === value;

  const tabStyle: CSSProperties = {
    padding: 'var(--padding-base) var(--padding-card)',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: 'var(--font-size-base)',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#2196f3' : 'var(--text-secondary)',
    borderBottom: isActive ? '3px solid #2196f3' : 'none',
    marginBottom: '-2px',
    transition: 'all 0.3s ease',
  };

  return (
    <button
      style={tabStyle}
      onClick={() => setActiveTab(value)}
      role="tab"
      aria-selected={isActive}
    >
      {children}
    </button>
  );
};

// ============================================
// TABS PANEL
// ============================================

interface TabsPanelProps {
  children: ReactNode;
  value: string;
}

const TabsPanel = ({ children, value }: TabsPanelProps) => {
  const { activeTab } = useTabsContext();
  const { fontSize, density } = useConfig();

  if (activeTab !== value) return null;

  const panelStyle: CSSProperties = {
    padding: 'var(--padding-card)',
    animation: 'fadeIn 0.3s ease-in',
  };

  return (
    <div style={panelStyle} role="tabpanel">
      {children}
    </div>
  );
};

// ============================================
// COMPOUND COMPONENT EXPORT
// ============================================

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
});
