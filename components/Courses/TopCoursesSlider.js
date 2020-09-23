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

Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

const TopCoursesSlider = ({ courses }) => {

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
                    {courses.length ? courses.map(course => (
                    <div className="single-project">
                        <div className="card myCard" style={{backgroundColor: '#dcfcfe'}}>
                            <img src={course.image} className="card-img-top" alt={course.title} />
                            <div className="card-body">
                                <p style={{margin:'0',padding:'0'}}>{course.type}</p>
                                <h4 className="card-title">{course.title}</h4>
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
                                    <span>NGN{course.price.format(2)}</span>
                                </div>
                                <p className="card-text">{course.description.substring(0, 80)}...</p>
                                <Link href="/courses/[id]" as={`/courses/${course.id}`}>
                                    <a className="btn btn-primary">Learn More</a>
                                </Link>
                            </div>
                        </div>
					</div>
                    )) : (
                        <h2>Empty...</h2>
                    )}

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

export default TopCoursesSlider;