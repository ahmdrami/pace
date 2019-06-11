import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em 2em;
  a {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1em;
    margin-right: 8px;
    text-decoration: none;
  }
`
const Header = props => {
  return (
    <Nav>
      <Link to="/hotel">Rooms</Link>
      <Link to="/report">Report</Link>
    </Nav>
  )
}

export default Header
