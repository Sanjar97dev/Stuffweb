import React from 'react'
import Banner from '../../components/banner/Banner'
import Hero from '../hero/Hero'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Poster from '../../components/poster/Poster'
import Products from '../products/Products'
import Sale from '../../components/banner/Banner'
import Products100$ from '../products/Products100$'

const Home = () => {
  return (
    <>
        <Hero/>
        <Products/>
       <Banner/>
       <Products100$/>
    </>
  )
}

export default Home