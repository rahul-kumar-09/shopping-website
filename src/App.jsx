import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Button } from './components/Button/Button'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Cart } from './components/Cart/Cart'
import { Login } from './components/Login/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
