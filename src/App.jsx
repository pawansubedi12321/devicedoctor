// import { useState ,createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from './components/LoginPage'
import PublicRoutes from './router/PublicRoutes'


function App() {
  // const [user, setuser] = useState([]);
  // console.log("thiis is setuser from app",user);

  return (
    <>
      
        {/* <Loginpage/> */}

        {/* <UserContext.Provider> */}
        <PublicRoutes/>
        {/* </UserContext.Provider> */}
       
    </>
  )
}

export default App
