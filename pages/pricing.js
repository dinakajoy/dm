import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import HowItWorks from '../components/Common/HowItWorks';

const Pricing = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Pricing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing" 
                imgClass="bg-2" 
            /> 

            <div className="pricing-area pricing-page ptb-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Pricing Plan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia, quae minus vero vel reprehenderit, aliquid alias delectus autem.</p>
                    </div> 

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing">
                                <div className="pric-logo">
                                    <i className="flaticon-broom"></i>
                                </div>
                                <span>Property</span>
                                <h2>$100</h2>
                                <p>One Time Installation</p>

                                <ul>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        5 Room Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        2 Bathroom Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Window Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Floor  Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Vacuuming
                                    </li>
                                </ul>

                                <Link href="#">
                                    <a className="default-btn">
                                        Submit Request
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-pricing active">
                                <div className="pric-logo">
                                    <i className="flaticon-work"></i>
                                </div>
                                <span>Office</span>
                                <h2>$125</h2>
                                <p>One Time Installation</p>

                                <ul>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        5 Room Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        2 Bathroom Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Window Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Floor  Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Vacuuming
                                    </li>
                                </ul>

                                <Link href="#">
                                    <a className="default-btn">
                                        Submit Request
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                            <div className="single-pricing">
                                <div className="pric-logo">
                                    <i className="flaticon-mop"></i>
                                </div>
                                <span>Park & Road</span>
                                <h2>$199</h2>
                                <p>One Time Installation</p>

                                <ul>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        5 Room Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        2 Bathroom Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Window Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Floor Cleaning
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Vacuuming
                                    </li>
                                </ul>

                                <Link href="#">
                                    <a className="default-btn">
                                        Submit Request
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <HowItWorks />
       
            <Footer />
        </React.Fragment>
    );
}

export default Pricing;