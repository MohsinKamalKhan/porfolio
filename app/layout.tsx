import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import FooterSection from "@/components/footer/footer";

const jetbrainsmono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400'
});

export const metadata: Metadata = {
  title: "Welcome to my Portfolio",
  description: "Mohsin Kamal Khan's Portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsmono.className}>
        <div className="background_image_one"></div>
        <div className="background_image_two"></div>
        <Navbar />
        <div style={{marginTop:'7vh'}}>{children}</div>
        <FooterSection />
      </body>
    </html>
  );
}
