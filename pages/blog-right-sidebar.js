import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogSidebar from '../components/Blog/BlogSidebar';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const BlogRightSidebar = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Blog Right Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Right Sidebar" 
                imgClass="bg-18" 
            /> 
 
            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/img/blog/blog1.jpg" alt="Image" /></a>
                                        </Link>
                                    
                                        <div className="blog-content">
                                            <ul>
                                                <li>
                                                    <Link href="#"><a>Admin</a></Link>
                                                </li>
                                                <li>
                                                    17 / 05 / 2020
                                                </li>
                                            </ul>

                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>Corona Virus Infection Prevention</h3>
                                                </a>
                                            </Link>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt amet adipiscing elit ipsum dolor sit amet.</p>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/img/blog/blog2.jpg" alt="Image" /></a>
                                        </Link>
                                        
                                        <div className="blog-content">
                                            <ul>
                                                <li>
                                                    <Link href="#"><a>Admin</a></Link>
                                                </li>
                                                <li>
                                                    18 / 05 / 2020
                                                </li>
                                            </ul>

                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>Superior Clean Through Our Trained</h3>
                                                </a>
                                            </Link>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt amet adipiscing elit ipsum dolor sit amet.</p>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/img/blog/blog3.jpg" alt="Image" /></a>
                                        </Link>
                                        
                                        <div className="blog-content">
                                            <ul>
                                                <li>
                                                    <Link href="#"><a>Admin</a></Link>
                                                </li>
                                                <li>
                                                    19 / 05 / 2020
                                                </li>
                                            </ul>

                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>How To Clean And Spread Disinfect</h3>
                                                </a>
                                            </Link>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt amet adipiscing elit ipsum dolor sit amet.</p>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/img/blog/blog4.jpg" alt="Image" /></a>
                                        </Link>
                                        
                                        <div className="blog-content">
                                            <ul>
                                                <li>
                                                    <Link href="#"><a>Admin</a></Link>
                                                </li>
                                                <li>
                                                    20 / 05 / 2020
                                                </li>
                                            </ul>

                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>25 Medical Tips We Just Had To Share</h3>
                                                </a>
                                            </Link>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt amet adipiscing elit ipsum dolor sit amet.</p>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/img/blog/blog5.jpg" alt="Image" /></a>
                                        </Link>
                                        
                                        <div className="blog-content">
                                            <ul>
                                                <li>
                                                    <Link href="#"><a>Admin</a></Link>
                                                </li>
                                                <li>
                                                    21 / 05 / 2020
                                                </li>
                                            </ul>

                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>CCU For Emergency Services & Medical Support</h3>
                                                </a>
                                            </Link>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt amet adipiscing elit ipsum dolor sit amet.</p>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <Link href="/blog-details">
                                            <a><img src="/img/blog/blog6.jpg" alt="Image" /></a>
                                        </Link>
                                        
                                        <div className="blog-content">
                                            <ul>
                                                <li>
                                                    <Link href="#"><a>Admin</a></Link>
                                                </li>
                                                <li>
                                                    22 / 05 / 2020
                                                </li>
                                            </ul>

                                            <Link href="/blog-details">
                                                <a>
                                                    <h3>What Can I Do To Prevent Myself & Prevent Disease</h3>
                                                </a>
                                            </Link>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt amet adipiscing elit ipsum dolor sit amet.</p>

                                            <Link href="/blog-details">
                                                <a className="read-more">
                                                    Read More <i className="bx bx-plus"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
            
                                {/* Pagination */}
                                <div className="col-lg-12">
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
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="blog-right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </React.Fragment>
    );
}

export default BlogRightSidebar;