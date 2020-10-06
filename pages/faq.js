import React from 'react';
import Navbar from '../components/_App/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/FAQ/FaqContent';
import FaqContactForm from '../components/FAQ/FaqContactForm';
import Footer from '../components/_App/Footer';

const Faq = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="FAQ" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
                imgClass="bg-6" 
            /> 
            <FaqContent />
            {/* <FaqContactForm /> */}
            <Footer />
        </React.Fragment>
    );
}

export default Faq;