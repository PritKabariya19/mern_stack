import React from 'react'

const Button = (props) => {

  

  return (
    <div>
        <button onClick={props.handleclick}>{props.text}</button>
        <h1>Count:{props.count}</h1>
    </div>
  )
}

export default Button