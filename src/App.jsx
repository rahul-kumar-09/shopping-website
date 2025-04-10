import React from 'react';
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Button } from './components/Button/Button'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { Login } from './components/Login/Login'
import { SingleProduct } from './components/SingleProduct/SingleProduct'
import { CartProvider } from './context/CartContext'
import { AuthProvider, useAuth } from './context/AuthContext'

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path='/cart' element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } />
            <Route path='/product/:id' element={
              <ProtectedRoute>
                <SingleProduct />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
