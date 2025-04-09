import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './SingleProduct.module.css'

export const SingleProduct = () => {
    const [data, setData] = useState([])
    const { id } = useParams();

    const fetchProducts = async () => {
        const PRODUCT_URL = `https://fakestoreapi.com/products/${id}`;
        axios.get(PRODUCT_URL)
            .then(function (response) {
                console.log(response.data);
                setData(response.data);
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
        <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img src={data.image} alt={data.title} className={styles.productImage} />
        </div>
        <div className={styles.detailsContainer}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.category}>Category: {data.category}</p>
          <p className={styles.description}>{data.description}</p>
          <p className={styles.price}>${data.price}</p>
          <button className='addToCartBtn' >
            Add to Cart
          </button>
        </div>
      </div>
    )
}
