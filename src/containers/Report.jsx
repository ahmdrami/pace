import React, { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import XAxisLabel from '../components/XAxisLabel'
import CustomToolTip from '../components/CustomToolTip'

const Report = () => {
  const [state, setState] = useState(() => [])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    try {
      let response = await fetch('/occupancy-curve')
      response = await response.json()
      const { x_axis, data } = response
      if (x_axis && data) {
        setState(() =>
          x_axis.map((x, i) => {
            return { day: x, occupancy: data.occupancy[i] }
          })
        )
      }
    } catch (error) {}
  }
  return state.length > 0 ? (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart data={state}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" height={50} tick={<XAxisLabel />} />
        <YAxis />
        <Tooltip content={<CustomToolTip />} />
        <Legend verticalAlign="bottom" />
        <Line
          dot={{ r: 6, fill: '#265ef2', strokeWidth: 1 }}
          activeDot={{ stroke: '#265ef2', strokeWidth: 1, r: 8 }}
          type="monotone"
          dataKey="occupancy"
          stroke="#265ef2"
        />
      </LineChart>
    </ResponsiveContainer>
  ) : (
    'Loading'
  )
}

export default Report
