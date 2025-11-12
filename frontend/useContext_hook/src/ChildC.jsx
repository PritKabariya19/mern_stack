import React, { useContext, useState } from 'react';
// import { UserContext } from './App';
import { ThemeContext } from './App';
import './App.css'

const ChildC = () => {
//   const user = useContext(UserContext); // 👈 consuming context
  const {theme,setTheme} = useContext(ThemeContext);
   const [bgclr,setBgclr] = React.useState('red');
  function handleclick(){
    if(theme=='Light'){
      setTheme('Dark')
      setBgclr('black')

    }
    else{
      setTheme('Light')
      setBgclr('white')
    }
  }
  return (
    <div>
      {/* <h2>Hello {user}</h2> */}
      <div style={{backgroundColor:bgclr}}>
      <button onClick={handleclick} >Change Them</button>
      <p>Current theme: {theme}</p>
      </div>
      
    </div>
  );
};

export default ChildC;
R