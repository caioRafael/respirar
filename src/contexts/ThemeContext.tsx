import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import React, { createContext, ReactNode, useState } from "react";

interface ThemeContextData {
  mode: boolean;
  alterMode: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [fonts] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  });

  const [mode, setMode] = useState<boolean>(false);

  function alterMode() {
    setMode(!mode);
  }

  if (!fonts) {
    return <AppLoading />
  } else {
    return (
      <ThemeContext.Provider value={{
        mode,
        alterMode,
      }}>
        {children}
      </ThemeContext.Provider>
    )
  }
}