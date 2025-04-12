import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_section}>
          <h3>About Us</h3>
          <p>Your one-stop shop for all your shopping needs. We provide quality products at competitive prices with excellent customer service.</p>
        </div>

        <div className={styles.footer_section}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        <div className={styles.footer_section}>
          <h3>Contact Us</h3>
          <ul>
            <li>Email: support@shopping.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Address: sec 18, Noida, Uttar Pradesh, India</li>
          </ul>
        </div>

        <div className={styles.footer_section}>
          <h3>Follow Us</h3>
          <div className={styles.social_links}>
            <a href="#" target="_blank" rel="">Facebook</a>
            <a href="#" target="_blank" rel="">Twitter</a>
            <a href="#" target="_blank" rel="">Instagram</a>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <p>&copy; {new Date().getFullYear()} Shopping Website. All rights reserved.</p>
      </div>
    </footer>
  );
};
