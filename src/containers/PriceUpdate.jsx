import React, { memo, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { navigate } from '@reach/router';

const Card = styled.div`
  max-width: 585px;
  margin: auto;
  display: flex;
  flex-direction: column;
  input {
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 32px;
    margin: 1em 0;
    text-align: center;
    color: white;
    padding: 1em;
  }
`

const PriceUpdate = memo(({ id, location }) => {
  const [price, setPrice] = useState(() => location.state.price)

  const onChange = ({ target: { value } }) => {
    setPrice(parseFloat(value.replace(/[^0-9.]/g, '')).toFixed(2))
  }
  const onClick = async () => {
    try {
      await fetch('/price', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ new_price: price })
      })
      navigate('/hotel')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Card>
      <h2>Room {id}</h2>
      <small>Available</small>
      <input type="text" value={price} onChange={onChange} />
      <Button onClick={onClick}>Update</Button>
    </Card>
  )
})

PriceUpdate.propTypes = {}

export default PriceUpdate
