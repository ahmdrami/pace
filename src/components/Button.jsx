import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 1em;
  border-radius: ${({ theme }) => theme.borderRadius};
`

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
