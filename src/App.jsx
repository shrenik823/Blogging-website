import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Pages/Header'
import Blogs from './Pages/Blogs'
import Footer from './Pages/Footer'
import Login from './Pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/>
      <Blogs/>
      <Footer/> */}
      <Login/>
    </>
  )
}

export default App
