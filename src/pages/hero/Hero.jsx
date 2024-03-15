import React from 'react'
import styles from './Hero.module.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getProduct } from '../../store/slices/productSlices'
import { useState } from 'react'
import Poster from '../../components/poster/Poster'

const Hero = () => {

    const [filterData, setFilterData] = useState();
    
    const {productData, isLoading, error} = useSelector(state=> state.product)
    const dispatch = useDispatch()


    
    useEffect(()=> {
        dispatch(getProduct())
    }, [])

    if(productData===null){
        <h1>Loading...</h1>
    }

    let newcategory = [];
    if (productData !== null) {
        productData.forEach(el => {
            if (!newcategory.includes(el.category.name)) {
                newcategory.push(el.category.name);
            }
        });
    }
    

  const getCategoryProduct = (e) => {
    setinsvible(false);
    const filterCategoriay = productData?.filter(
      (el) => el.category.name === e.target.innerText
    );
    setFilterData(filterCategoriay);
  };





  return (
   <section className={styles.hero}>
    <div className={styles.sidebar}>
    <div className={styles.title}>CATEGORIES</div>
    <nav>
      <ul className={styles.menu}>
        {newcategory.map(el=>(
            <li key={el} onClick={getCategoryProduct}>{el}</li>
        ))}
      </ul>
    </nav>

    <div className={styles.footer}>
      <a href="/help" target="_blank" className={styles.link}>
        Help
      </a>
      <a
        href="/terms"
        target="_blank"
        className={styles.link}
        style={{ textDecoration: "underline" }}
      >
        Terms & Conditions
      </a>
    </div>
  </div>
    <Poster/>
  </section>
  )
}

export default Hero