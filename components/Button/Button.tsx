import { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';
import IconSearch from '@/utils/icons/search.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  // format: 'primary' | 'ghost';
  icon?: 'right' | 'search' | 'none';
}

export default function Button({
  children,
  icon = 'none',
  className,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={cn(styles.button, className)}>
      {children}
      {icon == 'search' && <IconSearch className={styles.icon} />}
    </button>
  );
}
