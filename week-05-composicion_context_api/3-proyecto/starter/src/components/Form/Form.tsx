// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Form/Form.tsx
// ============================================

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type FormEvent,
  type InputHTMLAttributes,
} from 'react';
import { useConfig } from '../../contexts/ConfigContext';

// ============================================
// CONTEXT INTERNO
// ============================================

interface FormContextValue {
  values: Record<string, string>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  setValue: (name: string, value: string) => void;
  setError: (name: string, error: string) => void;
  setTouched: (name: string) => void;
}
const FormContext = createContext<FormContextValue | undefined>(undefined);

const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('Form subcomponent must be used within <Form>');
  return ctx;
};

// ============================================
// FIELD CONTEXT
// ============================================

interface FieldContextValue {
  name: string;
}
const FieldContext = createContext<FieldContextValue | undefined>(undefined);

const useFieldContext = () => {
  const ctx = useContext(FieldContext);
  if (!ctx) throw new Error('Form.Field children must be used within <Form.Field>');
  return ctx;
};

// ============================================
// FORM ROOT
// ============================================

interface FormRootProps {
  children: ReactNode;
  onSubmit: (values: Record<string, string>) => void;
  initialValues?: Record<string, string>;
}

const FormRoot = ({ children, onSubmit, initialValues = {} }: FormRootProps) => {
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouchedState] = useState<Record<string, boolean>>({});

  const setValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const setError = (name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const setTouched = (name: string) => {
    setTouchedState((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  const contextValue: FormContextValue = {
    values,
    errors,
    touched,
    setValue,
    setError,
    setTouched,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

// ============================================
// FORM FIELD
// ============================================

interface FormFieldProps {
  children: ReactNode;
  name: string;
}

const FormField = ({ children, name }: FormFieldProps) => (
  <FieldContext.Provider value={{ name }}>
    <div style={{ marginBottom: '12px' }}>{children}</div>
  </FieldContext.Provider>
);

// ============================================
// FORM LABEL
// ============================================

interface FormLabelProps {
  children: ReactNode;
  required?: boolean;
}

const FormLabel = ({ children, required }: FormLabelProps) => {
  const { name } = useFieldContext();
  return (
    <label htmlFor={name} style={{ fontWeight: 'bold' }}>
      {children} {required && '*'}
    </label>
  );
};

// ============================================
// FORM INPUT
// ============================================

interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {}

const FormInput = (props: FormInputProps) => {
  const { name } = useFieldContext();
  const { values, setValue, setTouched } = useFormContext();
  const { fontSize, density } = useConfig();

  const densityPadding =
    density === 'compact' ? '4px' : density === 'spacious' ? '12px' : '8px';

  return (
    <input
      {...props}
      id={name}
      name={name}
      value={values[name] || ''}
      onChange={(e) => setValue(name, e.target.value)}
      onBlur={() => setTouched(name)}
      style={{
        padding: densityPadding,
        fontSize: fontSize === 'small' ? '0.85rem' : fontSize === 'large' ? '1.2rem' : '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
      }}
    />
  );
};

// ============================================
// FORM ERROR
// ============================================

interface FormErrorProps {
  children?: ReactNode;
}

const FormError = ({ children }: FormErrorProps) => {
  const { name } = useFieldContext();
  const { errors, touched } = useFormContext();
  const error = errors[name];

  if (!error || !touched[name]) return null;

  return (
    <span style={{ color: 'red', fontSize: '0.85rem' }}>
      {children || error}
    </span>
  );
};

// ============================================
// FORM ACTIONS
// ============================================

interface FormActionsProps {
  children: ReactNode;
}

const FormActions = ({ children }: FormActionsProps) => (
  <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>{children}</div>
);

// ============================================
// FORM SUBMIT
// ============================================

interface FormSubmitProps {
  children: ReactNode;
  disabled?: boolean;
}

const FormSubmit = ({ children, disabled }: FormSubmitProps) => (
  <button type="submit" disabled={disabled} style={{ padding: '8px 16px' }}>
    {children}
  </button>
);

// ============================================
// COMPOUND COMPONENT EXPORT
// ============================================

export const Form = Object.assign(FormRoot, {
  Field: FormField,
  Label: FormLabel,
  Input: FormInput,
  Error: FormError,
  Actions: FormActions,
  Submit: FormSubmit,
});
