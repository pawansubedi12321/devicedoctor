import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from './components/LoginPage'
import PublicRoutes from './router/PublicRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        {/* <Loginpage/> */}
        <PublicRoutes/>
       
    </>
  )
}

export default App
