import React, { createContext, ReactNode } from "react";

interface BreatheProviderProps {
  children: ReactNode;
}
export const BreatheContext = createContext({});

export function BreatheProvider({ children }: BreatheProviderProps) {
  return (
    <BreatheContext.Provider value={{}}>
      {children}
    </BreatheContext.Provider>
  )
}