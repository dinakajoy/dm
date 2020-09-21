import React from 'react';
import Link from 'next/link';
import AddToCart from './AddToCart';

const ProductCard = ({ courses }) => {
  Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };
  return (
    <div className="product-area ptb-100">
      <div className="container">
        <div className="woocommerce-topbar">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7 col-sm-6">
              <div className="woocommerce-result-count">
                <p>Showing 1-12 of 140 results</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-sm-6">
              <div className="woocommerce-topbar-ordering">
                <select className="form-control" id="Sorting">
                  <option>Default sorting</option>
                    <option>By Title</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {courses.length ? courses.map(course => (
              <div className="col-lg-4 col-sm-6" key={course.id}>
                <div className="single-product-box">

                    <div className="card myCard" style={{backgroundColor: '#dcfcfe'}}>
                      <div className="product-image card-img-top">
                        <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                          <a>
                            <img src={course.image} alt="Image" />
                          </a>
                        </Link>
                        <Link href="/cart">
                          <a className="add-to-cart-btn">Add To Cart</a>
                        </Link>
                        <AddToCart btnClass="add-to-cart-btn" {...course} />
                      </div>

                      <div className="card-body">
                        <p style={{margin:'0',padding:'0'}}>{course.type}</p>
                        <h4 className="card-title">{course.title}</h4>
                        <div className="course-data">
                          <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                          </ul>
                          <span>NGN{course.price.format(2)}</span>
                        </div>
                        <p className="card-text">{course.description.substring(0, 80)}...</p>
                        <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                          <a className="btn btn-primary">Learn More</a>
                        </Link>
                      </div>
                    </div>

                </div>
              </div>
            )) : (
              <h2>Empty</h2>
            )}



                                {/* <div className="product-image">
                                    <Link href="/product/[id]" as={`/product/${product.id}`}>
                                        <a>
                                            <img src={product.image} alt="Image" />
                                        </a>
                                    </Link>

                                    <Link href="/cart">
                                        <a className="add-to-cart-btn">Add To Cart</a>
                                    </Link>

                                    <AddToCart btnClass="add-to-cart-btn" {...product} />
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/product/[id]" as={`/product/${product.id}`}>
                                            <a>{product.title}</a>
                                        </Link>
                                    </h3>

                                    <div className="price">
                                        <span className="new">NGN{product.price}</span>
                                    </div>
                                    
                                    <div className="rating">
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                    </div>
                                </div> */}
                

					    {/* Pagination */}
                    {/* <div className="col-lg-12">
                        <div className="page-navigation-area text-center">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link page-links">
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li className="page-item active">
                                    <Link href="#">
                                        <a className="page-link">1</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">2</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">3</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProductCard;