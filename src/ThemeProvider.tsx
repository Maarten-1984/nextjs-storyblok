import React, { useContext, useState } from "react"
import {
  DefaultTheme,
  ThemeProvider as SCThemeProvider
} from "styled-components"

const generalTheme = {
  breakpoints: {
    xs: "@media all and (max-width: 480px)",
    sm: "@media all and (min-width: 480px)",
    md: "@media all and (min-width: 760px)",
    lg: "@media all and (min-width: 1024px)",
    xl: "@media all and (min-width: 1248px)"
  },
  typography: {
    h1: {
      fontSize: "4rem",
      lineHeight: 1
    },
    h2: {
      fontSize: "1.8rem",
      lineHeight: 2
    },
    h3: {
      fontSize: "1.6rem",
      lineHeight: 1.5
    },
    p: {
      fontSize: "1.4rem",
      lineHeight: 1.2
    },
    button: {
      fontSize: "1.2rem",
      lineHeight: 1
    }
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "red",
    background: "#FFFFFF",
    text: "#1a161b",
    button: "white",
    buttonBg: "#6969f6",
    buttonBgHover: "#3e3eb1"
  },
  ...generalTheme
}

const darkTheme: DefaultTheme = {
  colors: {
    primary: "red",
    text: "#FFFFFF",
    background: "#1a161b",
    button: "black",
    buttonBg: "white",
    buttonBgHover: "blue"
  },
  ...generalTheme
}

interface LMProps {
  isLightMode: boolean
  toggleLightMode: () => void
}

const LightModeContext = React.createContext<LMProps>({
  isLightMode: true,
  toggleLightMode: () => {}
})

const LightModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isLightMode, setLightMode] = useState(true)
  const toggleLightMode = () => setLightMode((prev) => !prev)
  return (
    <LightModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  )
}

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { isLightMode } = useToggleLightMode()
  return (
    <SCThemeProvider theme={isLightMode ? theme : darkTheme}>
      {children}
    </SCThemeProvider>
  )
}

const useToggleLightMode = () => useContext(LightModeContext)

export { ThemeProvider, useToggleLightMode, LightModeProvider }
