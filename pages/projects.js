import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AllProjects from '../components/Projects/AllProjects';
import Footer from '../components/_App/Footer';

const Projects = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Projects" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Projects" 
                imgClass="bg-21" 
            /> 
            <AllProjects />
            <Footer />
        </React.Fragment>
    );
}

export default Projects;