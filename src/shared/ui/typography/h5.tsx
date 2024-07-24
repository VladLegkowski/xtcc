import React from 'react';
import styles from './h5.module.css';

function H5(props: React.PropsWithChildren) {
  const { children } = props;
  return <h5 className={styles.h5}>{children}</h5>;
}

export { H5 };
