import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../store/slices/apiSlice'
import { useEffect } from 'react'
import { ROUTES } from '../../utils/routes'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import Products from './Products'
import { getRelatedProducts } from '../../store/slices/productsSlice'


const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, related } = useSelector(({ product }) => product);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(()=>{
    if (!data || !list.length) return;
      dispatch(getRelatedProducts(data.category.id))
    
  }, [data, dispatch, list.length]);

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={list} amount={5} title={"Related products"}/>
    </>
  );
};

export default SingleProduct;