import React, { createContext } from 'react';
import './App.css';
import ChildA from './ChildA';

// 1 ---> create context
// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // const userName = "Prit Kabariya"; // context value
  const [theme, setTheme] = React.useState("Light");
  return (
    <>
      {/* 2 ---> Provide context */}
      <ThemeContext.Provider value={{theme,setTheme}}>
        <ChildA />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
// export { UserContext }; // export so other files can use
export { ThemeContext };