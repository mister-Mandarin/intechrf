import './globals.css';
import { ReactNode } from 'react';
import { Onest } from 'next/font/google';
import cn from 'classnames';
import Header from '@/components/Header/Header';

const font = Onest({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ru">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
