import React from 'react';
import { useSelector } from 'react-redux'
import Navbar from '../components/_App/Navbar2';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Instructors = () => {
    const instructors = useSelector((state) => state.instructors.instructorsData)
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner 
                pageTitle="Instructors" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Instructors" 
                imgClass="bg-4" 
            /> 

            <div className="team-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet Our Instructors</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
                    </div>

                    <div className="row">
                        {instructors.length ? instructors.map(instructor => (
                            <div className="col-lg-4 col-sm-6" key={instructor.id}>
                                <Link href="/instructors/[id]" as={`/instructors/${instructor.id}`}>
                                <a>
                                    <div className="single-team">
                                        <div className="team-img">
                                            <img src={instructor.picture} alt={instructor.name} />
                                            <div className="team-content">
                                                <h3>{instructor.name}</h3>     
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                </Link>
                            </div>
                        )) : (
                            <h2>No Instructor Yet...</h2>
                        )}
                    </div>
                </div>
            </div>
  
            <Footer />
        </React.Fragment>
    );
}

export default Instructors;