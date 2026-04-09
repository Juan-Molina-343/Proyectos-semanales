// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: contexts/ConfigContext.tsx
// ============================================

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// ============================================
// TIPOS
// ============================================

export interface ConfigState {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  density: 'compact' | 'normal' | 'spacious';
  notifications: {
    email: boolean;
    push: boolean;
    sound: boolean;
  };
}

type ConfigAction =
  | { type: 'SET_THEME'; payload: ConfigState['theme'] }
  | { type: 'SET_FONT_SIZE'; payload: ConfigState['fontSize'] }
  | { type: 'SET_DENSITY'; payload: ConfigState['density'] }
  | { type: 'SET_NOTIFICATION'; payload: { key: keyof ConfigState['notifications']; value: boolean } }
  | { type: 'RESET' };

interface ConfigContextValue extends ConfigState {
  setTheme: (theme: ConfigState['theme']) => void;
  setFontSize: (size: ConfigState['fontSize']) => void;
  setDensity: (density: ConfigState['density']) => void;
  setNotification: (key: keyof ConfigState['notifications'], value: boolean) => void;
  reset: () => void;
}

// ============================================
// CONSTANTES
// ============================================

const STORAGE_KEY = 'app-config';

const defaultConfig: ConfigState = {
  theme: 'system',
  fontSize: 'medium',
  density: 'normal',
  notifications: {
    email: true,
    push: true,
    sound: false,
  },
};

// ============================================
// REDUCER
// ============================================

const configReducer = (state: ConfigState, action: ConfigAction): ConfigState => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.payload };
    case 'SET_DENSITY':
      return { ...state, density: action.payload };
    case 'SET_NOTIFICATION':
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.payload.key]: action.payload.value,
        },
      };
    case 'RESET':
      return defaultConfig;
    default:
      return state;
  }
};

// ============================================
// CONTEXT Y HOOKS
// ============================================

const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig debe usarse dentro de un ConfigProvider');
  }
  return context;
};

// ============================================
// PROVIDER
// ============================================

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  // Estado persistente con useLocalStorage
  const [storedConfig, setStoredConfig] = useLocalStorage<ConfigState>(
    STORAGE_KEY,
    defaultConfig
  );

  const [state, dispatch] = useReducer(configReducer, storedConfig);

  // Persistir cambios en localStorage
  useEffect(() => {
    setStoredConfig(state);
  }, [state, setStoredConfig]);

  // Aplicar tema al DOM
  useEffect(() => {
    let themeToApply = state.theme;
    if (themeToApply === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      themeToApply = prefersDark ? 'dark' : 'light';
    }
    document.documentElement.dataset.theme = themeToApply;
  }, [state.theme]);

  // Aplicar tamaño de fuente al DOM
  useEffect(() => {
    document.documentElement.dataset.fontSize = state.fontSize;
  }, [state.fontSize]);

  // Aplicar densidad al DOM
  useEffect(() => {
    document.documentElement.dataset.density = state.density;
  }, [state.density]);

  const value: ConfigContextValue = {
    ...state,
    setTheme: (theme) => dispatch({ type: 'SET_THEME', payload: theme }),
    setFontSize: (size) => dispatch({ type: 'SET_FONT_SIZE', payload: size }),
    setDensity: (density) => dispatch({ type: 'SET_DENSITY', payload: density }),
    setNotification: (key, value) =>
      dispatch({ type: 'SET_NOTIFICATION', payload: { key, value } }),
    reset: () => dispatch({ type: 'RESET' }),
  };

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};
