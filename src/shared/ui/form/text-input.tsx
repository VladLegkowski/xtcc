import React, { forwardRef } from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

export const TextInput = forwardRef((props, ref) => {
  const {
    label,
    id,
    placeholder,
    type = 'text',
    children,
    value,
    ...otherProps
  } = props;

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
        {...otherProps}
      />
      {children}
    </div>
  );
});

TextInput.displayName = 'TextInput';
