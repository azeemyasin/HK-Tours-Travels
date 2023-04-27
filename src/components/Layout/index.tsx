import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'HK Travel & Tour' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
