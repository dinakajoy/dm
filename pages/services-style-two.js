import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesTwo from '../components/Services/ServicesTwo';
import HowItWorksTwo from '../components/Common/HowItWorksTwo';
import Footer from '../components/_App/Footer';

const ServicesStyleTwo = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Services Style Two" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Style Two" 
                imgClass="bg-13" 
            /> 
            <ServicesTwo />
            <div className="pt-100">
                <HowItWorksTwo />
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default ServicesStyleTwo;