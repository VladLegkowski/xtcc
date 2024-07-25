import React from 'react';
import clsx from 'clsx';
import styles from './text.module.css';

type TextVariant = 'normal' | 'subtle';

type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
};

export function Text(props: TextProps) {
  const { children, variant = 'normal', className = '' } = props;
  const textClass = variant === 'subtle' ? styles.subtle : styles.normal;

  return <p className={clsx(styles.text, textClass, className)}>{children}</p>;
}
