import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Button from '../Button'

describe('Button component', () => {
  const buttonLabel = 'Click me'
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Button>{buttonLabel}</Button>
    </ThemeProvider>
  )
  it('should check the button label to be the same as defined during the initialisation', () => {
    const element = getByText(buttonLabel)
    expect(element.textContent).toEqual(buttonLabel)
    expect(element.textContent).not.toEqual(buttonLabel + 'hi')
  })
})
