import React from "react"
import Card from "./card.jsx"
import Button from "./Button.jsx"
function App() {

    const [count,setcount]=React.useState(0);

  function handleclick(){
    setcount(count+1);
  }
    
    function resetzero(){
        setcount(0);
    }

  return (
    <>
    <button onClick={resetzero}>Reset</button>
    <Button handleclick={handleclick} text="Click Me" count={count} />
   
      {/* <Card title="Card Title" content="This is the card content." /> */}
      
    </>
  )
}

export default App
