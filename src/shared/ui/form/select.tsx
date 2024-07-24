import React from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
}

export function Select({ label, id, ...props }: SelectProps) {
  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id}>{label}</Label>
      <div className={styles.selectWrapper}>
        <select id={id} className={styles.select} {...props}>
          {[...Array(99)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
