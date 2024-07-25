import React from 'react';
import styles from './form-field.module.css';
import { Label } from './label';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  id: string;
};

export function Select(props: SelectProps) {
  const { label, id, ...otherProps } = props;

  return (
    <div className={styles.fieldContainer}>
      <Label htmlFor={id}>{label}</Label>
      <div className={styles.selectWrapper}>
        <select id={id} className={styles.select} {...otherProps}>
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
