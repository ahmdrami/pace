import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Hotel from '../Hotel'

describe('Button component', () => {
  const { getByText, getAllByTestId, container } = render(
    <ThemeProvider theme={theme}>
      <Hotel />
    </ThemeProvider>
  )
  it('should check the button label to be the same as defined during the initialisation', () => {
    expect(getAllByTestId(/^test/).length).toEqual(5)
  })
})
