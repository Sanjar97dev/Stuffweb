import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/slices/productSlices';
import styles from './Product.module.css';

const Products100$ = () => {
    const { productData, isLoading, error } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    if (isLoading || productData === null) {
        return <h1>Loading...</h1>; // Return loading indicator while fetching data or if productData is null
    }

    // Check if productData is an array before filtering it
    if (!Array.isArray(productData)) {
        return <h1>Error: Invalid product data</h1>;
    }

    return (
        <div>
            <div style={{marginTop: 40, marginBottom: 40}} className={styles.product}>
                <h1 className={styles.title}>Less than 100$</h1>
                <div className="row">
                    {productData.filter(product => product.price < 100).slice(0, 12).map(product => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card bg-black text-white">
                                <img id={styles.img} src={product.images} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 style={{ color: '#FFFFFF' }} className="card-title">{product.title.substring(0, 20)}...</h5>
                                    <p style={{ color: '#B8B8B8', fontSize: 12 }} className="card-text">{product.description.substring(0, 80)}...</p>
                                    <div className=' d-flex justify-content-between'>
                                        <h2 style={{ color: '#6C3EB8', fontSize: 20 }}>{product.price}$</h2>
                                        <p style={{ color: '#576067', fontSize: 10 }}>{product.category.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.btn}>See More</button>
            </div>
        </div>
    );
};

export default Products100$;
