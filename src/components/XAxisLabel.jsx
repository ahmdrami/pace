import React, { memo } from 'react'

const XAxisLabel = memo(({ x, y, payload }) => (
  <g transform={`translate(${x}, ${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      textAnchor="end"
      fontSize={11}
      transform="rotate(-50)"
    >
      {payload.value}
    </text>
  </g>
))

export default XAxisLabel
