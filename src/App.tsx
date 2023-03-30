import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { mainTheme } from './styles/themes/main'

export function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
