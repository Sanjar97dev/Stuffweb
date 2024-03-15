import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/slices/productSlices';
import styles from './Product.module.css'

const Products = () => {
    const { productData, isLoading, error } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    if (isLoading || productData === null) {
        return <h1>Loading...</h1>;
    }

    console.log(productData);

    return (
        <div className={styles.product}>
            <h1 className={styles.title}>Trending</h1>
        <div className="row ">
            {productData.slice(0, 42).map(product => (
                <div key={product.id} className="col-md-4 mb-4">
                    <div className="card bg-black text-white">
                        <img id={styles.img} src={product.images} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                            <h5 style={{color: '#FFFFFF'}} className="card-title">{product.title.substring(0, 20)}...</h5>
                            <p style={{color: '#B8B8B8', fontSize: 12}} className="card-text">{product.description.substring(0,80)}...</p>
                            <div className=' d-flex justify-content-between '>
                                <h2 style={{color: '#6C3EB8', fontSize: 20}}>{product.price}$</h2>
                                <p style={{color: '#576067', fontSize: 10}}>{product.category.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button className={styles.btn} >See More</button>
        </div>
    );
};

export default Products;
