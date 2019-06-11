import React, { memo } from 'react'
import styled from 'styled-components'

const ToolTip = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  > span {
    height: 100%;
    padding: 8px 12px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    font-size: 10px;
    text-transform: uppercase;
    &:nth-child(2) {
      color: white;
      background-color: ${({ theme }) => theme.colors.primary};
      font-size: 13px;
      font-weight: bold;
    }
  }
`
const CustomToolTip = memo(({ active, payload }) =>
  active ? (
    <ToolTip>
      <span> {payload[0].payload.day}</span>
      <span> occupancy {payload[0].payload.occupancy}</span>
    </ToolTip>
  ) : null
)

export default CustomToolTip
