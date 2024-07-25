import React from 'react';
import styles from './h1.module.css';

type H1Props = {
  children: React.ReactNode;
};

function H1(props: H1Props) {
  const { children } = props;
  return <h1 className={styles.h1}>{children}</h1>;
}

export { H1 };
