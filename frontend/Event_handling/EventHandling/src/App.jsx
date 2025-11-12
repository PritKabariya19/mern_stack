import React from 'react'

const App = () => {

  const handleMouseOver = () => {
    alert("mouse over event triggered");
  }
  return (
    <div>

      <form>
        <div onMouseOver={handleMouseOver}>
          i am prit kabariya
        </div>
      </form>
    </div>
  )
}

export default App