import React, { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  // create state
  const [name, setName] = useState(""); // default value empty string
  return (
    <>
      <h1>React State Example</h1>
      <Card name={name} setName={setName} />
  
    </>
  )
}

export default App
