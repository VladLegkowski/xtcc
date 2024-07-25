import React from 'react';
import styles from './h4.module.css';

type PropType = {
  children: React.ReactNode;
};

function H4(props: PropType) {
  const { children } = props;
  return <h4 className={styles.h4}>{children}</h4>;
}

export { H4 };
