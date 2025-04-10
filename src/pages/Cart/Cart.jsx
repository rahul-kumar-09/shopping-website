import React from 'react';
import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';
import { ToastContainer, toast } from 'react-toastify';

export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty</h2>
        <p>Add some items to your cart to see them here!</p>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.title} className={styles.itemImage} />
            <div className={styles.itemDetails}>
              <h3>{item.title}</h3>
              <p className={styles.price}>${item.price}</p>
              <div className={styles.quantityControls}>
                <button 
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  className={styles.quantityButton}
                >
                  -
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className={styles.quantityButton}
                >
                  +
                </button>
              </div>
            </div>
            <button 
              onClick={() => {
                removeFromCart(item.id);
                toast.success("Product removed from cart");
              }}
              className={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))}

      </div>
        <ToastContainer autoClose={4000} />
      <div className={styles.cartSummary}>
        <h3>Order Summary</h3>
        <div className={styles.summaryRow}>
          <span>Subtotal:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <button className={styles.checkoutButton}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
