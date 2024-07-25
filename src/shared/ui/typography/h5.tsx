import React from 'react';
import styles from './h5.module.css';

type H5Props = {
  children: React.ReactNode;
};

function H5(props: H5Props) {
  const { children } = props;
  return <h5 className={styles.h5}>{children}</h5>;
}

export { H5 };
