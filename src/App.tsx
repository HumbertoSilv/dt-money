import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

export const App = () =>  {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <h1>ABC</h1>
    </ThemeProvider>
  )
}