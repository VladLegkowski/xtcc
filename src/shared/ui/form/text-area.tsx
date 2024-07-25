import React, { forwardRef } from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

export const TextArea = forwardRef(
  ({ label, id, maxLength, placeholder, ...props }, ref) => {
    return (
      <div className={styles.fieldContainer}>
        <Label htmlFor={id} maxLength={maxLength}>
          {label}
        </Label>
        <textarea
          ref={ref}
          id={id}
          className={styles.textarea}
          placeholder={placeholder}
          maxLength={maxLength}
          style={{ height: '150px' }}
          {...props}
        />
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
