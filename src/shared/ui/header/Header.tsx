import React from 'react';
import styles from './Header.module.css';

type HeaderProps = { children: React.ReactNode };

export function Header(props: HeaderProps) {
  const { children } = props;
  return <header className={styles.header}>{children}</header>;
}
