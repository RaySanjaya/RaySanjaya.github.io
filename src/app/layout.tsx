import type { Metadata } from "next";
import { Cascadia_Code } from "next/font/google";
import "./globals.css";
import { FontAwesomeConfig } from "@/ui_kits/FontAwesomeConfig";
import Particles from "@/ui_kits/particles";
import { LanguageProvider } from "@/providers/LanguageProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const robotoMono = Roboto_Mono({
//   // variable: "--font-roboto-mono",
//   subsets: ["latin"],
// });

// const robotoFont = Roboto({
//   // variable: "--font-jetbrains-mono",
//   subsets: ["latin"],
// });

const cascadiaCode = Cascadia_Code({
  subsets: ["latin"],
});

// const geologica = Geologica({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Ray Sanjaya",
  description: "Portofolio - Ray Sanjaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig />
      </head>
      <body
        className={`${cascadiaCode.className} antialiased`}
        style={{ backgroundColor: "#222222", color: "#ededed" }}
      >
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
