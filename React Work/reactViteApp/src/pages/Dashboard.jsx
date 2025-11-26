import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [count, setCount] = useState(0)
  const [point ,setPoint] = useState(10)
  useEffect(() => {
    console.log(count)
    console.log(point)
  },[count,point])
  return (
      <div>
          <h1>
        <button onClick={() => setCount(count + 1)}> click me</button>
        <br />
        <button onClick={() => setPoint(point + 10)}> add points</button>
        <br />
        Count: {count}
        <br />
        Points: {point}
          </h1>
    </div>
  )
}

export default Dashboard