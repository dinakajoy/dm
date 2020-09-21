import React from 'react';
import Navbar from '../components/_App/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Contact/Map';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Contact" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact Us" 
                imgClass="bg-19" 
            /> 
            <ContactForm />
            <Map />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;