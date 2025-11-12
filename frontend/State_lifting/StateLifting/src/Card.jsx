import React from 'react'

const Card = (props) => {
  return (
    <>
      <input type="text" value={props.name}
      onChange={(e)=>props.setName(e.target.value)} />
      <p>Card: {props.name}</p>  
   
    </>
  )
}

export default Card
