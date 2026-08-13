import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/modules/cart/context/CartContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ByteMarket",
  description: "A modern hardware and computer components storefront built with Next.js."
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
