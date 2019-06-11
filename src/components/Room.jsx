import React, { memo } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

const Container = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  border: 1px solid #e8e8e8;
  margin-bottom: 1em;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0px 9px 18px -1px rgba(0, 0, 0, 0.49);
  }
`
const ImageContainer = styled.div`
  flex: 25%;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`
const Content = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em 2em;
  h4 {
    margin-bottom: 12px;
  }
  small {
    color: ${({ theme }) => theme.colors.grey};
  }
`
const Price = styled.span`
  flex: 25%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: white;
`

const Room = memo(({ img, price, name, type, bed, currency_symbol }) => {
  return (
    <Container
      data-testid={`test-${name}`}
      onClick={() => navigate(`/hotel/${name}`, { state: { price: price } })}
    >
      <ImageContainer>
        <img src={img} alt="room" />
      </ImageContainer>
      <Content>
        <h2>Room {name}</h2>
        <h4>{type}</h4>
        <small>{bed} double bed</small>
      </Content>
      <Price>
        {currency_symbol}
        {price}
      </Price>
    </Container>
  )
})

export default Room
