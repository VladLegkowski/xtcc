import React from 'react';
import styles from './label.module.css';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  maxLength?: number;
}

export function Label({ htmlFor, children, maxLength, ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles.label} {...props}>
      {children}
      {maxLength && (
        <span className={styles.maxLength}> (max. {maxLength} characters)</span>
      )}
    </label>
  );
}
