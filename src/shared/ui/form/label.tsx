import React from 'react';
import styles from './label.module.css';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
  maxLength?: number;
};

export function Label(props: LabelProps) {
  const { htmlFor, children, maxLength, ...otherProps } = props;

  return (
    <label htmlFor={htmlFor} className={styles.label} {...otherProps}>
      {children}
      {maxLength && (
        <span className={styles.maxLength}> (max. {maxLength} characters)</span>
      )}
    </label>
  );
}
