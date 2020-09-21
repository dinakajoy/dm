import React from 'react';
import Navbar from '../components/_App/Navbar2';
import { useSelector } from 'react-redux';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import Content from '../components/Cart/Content';

const Cart = () => {
    const products = useSelector(state => state.addedItems);
    console.log(products);
    const total = useSelector(state => state.total)
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Cart" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Cart" 
                imgClass="bg-24" 
            /> 

            <div className="cart-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <form>
                                <div className="cart-wraps">
                                    <div className="cart-table table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Unit Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>

                                            <Content products={products} />
                                        </table>
                                    </div>

                                    <div className="cart-buttons">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-7 col-md-7">
                                                <div className="continue-shopping-box">
                                                    <Link href="/courses">
                                                        <a className="default-btn page-btn">
                                                            Add More Courses
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                                <Link href="#">
                                                    <a className="default-btn page-btn" onClick={e => e.preventDefault()}>
                                                        Update Cart
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="cart-totals">
                                            <h3>Cart Totals</h3>
                                            <ul>
                                                <li>Subtotal <span>NGN{total.toFixed(2)}</span></li>
                                                <li>Shipping <span>NGN10.00</span></li>
                                                <li>Coupon <span>NGN0.00</span></li>
                                                <li>Total <span>NGN{(total + 10).toFixed(2)}</span></li>
                                                <li><b>Payable Total</b> <span><b>NGN{(total + 10).toFixed(2)}</b></span></li>
                                            </ul>

                                            <div className="text-center">
                                                <Link href="/checkout">
                                                    <a className="default-btn page-btn">
                                                        Proceed to Checkout
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </React.Fragment>
    );
}

export default Cart;