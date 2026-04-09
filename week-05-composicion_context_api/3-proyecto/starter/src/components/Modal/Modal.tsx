// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Modal/Modal.tsx
// ============================================

import {
  cloneElement,
  createContext,
  isValidElement,
  type ReactElement,
  useContext,
  useState,
  type ReactNode,
  type CSSProperties,
} from 'react';
import { useConfig } from '../../contexts/ConfigContext';

// ============================================
// MODAL CONTEXT
// ============================================

interface ModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('Modal subcomponent must be used within <Modal>');
  return ctx;
};

// ============================================
// MODAL ROOT
// ============================================

interface ModalRootProps {
  children: ReactNode;
}

const ModalRoot = ({ children }: ModalRootProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const value: ModalContextValue = {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

// ============================================
// MODAL TRIGGER
// ============================================

type ModalTriggerChildren =
  | ReactNode
  | ((props: { onClick: () => void }) => ReactNode);

interface ModalTriggerProps {
  children: ModalTriggerChildren;
  asChild?: boolean;
}

const ModalTrigger = ({ children, asChild = false }: ModalTriggerProps) => {
  const { open } = useModalContext();

  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<any>, {
      onClick: open,
    });
  }

  if (typeof children === 'function') {
    return children({ onClick: open });
  }

  return (
    <button onClick={open} style={{ cursor: 'pointer' }}>
      {children}
    </button>
  );
};

// ============================================
// MODAL CONTENT (OVERLAY + DIALOG)
// ============================================

interface ModalContentProps {
  children: ReactNode;
  title?: string;
}

const ModalContent = ({ children, title }: ModalContentProps) => {
  const { isOpen, close } = useModalContext();
  const { theme, fontSize, density } = useConfig();

  if (!isOpen) return null;

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const dialogStyle: CSSProperties = {
    position: 'relative',
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '8px',
    padding: 'var(--padding-card)',
    maxWidth: '500px',
    width: '90%',
    maxHeight: '80vh',
    overflow: 'auto',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
    color: 'var(--text-primary)',
    fontSize: 'var(--font-size-base)',
  };

  const titleStyle: CSSProperties = {
    fontSize: 'var(--font-size-heading)',
    color: 'var(--text-primary)',
    marginBottom: 'var(--gap)',
    fontWeight: 'bold',
  };

  return (
    <div style={overlayStyle} onClick={close}>
      <div style={dialogStyle} onClick={(e) => e.stopPropagation()}>
        {title && <h2 style={titleStyle}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};

// ============================================
// MODAL CLOSE
// ============================================

interface ModalCloseProps {
  children?: ReactNode;
}

const ModalClose = ({ children = '✕' }: ModalCloseProps) => {
  const { close } = useModalContext();

  const closeButtonStyle: CSSProperties = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button onClick={close} style={closeButtonStyle} aria-label="Close modal">
      {children}
    </button>
  );
};

// ============================================
// COMPOUND COMPONENT EXPORT
// ============================================

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Close: ModalClose,
});
