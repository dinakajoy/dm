import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/_App/Navbar2';
import HeroSlider from '../components/DefaultHome/HeroSlider';
import CoursesCategories from '../components/Courses/CoursesCategories';
import TopCoursesSlider from '../components/Courses/TopCoursesSlider';
import Banner from '../components/DefaultHome/Banner';
import InstructorsSlider from '../components/Instructors/InstructorsSlider';
import Footer from '../components/_App/Footer';
 
const Index = () => {
    const instructors = useSelector((state) => state.instructors.instructorsData);
    const courses = useSelector((state) => state.courses.coursesData);
    return (
        <React.Fragment>
            <Navbar />
            <HeroSlider />
            <br />
            <CoursesCategories />
            <TopCoursesSlider courses={courses.slice(0, 7)} />
            <Banner />
            <InstructorsSlider instructors={instructors.slice(0, 5)} />
            <Footer />
        </React.Fragment>
    );
}

export default Index;