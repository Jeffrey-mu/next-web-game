import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/style/index.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'H5自研游戏平台',
  description: 'H5自研游戏平台',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          (inter.className)
        }
      >
        <div className="app">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
