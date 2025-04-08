import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.title}>Shopping</div>
      <div >
        <ul className={styles.nav_item}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>
  )
}
