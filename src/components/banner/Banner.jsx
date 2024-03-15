import React from 'react'
import styles from '../../pages/home/Home.module.css';
import Saleimg from '../../assets/Rectangle 14.svg'

const Banner = () => {
  return (
  <section className={styles.banner}>
    <div className={styles.left}>
      <p className={styles.content}>
        NEW YEAR
        <span>SALE</span>
      </p>
      <button className={styles.more}>See more</button>
    </div >
      
    <div className={styles.right}  >
      <img  src={Saleimg} alt="sale" />
      <p className={styles.discount}>
        save up to <span>50%</span> off
      </p>
    </div>
  </section>
);
}

export default Banner