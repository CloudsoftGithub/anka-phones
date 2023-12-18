"use client";

import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });
{
  /**
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
*/
}

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  });
  useEffect(() => {
    import("lightbox2/dist/js/lightbox-plus-jquery.min.js");
  })
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
       
      </body>
    </html>
  );
}
