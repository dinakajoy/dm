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

const InstructorsSlider = ({ instructors }) => {

    const [display, setDisplay] = React.useState(false);
    const [num, setNum] = React.useState(1);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <section className="project-area pt-100 pb-70">
			<div className="container-fluid p-0">
				<div className="section-title">
					<h2>Top Rating Instructors</h2>
                    <Link href="/instructors">
						<a style={{textDecoration:'underline'}}>View All Instructors</a>
                    </Link>
				</div>

                {display ? <OwlCarousel 
                    className="project-wrap owl-carousel owl-theme"
                    {...options}
                > 
                    {instructors.map(instructor => (
                    <div className="single-project" key={instructor.id}>
                        <Link href="/instructors/[id]" as={`/instructors/${instructor.id}`}>
                            <a>
                                <div className="single-process-three">
                                    <img src={instructor.picture} alt={instructor.name} style={{margin:'auto'}}/>
                                    <br />
                                    <h3>{instructor.name}</h3>
                                    {/* <span>0{num}</span> */}
                                </div>
                            </a>
                        </Link>
					</div>
                    ))}
                </OwlCarousel> : ''}
			</div>
		</section>
    )
}

export default InstructorsSlider;