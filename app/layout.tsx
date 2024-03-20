"use client"

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import SmoothScrolling from "@/components/core/SmoothScroll";
import Loader from '@/components/core/Loader';
import TitleChangeOnTabChange from '@/components/core/DynamicTItle';
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
          <title>@yuxxeun — SF</title>
        </head>
          <body className={`${GeistSans.className} px-2 dark text-white mx-auto`}> 
            <TitleChangeOnTabChange/>
            <SmoothScrolling>
              <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                  {children}
              </div>
              <Footer/>
            </SmoothScrolling>
            <Analytics debug={false}/>
          </body>
      </html>
    </>
  );
}