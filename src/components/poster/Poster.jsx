import React from 'react'
import styles from '../../pages/home/Home.module.css'
import bannerImg from '../../assets/image 1.svg'

const Poster = () => {
  return (
    <section className={styles.home}>
    <div className={styles.title}>BIG SALE 20%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the bestseller of 2022</div>
        <h1 className={styles.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.image}>
        <img className={styles.bannersImg} src={bannerImg} alt="banner" />
      </div>
    </div>
  </section>
  )
}

export default Poster