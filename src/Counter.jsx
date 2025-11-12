import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

  return (
    <div>
      <h1>count = {count}</h1>
      <button id="btn" onClick={() => setCount(count + 1)}>+</button>
      <button id="btn" onClick={() => setCount(0)}>set zero</button>
    </div>
  )
}

export default Counter