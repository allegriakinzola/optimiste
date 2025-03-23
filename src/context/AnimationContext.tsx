'use client';

import { createContext, useContext, useState } from 'react';

type AnimationContextType = {
  isAnimationComplete: boolean;
  setAnimationComplete: (complete: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  return (
    <AnimationContext.Provider value={{ isAnimationComplete, setAnimationComplete }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
