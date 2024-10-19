import React from 'react'
import styles from '../styles/Book.module.css'

const Info = () => {
  return (
    <div className={styles.book}>
        <ul>
            <li className={styles.name}>STEP INN, KASOL</li>
            <li className={styles.date}>04 Sep 2024 - 05 Sep 2024</li>
            <li className={styles.info}>1 Guest - 1 Room</li>
            <li className={styles.misc}>Special Co... &#9662;</li>
        </ul>
        <div className={styles.booknow}>BOOK NOW</div>
    </div>
  )
}

export default Info