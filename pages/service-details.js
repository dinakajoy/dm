import React from 'react';
import Navbar from '../components/_App/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import ServicesSidebar from '../components/Services/ServicesSidebar';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import Footer from '../components/_App/Footer';

const ServiceDetails = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Services Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services Details" 
                imgClass="bg-23" 
            /> 

            <div className="services-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ServicesSidebar />
                        </div>

                        <div className="col-lg-8">
                            <ServiceDetailsContent />
                        </div>
                    </div>
                </div>
            </div>
  
            <Footer />
        </React.Fragment>
    );
}

export default ServiceDetails;