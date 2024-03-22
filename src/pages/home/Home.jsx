import React from 'react'
import Hero from '../../components/hero/Hero';
import Products from '../products/Products';
import { useSelector } from 'react-redux';
import Category from '../categories/Category';
import Banner from '../../components/banner/Banner';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { filterByPrice } from '../../store/slices/productsSlice';
import Categories from '../categories/Categories';




const Home = () => {
    const dispatch = useDispatch();
    const {product: {list, filtered}, categories} = useSelector((state) => state);

    useEffect(()=>{
      if (!list.length) return;
      dispatch(filterByPrice(100))
    }, [dispatch, list.length])
    
   
  return (
    <div>
      <>
       <Hero/>
       <Products products={list} amount={5} title={"Trending"}/>
       <Categories products={categories.list} amount={5} title="Worth seeing"/>
       <Banner/>
       <Products products={filtered.slice(0,10)} amount={5} title={"Less than 100$"}/>
      </>
    </div>
  )
}

export default Home