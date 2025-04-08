import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const Products = () => {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const PRODUCT_URL = "https://fakestoreapi.com/products";
    axios
      .get(PRODUCT_URL)
      .then(function (response) {
        console.log(response.data);
        setProduct(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className={styles.grid_col}>
      {product.map((item, index) => {
        return (
          <div key={index} className={styles.card}>
            <Link to='/product/2'>
              <img src={item.image} className={styles.cardImage} alt="" />{" "}
            </Link>
            <div className={styles.cardContent}>
              <Link to='/product/2' className={styles.cardLink}>
                <p className={styles.title}>{item.title}</p>
                <div className={styles.bottomSection}>
                  <p className={styles.rating}>{item.category}</p>
                  <p className={styles.price}>{item.price}</p>
                </div>
              </Link>
              <button className={styles.btn}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
