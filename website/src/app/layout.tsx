import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// If loading a variable font, you don't need to specify the font weight
const plexSans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"]
});

const plexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACM LU",
  description: "Lamar University's ACM Chapter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plexSans.className} ${plexMono.className} antialiased`}
      >



        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}