import React from 'react';
import Navbar from '../components/_App/Navbar2';
import { useSelector } from 'react-redux'
import PageBanner from '../components/Common/PageBanner';
import CoursesCard from '../components/Courses/CoursesCard';
import Footer from '../components/_App/Footer';

const Courses = () => {
    const courses = useSelector((state) => state.courses.coursesData);
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Courses"
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Courses" 
                imgClass="bg-24" 
            /> 
            <CoursesCard courses={courses} />
            <Footer />
        </React.Fragment>
    );
}

export default Courses;