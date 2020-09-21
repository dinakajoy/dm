import React from 'react';
import Navbar from '../components/_App/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import Features from '../components/AboutUs/Features';
import MoreAbout from '../components/AboutUs/MoreAbout';
import Footer from '../components/_App/Footer';

const AboutUs = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
                imgClass="bg-1" 
            /> 
            <AboutUsContent />
            <Features />
            <MoreAbout />
            <Footer />
        </React.Fragment>
    );
}

export default AboutUs;