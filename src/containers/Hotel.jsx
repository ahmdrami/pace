import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Room from '../components/Room'
import RoomImg from '../assets/room.jpeg'

const Container = styled.div`
  max-width: 650px;
  margin: auto;
`
const Hotel = () => {
  const [roomPrice, setRoomPrice] = useState({})

  useEffect(() => {
    fetchPrices()
  }, [])

  const fetchPrices = async () => {
    try {
      let response = await fetch('/price')
      response = await response.json()
      setRoomPrice(() => ({
        ...response.data
      }))
    } catch (error) {}
  }

  return (
    <Container>
      {[124, 122, 313, 244, 225].map(room => (
        <Room
          
          key={room}
          {...roomPrice}
          img={RoomImg}
          name={room}
          type="Double"
          bed="1"
        />
      ))}
    </Container>
  )
}

export default Hotel
