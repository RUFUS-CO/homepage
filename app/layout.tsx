import React from 'react';
import Head from 'next/head';

import { Lato } from 'next/font/google';

import { SiderBar } from 'components/SideBar';
import { Footer } from 'components/Footer';

import './globals.css';

const latoNormal = Lato({
  subsets: ['latin'],
  style: 'normal',
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato-regular',
});

const latoItalic = Lato({
  subsets: ['latin'],
  style: 'italic',
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato-italic',
});

export const metadata = {
  title: 'Cameron Strandberg',
  description: 'Just some guy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${latoNormal.variable} ${latoItalic.variable}`}>
      <Head>
        <title>Cameron Strandberg</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="flex flex-col min-h-screen bg-[#150f1c] lato-regular p-5">
          <div className="mx-auto max-w-5xl flex-grow text-white ">
            <div className="flex">
              <SiderBar />
              <div className="w-3/4 p-4">{children}</div>
            </div>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
