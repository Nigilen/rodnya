import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/src/components/layout/footer/footer";
import { Header } from "@/src/components/layout/header/header";

// const manropeThin = localFont({
//   src: "./fonts/Manrope-Thin.woff",
//   variable: "--font-manrope",
//   weight: "100",
// });
// const manropeLight = localFont({
//   src: "./fonts/Manrope-Light.woff",
//   variable: "--font-manrope",
//   weight: "300",
// });
// const manropeRegular = localFont({
//   src: "./fonts/Manrope-Regular.woff",
//   variable: "--font-manrope",
//   weight: "normal",
// });
// const manropeBold = localFont({
//   src: "./fonts/Manrope-Bold.woff",
//   variable: "--font-manrope",
//   weight: "bold",
// });
// const manropeMedium = localFont({
//   src: "./fonts/Manrope-Medium.woff",
//   variable: "--font-manrope",
//   weight: "500",
// });
// const manropeSemiBold = localFont({
//   src: "./fonts/Manrope-SemiBold.woff",
//   variable: "--font-manrope",
//   weight: "600",
// });
// const manropeExtraBold = localFont({
//   src: "./fonts/Manrope-ExtraBold.woff",
//   variable: "--font-manrope",
//   weight: "800",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className='page'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
