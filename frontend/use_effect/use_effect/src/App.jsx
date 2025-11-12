import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [mcount, setMCount] = useState(10)
  function counts(){
     setCount(count + 1)
    }

     function countsm(){
     setMCount(mcount - 1)
    }
  // first side-effect function
  // second ->clen-up function
  // third -> coma sepereted dep list


  // veriation:1
  // runs on every render, jyare jyre page refresh thay tyare aa function run kre
    // useEffect( () =>{
    //  alert("all page render")
    // })

  // veriation 2:
  // thets runs only first render
  useEffect( () =>{

    setCount(count+1)
  }, [])


  // veriation 3
  // useEffect( () =>{
  //   console.log("count is:",count)
  // }, [count])
    

  // veriation 4: multiple dependency
  // useEffect( () =>{
  //   alert("count or mcount change")
  // }, [count, mcount])


  // veriation 5: cleanup function
  // useEffect( () =>{
  //   const timer = setTimeout(() => {
  //     alert("Count update")
  //   }, 1000)

  //   return () => {
  //     alert("Count Clean")
  //   }
  // }, [count])

  return (
  
    <>
      <h1>Count</h1>
      <button onClick={counts}>Click me</button>
      <h1>{count}</h1>
    <button onClick={countsm}>Click</button> 
     <h1>{mcount}</h1>
      </>
  )
}

export default App
