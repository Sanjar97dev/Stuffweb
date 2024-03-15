import React, { useState } from 'react';
import styles from './Header.module.css';
import LOGO from '../../assets/logo/LOGO 1.svg';
import avatar from '../../assets/logo/20544442431551942822 1.svg';
import searchImg from '../../assets/logo/Layer 2.svg';
import { useDispatch } from 'react-redux';


const Header = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    img: '',
    search: '', // Add search field to userData state
  });

  const dispatch = useDispatch();

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    console.log(userData);
    setIsVisible(false); // Assuming setIsVisible is defined somewhere in your component
  };

  

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a>
            <img src={LOGO} alt="Stuff" />
          </a>
        </div>

        <div className={styles.info}>
          <div className={styles.user} onClick={() => {}}>
            <img src={avatar} alt="avatar" />
            <span className={styles.username}>Yana Tamkovich</span>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.icon}>
              <img src={searchImg} alt="search" />
            </div>

            <div className={styles.input}>
              <input
                type="search"
                name="search"
                placeholder="Search for anything..."
                onChange={changeInput}
                value={userData.search}
              />
            </div>
            {false && <div className={styles.box}></div>}
          </form>

          <div className={styles.account}>
            <a className={styles.favourites}>
              <i className="bi bi-heart"></i>
            </a>

            <a className={styles.cart}>
              <i className="bi bi-bag"></i>
              <span className={styles.count}>2</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
