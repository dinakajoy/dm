import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop:true,
    margin: 30,
    nav:false,
    mouseDrag: true,
    dots: false,
    autoplay: true,
    smartSpeed:1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:1,
        },
    }
};

const Sidebar = ({name, bio, picture}) => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="services-sidebar">
            <div className="services-img">
                <img src={picture} alt={name} />
                <h3>{name}</h3>
                <ul style={{listStyle:'none'}}>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                </ul>	
            </div>
            
            
            <div className="availability">
                <h3>
                    <i className="bx bx-time"></i>
                    Availability
                </h3>

                <ul>
                    <li>
                        Monday - Friday
                        <span>9.00am - 5.00pm</span>
                    </li>
                    <li>
                        Saturday
                        <span>11.00am - 3.00pm</span>
                    </li>
                </ul>
                <Link href="/contact-us">
                    <a className="default-btn mt-4">Request An Appointment</a>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;