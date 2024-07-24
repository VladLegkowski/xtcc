import React from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  maxLength?: number;
  initialHeight?: string;
}

export function TextArea({
  label,
  id,
  maxLength,
  initialHeight = '150px',
  placeholder,
  ...props
}: TextAreaProps) {
  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id} maxLength={maxLength}>
        {label}
      </Label>
      <textarea
        id={id}
        className={styles.textarea}
        placeholder={placeholder}
        maxLength={maxLength}
        style={{ height: initialHeight }}
        {...props}
      />
    </div>
  );
}
