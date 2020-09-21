import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
 
    return (
        <React.Fragment>
            <footer className="footer-top-area f-bg pt-100 pb-70 jarallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <div className="foot-logo">
                                    <Link href="/">
                                        <a><img src="/img/logo.png" alt="Image" /></a>
                                    </Link>
                                </div>

                                <p>Loctech IT Training Institute teaches tomorrow's Information Technology today, using best practices.</p>

                                <div className="social-area">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Our Courses</h3>

                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Big Data
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Business Professional
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Design &amp; Media
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Programming 
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Network &amp; Security
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Other
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget">
                                <h3>Quick Links</h3>

                                <ul>
                                    <li>
                                        <Link href="/about-us">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                About
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/courses">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Courses
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/instructors">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Instructors
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/testimonials">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Testimonials 
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Blog
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">
                                            <a>
                                                <i className="bx bx-chevrons-right"></i>
                                                Contact Us
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-widget contact">
                                <h3>Get In Touch</h3>

                                <ul>
                                    <li>
                                        <i className="bx bx-phone-call"></i>
                                        <span>Hotline:</span> 
                                        Phone: <a href="tel:+2347038885466">+234 703 888 5466</a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-envelope"></i>
                                        <span>Email:</span> 
                                        <a href="mailto:info@loctechng.com">
                                            info@loctechng.com
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <i className="bx bx-location-plus"></i>
                                        <span>Address:</span> 
                                        4A Etim Okpoyo Close, Rumuobiakani , Bridge bus stop, Aba Express Road, Port Harcourt
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
	  
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="copy-right">
                        <p>Loctech &copy; {currentYear} Loctech. All Rights Reserved By <a href="https://www.loctechng.com/" target="blank">Loctechng</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;