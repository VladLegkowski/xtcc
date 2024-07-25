import React, { forwardRef } from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

export const TextInput = forwardRef(
  (
    { label, id, placeholder, type = 'text', children, value, ...props },
    ref,
  ) => {
    return (
      <div className={styles.fieldContainer}>
        <Label htmlFor={id}>{label}</Label>
        <input
          ref={ref}
          value={value}
          id={id}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          {...props}
        />
        {children}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
