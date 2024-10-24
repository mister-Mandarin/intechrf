'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import menuData from './menuData';
import styles from './Header.module.css';
import Logo from '@/utils/logo.png';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const usePathName = usePathname();

  // Handle navbar toggle
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Handle sticky navbar on scroll
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
    return () => window.removeEventListener('scroll', handleStickyNavbar);
  }, []);

  return (
    <header
      className={cn(styles.header, {
        [styles.sticky]: sticky,
        [styles.nonSticky]: !sticky
      })}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <Link
              href="/"
              className={cn(styles.headerLogo, {
                [styles.small]: sticky
              })}>
              <Image src={Logo} alt="logo" width={217} height={62} />
            </Link>
          </div>
          <div className={styles.menu}>
            <input
              className={styles.menuToggle}
              id="menu__toggle"
              type="checkbox"
            />
            <label className={styles.menuButton} htmlFor="menu__toggle">
              <span></span>
            </label>
            <nav id="navbarCollapse" className={cn(styles.navbar)}>
              <ul className={styles.navList}>
                {menuData.map((menuItem, index) => (
                  <li key={index} className={styles.navItem}>
                    <Link
                      href={menuItem.path}
                      className={cn(styles.navLink, {
                        [styles.active]: usePathName === menuItem.path
                      })}>
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
