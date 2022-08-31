import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    colors: {
      primary: string
      background: string
      text: string
      button: string
      buttonBg: string
      buttonBgHover: string
    }
    typography: {
      h1: {
        fontSize: string
        lineHeight: string | number
      }
      h2: {
        fontSize: string
        lineHeight: string | number
      }
      h3: {
        fontSize: string
        lineHeight: string | number
      }
      p: {
        fontSize: string
        lineHeight: string | number
      }
      button: {
        fontSize: string
        lineHeight: string | number
      }
    }
  }
}
