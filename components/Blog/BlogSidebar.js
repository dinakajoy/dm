import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-area left-sidebar-mb">
            <div className="widget widget_search">
                <h3 className="widget-title">Search Now</h3>
                <div className="post-wrap">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>

                        <button type="submit">
                            <i className='bx bx-search'></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="widget widget-peru-posts-thumb">
                <h3 className="widget-title">Popular Posts</h3>
                <div className="post-wrap">
                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <p className="time">April 20, 2020</p>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a >
                                        How To Clean And Spread Disinfect
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <p className="time">April 21, 2020</p>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>
                                        What Can I Do To Prevent Myself & prevent Disease
                                    </a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>

                    <div className="item">
                        <Link href="/blog-details">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <p className="time">April  22, 2020</p>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    <a>
                                        Superior Clean Through Our Trained
                                    </a> 
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </div>
                </div>
            </div>
  
            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>
                <div className="post-wrap">
                    <ul>
                        <li>
                            <Link href="#">
                                <a>Antibiotic <span>(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Diseases <span>(20)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Health Care <span>(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Heart Rate <span>(12)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Hospital <span>(16)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Tags</h3>
                <div className="post-wrap">
                    <div className="tagcloud">
                        <Link href="#">
                            <a>Antibiotic (3)</a>
                        </Link>
                        <Link href="#">
                            <a>Diseases (3)</a>
                        </Link>
                        <Link href="#">
                            <a>Heart (2)</a>
                        </Link>
                        <Link href="#">
                            <a>Health (2)</a>
                        </Link>
                        <Link href="#">
                            <a>Hospital (1)</a>
                        </Link>
                        <Link href="#">
                            <a>Infectious</a>
                        </Link>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default BlogSidebar;