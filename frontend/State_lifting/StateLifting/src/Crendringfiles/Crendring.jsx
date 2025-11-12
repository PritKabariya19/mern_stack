import React from 'react'
import LoginButton from './loginbutton'
import LogoutButton from './logoutbutton'

const Crendring = () => {

  const[islogin,setislogin] = React.useState(false);

  // condition 1
//   if(islogin){
//     return (
//       <div>
//         <h2>Welcome User</h2>
//         <LogoutButton />
//       </div>
//     )
//   }
//   else{
//   return (
//     <div>
//       <h2>Please Login</h2>
//       <LoginButton />
//     </div>
//   )
// }

// condition 2
return (    
<>
  <h2>Welcome User</h2>
{islogin ? <LogoutButton /> : <LoginButton />}
</>
)
}

export default Crendring