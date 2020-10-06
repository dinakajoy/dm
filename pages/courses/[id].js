import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import Navbar from '../../components/_App/Navbar2';
import PageBanner from '../../components/CourseDetails/PageBanner';
import ProductsDetailsTab from '../../components/CourseDetails/ProductsDetailsTab';
import ProductDetailsContent from '../../components/CourseDetails/ProductDetailsContent';
import Footer from '../../components/_App/Footer';

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const courses = useSelector((state) => state.courses.coursesData);
    const course = courses.find(c => c.id === id);
    console.log(id);
    console.log(course);
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner  {...course}/> 
 
            <div className="product-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <ProductDetailsContent course={course} />

                        {/* <div className="col-lg-12 col-md-12">
                            <ProductsDetailsTab {...course} />
                        </div> */}
                    </div>
                </div>
            </div>
    
            <Footer />
        </React.Fragment>
    );
}

export default ProductDetails;
