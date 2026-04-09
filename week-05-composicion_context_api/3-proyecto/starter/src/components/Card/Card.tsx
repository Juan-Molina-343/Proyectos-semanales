// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Card/Card.tsx
// ============================================

import {
  createContext,
  useContext,
  type ReactNode,
  type CSSProperties,
} from 'react';
import { useConfig } from '../../contexts/ConfigContext';

// ============================================
// CONTEXT INTERNO
// ============================================

interface CardContextValue {
  variant?: 'default' | 'outlined' | 'elevated';
}
const CardContext = createContext<CardContextValue | undefined>(undefined);

const useCardContext = () => {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error('Card subcomponent must be used within <Card>');
  return ctx;
};

// ============================================
// CARD ROOT
// ============================================

interface CardRootProps {
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  className?: string;
  style?: CSSProperties;
}

const CardRoot = ({
  children,
  variant = 'default',
  className,
  style,
}: CardRootProps) => {
  const { fontSize, density } = useConfig();

  const densityPadding =
    density === 'compact' ? '8px' : density === 'spacious' ? '20px' : '12px';

  const baseStyle: CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    border:
      variant === 'outlined'
        ? '1px solid #ccc'
        : variant === 'elevated'
        ? 'none'
        : '1px solid transparent',
    boxShadow: variant === 'elevated' ? '0 2px 6px rgba(0,0,0,0.15)' : 'none',
    borderRadius: '6px',
    padding: densityPadding,
    fontSize: fontSize === 'small' ? '0.85rem' : fontSize === 'large' ? '1.2rem' : '1rem',
    backgroundColor: 'var(--bg-primary, #fff)',
    color: 'var(--text-primary, #000)',
    ...style,
  };

  return (
    <CardContext.Provider value={{ variant }}>
      <div className={className} style={baseStyle}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

// ============================================
// CARD HEADER
// ============================================

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => (
  <div className={className} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
    {children}
  </div>
);

// ============================================
// CARD TITLE
// ============================================

interface CardTitleProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CardTitle = ({ children, as: Tag = 'h3' }: CardTitleProps) => (
  <Tag style={{ margin: 0 }}>{children}</Tag>
);

// ============================================
// CARD ACTIONS
// ============================================

interface CardActionsProps {
  children: ReactNode;
}

const CardActions = ({ children }: CardActionsProps) => (
  <div style={{ display: 'flex', gap: '8px' }}>{children}</div>
);

// ============================================
// CARD BODY
// ============================================

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

const CardBody = ({ children, className }: CardBodyProps) => (
  <div className={className} style={{ marginBottom: '8px' }}>
    {children}
  </div>
);

// ============================================
// CARD FOOTER
// ============================================

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const CardFooter = ({ children, className }: CardFooterProps) => (
  <div className={className} style={{ borderTop: '1px solid #eee', paddingTop: '8px' }}>
    {children}
  </div>
);

// ============================================
// COMPOUND COMPONENT EXPORT
// ============================================

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Actions: CardActions,
  Body: CardBody,
  Footer: CardFooter,
});

