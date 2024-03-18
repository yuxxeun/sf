"use client"

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import SmoothScrolling from "@/components/core/SmoothScroll";
import Footer from '@/components/common/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="./favicon.ico" />
          <title>SF</title>
        </head>
          <body className={`${GeistSans.className} px-2 dark mx-auto`}>
              <SmoothScrolling>
                  {children}
                  <Footer/>
              </SmoothScrolling>
              <Analytics debug={false}/>
          </body>
      </html>
    </>
  );
}