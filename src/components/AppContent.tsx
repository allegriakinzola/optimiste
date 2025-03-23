'use client';

import { usePathname } from 'next/navigation';
import { useAnimation } from "@/context/AnimationContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoAnimation from "@/components/LogoAnimation";

export default function AppContent({ children }: { children: React.ReactNode }) {
  const { isAnimationComplete } = useAnimation();
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      <LogoAnimation />
      {isAnimationComplete && (
        <>
          {!isAdminRoute && <Navbar />}
          <main className={!isAdminRoute ? "mt-16" : ""}>
            {children}
          </main>
          {!isAdminRoute && <Footer />}
        </>
      )}
    </>
  );
}
