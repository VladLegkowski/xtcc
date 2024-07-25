import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'search'
  | 'link'
  | 'link-danger';
type ButtonSize = 'default' | 'small';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  active?: boolean;
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'default',
    className = '',
    active,
    ...otherProps
  } = props;

  const buttonClass: string = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className,
    { [styles.active]: active },
  );

  return (
    <button type="button" className={buttonClass} {...otherProps}>
      {children}
    </button>
  );
}
