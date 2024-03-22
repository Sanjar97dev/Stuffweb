import styles from '../../styles/header.module.css'
import { ROUTES } from '../../utils/routes';
import LOGO from '../../assets/logo/LOGO 1.svg'
import { Link, useNavigate } from 'react-router-dom';
import AVATAR from '../../assets/avatar.svg'
import search from '../../assets/logo/search.svg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleForm } from '../../store/slices/userSlices';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGetProductsQuery } from '../../store/slices/apiSlice';




const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "Guest",
    avatar: AVATAR,
  });
  const [searchValue, setSearchValue] = useState("");

  const { currentUser, cart } = useSelector(({user})=> user);

  const { data, isLoading} = useGetProductsQuery({title: searchValue});

  useEffect(()=>{
    if (!currentUser)return;
    setValues(currentUser);
  }, [currentUser]);

  const handleClick = ()=>{
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  const handleSearch = ({target: {value}}) => {
    setSearchValue(value);
  }

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${values.avatar})` }} />
          <div className={styles.username}>{values.name}</div>
        </div>

        <form className={styles.form}>
          <div className={styles.form}>
            <div className={styles.icon}>
              <img className={styles.svg} src={search} alt="search" />
            </div>
          
          <div className={styles.input}>
            <input type="search"
              name='search'
              autoComplete='off'
              placeholder='Search for anything...'
              onChange={handleSearch}
              value={searchValue}
            />
          </div>
      </div>
          {searchValue && (
          <div className={styles.box}>
            {isLoading ?
            "Loading":
            !data.length ?
            "No results" :
            data.map(({title, images, id})=>{
              return (
                <Link key={id}
                onClick={()=>setSearchValue("")}
                className={styles.item}
                to={`products/${id}`}>
                  <div className={styles.image} style={{backgroundImage: `url(${images[0]})` }}/>
                  <div className={styles.title}>{title}</div>
                </Link>
              );
            })}
          </div>
          )}
        </form>

      
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
            {!!cart.length && (
              <span className={styles.count}>{cart.length}</span>
            )}
          </Link>
      </div>
      </div>
    </div>
  );
};

export default Header;
