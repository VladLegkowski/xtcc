import React from 'react';
import styles from './Header.module.css';

function HeaderComponent(props: React.PropsWithChildren) {
  const { children } = props;
  return <header className={styles.header}>{children}</header>;
}
const Header = React.memo(HeaderComponent);
export { Header };
