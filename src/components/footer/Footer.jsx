import React from 'react'
import styles from './Footer.module.css'
import LOGO from '../../assets/logo/LOGO 1.svg'

const Footer = () => {
  return (
    <section className={styles.footer}>
    <div className={styles.logo}>
      <a>
        <img src={LOGO} alt="Stuff" />
      </a>
    </div>

    <div className={styles.rights}>
      Developed by{" "}
      <a href="#" target="_blank" rel="noreferrer">
        Tomkovich
      </a>
    </div>

    <div className={styles.socials}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">  
        <i className="bi bi-instagram"></i>
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <i className="bi bi-facebook"></i>
      </a>

      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <i className="bi bi-youtube"></i>
      </a>
    </div>
  </section>
  )
}

export default Footer