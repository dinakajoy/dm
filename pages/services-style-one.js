import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesOne from '../components/Services/ServicesOne';
import HowItWorks from '../components/Common/HowItWorks';
import Footer from '../components/_App/Footer';

const ServicesStyleOne = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Services Style One" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Style One" 
                imgClass="bg-12" 
            /> 
            <ServicesOne />
            <HowItWorks />
            <Footer />
        </React.Fragment>
    );
}

export default ServicesStyleOne;