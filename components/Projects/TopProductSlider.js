import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    nav:true,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: false,
    margin: 30,
    center: true,
    dots: false,
    smartSpeed:1500,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
        1200:{
            items:3,
        },
        1700:{
            items:4,
        }
    }
};

const TopProductSlider = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="project-area pt-100 pb-70">
			<div className="container-fluid p-0">
				<div className="section-title">
					<h2>Top Rated Courses</h2>
                    <Link href="/courses">
						<a style={{textDecoration:'underline'}}>View All Courses</a>
                    </Link>
				</div>

                {display ? <OwlCarousel 
                    className="project-wrap owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-project">
                        <div className="card myCard" style={{backgroundColor: '#dcfcfe'}}>
                            <img src="/img/projects/project1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p style={{margin:'0',padding:'0'}}>Programming</p>
                                <h4 className="card-title">JavaScript</h4>
                                <div className="course-data">
                                    <ul>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                    </ul>
                                    <span>NGN50,000</span>
                                </div>
                                <p className="card-text">JavaScript has become an essential web technology along with HTML and CSS, as most browsers implement JavaScript. Thus, you must learn JavaScript i...</p>
                                <Link href="/project-details">
                                    <a className="btn btn-primary">Learn More</a>
                                </Link>
                            </div>
                        </div>
					</div>

                    <div className="single-project">
                        <div className="card myCard" style={{backgroundColor: '#dcfcfe'}}>
                            <img src="/img/projects/project2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p style={{margin:'0',padding:'0'}}>Programming</p>
                                <h4 className="card-title">Object Oriented Programming</h4>
                                <div className="course-data">
                                    <ul>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                    </ul>
                                    <span>NGN50,000</span>
                                </div>
                                <p className="card-text">JavaScript is the lingua franca of the web, in this course we will explore the syntax behind JavaScript Object-Oriented Programming (OOP) Object...</p>
                                <Link href="/project-details">
                                    <a className="btn btn-primary">Learn More</a>
                                </Link>
                            </div>
                        </div>
					</div>

                    <div className="single-project">
                        <div className="card myCard" style={{backgroundColor: '#dcfcfe'}}>
                            <img src="/img/projects/project3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p style={{margin:'0',padding:'0'}}>Business Professionals</p>
                                <h4 className="card-title">Power Point</h4>
                                <div className="course-data">
                                    <ul>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                    </ul>
                                    <span>NGN50,000</span>
                                </div>
                                <p className="card-text">Microsoft PowerPoint is the irrefutable presentation program for people who want to create elegant slideshows. PowerPoint is normally used in an en...</p>
                                <Link href="/project-details">
                                    <a className="btn btn-primary">Learn More</a>
                                </Link>
                            </div>
                        </div>
					</div>

                    <div className="single-project">
                        <div className="card myCard" style={{backgroundColor: '#dcfcfe'}}>
                            <img src="/img/projects/project4.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p style={{margin:'0',padding:'0'}}>Network &amp; Security</p>
                                <h4 className="card-title">Ethical Hacking</h4>
                                <div className="course-data">
                                    <ul>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                    </ul>
                                    <span>NGN50,000</span>
                                </div>
                                <p className="card-text">Ethical hacking is a process of identifying vulnerabilities in a company’s network, using penetrating tools, and then addressing these issues, to p...</p>
                                <Link href="/project-details">
                                    <a className="btn btn-primary">Learn More</a>
                                </Link>
                            </div>
                        </div>
					</div>

                    <div className="single-project">
                        <div className="card myCard" style={{backgroundColor: '#dcfcfe'}}>
                            <img src="/img/projects/project5.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p style={{margin:'0',padding:'0'}}>Business Professionals</p>
                                <h4 className="card-title">MicroSoft Office</h4>
                                <div className="course-data">
                                    <ul>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                        <li>
                                            <i className="bx bxs-star"></i>
                                        </li>
                                    </ul>
                                    <span>NGN50,000</span>
                                </div>
                                <p className="card-text">Microsoft® Word is designed to help you move smoothly through the task of creating professional-looking documents. It is considered a very importan...</p>
                                <Link href="/project-details">
                                    <a className="btn btn-primary">Learn More</a>
                                </Link>
                            </div>
                        </div>
					</div>

                    {/* <div class="dropdown">
                        <button class="dropbtn">Right</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> */}
                </OwlCarousel> : ''}
			</div>
		</section>
    )
}

export default TopProductSlider;