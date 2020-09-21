import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PageBanner from '../components/Common/PageBanner';
import CoursesCard from '../components/Courses/CoursesCard';
import Navbar from '../components/_App/Navbar2';
import Footer from '../components/_App/Footer';



const BlogDetails = () => {
    const router = useRouter();
    const courses = useSelector((state) => state.courses.coursesData);
    const category = router.query.category;
    const coursesCategory = courses.filter(course => course.category === category);

    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle={category}
                homePageUrl="/" 
                homePageText="Home" 
                activePageText={category}
                imgClass="bg-24" 
            /> 
            <CoursesCard courses={coursesCategory} />
            <Footer />
        </React.Fragment>
    );
}

export default BlogDetails;