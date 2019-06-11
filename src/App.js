import React from 'react'
import { Router } from '@reach/router'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import GlobalCss from './GlobalCss'
import Header from './layout/Header'
import Report from './containers/Report'
import Hotel from './containers/Hotel'
import PriceUpdate from './containers/PriceUpdate'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalCss />
        <Header />
        <Router>
          <Hotel path="/hotel" />
          <PriceUpdate path="/hotel/:id" />
          <Report path="/report" />
        </Router>
      </>
    </ThemeProvider>
  )
}

export default App
