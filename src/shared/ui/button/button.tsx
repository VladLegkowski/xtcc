import React from 'react';
import styles from './button.module.css';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'search'
  | 'link'
  | 'link-danger';
type ButtonSize = 'default' | 'small';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  active?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  active,
  ...props
}: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className} ${active ? styles.active : undefined}`;
  return (
    <button type="button" className={buttonClass} {...props}>
      {children}
    </button>
  );
}
