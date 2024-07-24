import React from 'react';
import styles from './header.module.css';
import { Button } from '../../shared/ui/button/button';

interface HeaderProps {
  onCreateNewTrip: () => void;
}

export function Header({ onCreateNewTrip }: HeaderProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>e</span>
      </div>
      <Button
        variant="secondary"
        size="default"
        onClick={onCreateNewTrip}
        className={styles.createButton}
      >
        Create new trip
      </Button>
    </nav>
  );
}
