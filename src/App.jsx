
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Button } from './components/Button/Button'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { Login } from './components/Login/Login'
import { SingleProduct } from './components/SingleProduct/SingleProduct'
function App() {

  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<SingleProduct />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
