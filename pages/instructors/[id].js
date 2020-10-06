import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from '../../components/_App/Navbar2';
import PageBanner from '../../components/Instructors/PageBanner';
import Sidebar from '../../components/Instructors/Sidebar';
import DetailsContent from '../../components/Instructors/DetailsContent';
import Footer from '../../components/_App/Footer';

const InstructorDetails = () => {
  const router = useRouter();
  const instructors = useSelector((state) => state.instructors.instructorsData);
  const id = router.query.id;
  const instructor = instructors.find(i => i.id === id);
  return (
    <React.Fragment>
      <Navbar />
        <PageBanner {...instructor} />

            <div className="services-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Sidebar {...instructor}/>
                        </div>

                        <div className="col-lg-8">
                            <DetailsContent {...instructor} />
                        </div>
                    </div>
                </div>
            </div>
  
            <Footer />
        </React.Fragment>
    );
}

export default InstructorDetails;