import React from 'react'
import styles from "./Navbar.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={styles.navbar_container}>
      <Link to='/' className={styles.title}>Shopping</Link>
      <div>
        <ul className={styles.nav_item}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          {isAuthenticated ? (
            <li><button onClick={handleLogout} className={styles.logoutBtn}>Logout</button></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </div>
    </div>
  )
}
