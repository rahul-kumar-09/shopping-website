import React from 'react';
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Button } from './components/Button/Button'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { Login } from './components/Login/Login'
import { SingleProduct } from './components/SingleProduct/SingleProduct'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
