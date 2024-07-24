import React from 'react';
import styles from './text.module.css';

type TextVariant = 'normal' | 'subtle';

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
}

export function Text({
  children,
  variant = 'normal',
  className = '',
}: TextProps) {
  const textClass = variant === 'subtle' ? styles.subtle : styles.normal;

  return (
    <p className={`${styles.text} ${textClass} ${className}`}>{children}</p>
  );
}
