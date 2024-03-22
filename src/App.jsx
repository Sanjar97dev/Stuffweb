import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCategories } from './store/slices/categoriesSlice'
import { getProducts } from './store/slices/productsSlice'
import AppRoutes from './Routes/Routes'
import UserForm from './components/user/UserForm'


const App = () => {
const dispatch = useDispatch()
 
useEffect(()=>{
  dispatch(getProducts())
  dispatch(getCategories())
}, [dispatch])

  return (
    <div>
      <div className='app'>
        <div className="container"> 
        <Header/>
        <UserForm/>
        
          <AppRoutes/>
        
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default App