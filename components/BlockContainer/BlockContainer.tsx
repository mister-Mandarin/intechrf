import { ReactNode } from 'react';
import styles from './BlockContairer.module.css';

export default function BlockContainer({ children }: { children: ReactNode }) {
  return <section className={styles.wrapper}>{children}</section>;
}
