import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className={styles.grid_col}>
      {products.map((item) => (
        <div key={item.id} className={styles.card}>
          <Link to={`/product/${item.id}`}>
            <img src={item.image} className={styles.cardImage} alt={item.title} />
          </Link>
          <div className={styles.cardContent}>
            <Link to={`/product/${item.id}`} className={styles.cardLink}>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.bottomSection}>
                <p className={styles.rating}>{item.category}</p>
                <p className={styles.price}>${item.price}</p>
              </div>
            </Link>
            <button 
              className={styles.btn} 
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
