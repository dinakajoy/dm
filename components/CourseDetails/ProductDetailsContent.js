import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ProductDetailsContent = ({id, title, price, image, description}) => {
    Number.prototype.format = function(n, x) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
    };
    
    const dispatch = useDispatch()
    const [qty, setQty] = React.useState(1)

    const increment = () => {
        setQty(qty + 1)
    }

    const decrement = () => {
        setQty(qty - 1)
    }

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_QUANTITY_WITH_NUMBER',
            id,
            qty
        })

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    const handleBuyNow = () => {
        dispatch({
            type: 'ADD_QUANTITY_WITH_NUMBER',
            id,
            qty
        })

        Router.push('/cart')
    }

    return (
        <React.Fragment>
            <div className="col-lg-6 col-md-12">
                <div className="product-details-image">
                    <img src={image} alt="Image" />
                </div>
            </div>

            <div className="col-lg-6 col-md-12">
                <div className="product-details-desc">
                    <h3>{title}</h3>

                    <div className="price">
                        <span className="new-price">Price: NGN{price.format(2)}</span>
                    </div>

                    <div className="product-review">
                        <div className="rating">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star-half'></i>
                        </div>
                        <Link href="#">
                            <a className="rating-count">3 reviews</a>
                        </Link>
                    </div>

                    <p>{description}</p>

                    {/* <div className="product-add-to-cart">
                        <div className="input-counter">
                            <span onClick={decrement} className="minus-btn">
                                <i className='bx bx-minus'></i>
                            </span>
                            <input type="text" value={qty} onChange={e => (e)} />
                            <span onClick={increment} className="plus-btn">
                                <i className='bx bx-plus'></i>
                            </span>
                        </div>

                        <button onClick={handleAddToCart} type="submit" className="default-btn">
                            Add to Cart
                        </button>
                    </div> */}

                    <div className="buy-checkbox-btn">
                        <div className="item">
                            <input className="inp-cbx" id="cbx" type="checkbox" />
                            <label className="cbx" htmlFor="cbx">
                                <span>
                                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                    </svg>
                                </span>
                                <span>I agree with the terms and conditions</span>
                            </label>
                        </div>

                        <div className="item">
                            <button onClick={handleBuyNow} className="default-btn">
                                Buy it now!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductDetailsContent;