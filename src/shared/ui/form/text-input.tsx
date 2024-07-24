import React, { ChangeEvent } from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  id: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
}

export function TextInput({
  label,
  id,
  placeholder,
  type = 'text',
  children,
  onChange,
  value,
  ...props
}: TextInputProps) {
  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id}>{label}</Label>
      <input
        value={value}
        id={id}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange && onChange(event.target.value)
        }
        {...props}
      />
      {children}
    </div>
  );
}
