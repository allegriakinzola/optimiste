import { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google';
import { AnimationProvider } from "@/context/AnimationContext";
import AppContent from "@/components/AppContent";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Optimiste',
  description: 'Votre application de podcasts préférée',
  manifest: '/manifest.json',
  icons: {
    apple: '/logo.png',
  },
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={outfit.className}>
        <AnimationProvider>
          <AppContent>{children}</AppContent>
        </AnimationProvider>
      </body>
    </html>
  );
}
