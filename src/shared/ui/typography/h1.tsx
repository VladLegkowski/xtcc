import React from 'react';
import styles from './h1.module.css';

function H1(props: React.PropsWithChildren) {
  const { children } = props;
  return <h1 className={styles.h1}>{children}</h1>;
}

export { H1 };
