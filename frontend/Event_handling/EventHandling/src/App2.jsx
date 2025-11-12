import React, { useState } from 'react'


const App2 = () => {
  const [bgColor, setBgColor] = useState("rgb(255,255,255)")
  const [count,setcount]  = useState(0)

  function colorchange() {
    // generate 3 random numbers between 0 and 255
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    let newColor = `rgb(${r}, ${g}, ${b})`
    setBgColor(newColor)   // update state
  }

  function counts(e){
    
  }

  return (
    <div 
    onClick={colorchange} 
    
    style={{
      backgroundColor: bgColor,
      padding:"70px"
    }}>
     

      <button
      onClick={colorchange} 
        style={{padding: "10px 20px", borderRadius: "8px"}}
      >+</button>
     
    </div>
  )
}

export default App2
