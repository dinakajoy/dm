import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import AppointmentForm from '../components/Appointment/AppointmentForm';

const Appointment = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Appointment" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Appointment" 
                imgClass="bg-5" 
            /> 
            <AppointmentForm />
            <Footer />
        </React.Fragment>
    );
}

export default Appointment;