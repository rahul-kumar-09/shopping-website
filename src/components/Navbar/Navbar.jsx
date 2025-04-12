import React, { useState } from 'react'
import styles from "./Navbar.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar_container}>
    <div style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
      <Link to='/' className={styles.title}>Shopping</Link>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      </div>
      <div>
        <ul className={`${styles.nav_item} ${isMenuOpen ? styles.active : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link></li>
          {isAuthenticated ? (
            <li><button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className={styles.logoutBtn}>Logout</button></li>
          ) : (
            <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
          )}
        </ul>
      </div>
    </div>
  )
}
