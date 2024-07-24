import React from 'react';
import styles from './h4.module.css';

function H4(props: React.PropsWithChildren) {
  const { children } = props;
  return <h4 className={styles.h4}>{children}</h4>;
}

export { H4 };
