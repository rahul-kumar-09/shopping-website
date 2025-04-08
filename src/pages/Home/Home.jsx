import React from 'react'
import styles from './Home.module.css'
import { Products } from '../../components/Products/Products'

export const Home = () => {
  return (
    <div className={styles.black}>
      <Products />
    </div>
  )
}
