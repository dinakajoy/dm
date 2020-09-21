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

const ServicesSidebar = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="services-sidebar">
            <div className="services-img">
                <img src="/img/services/service1.jpg" alt="Image" />

                <ul>
                    <li>
                        <a href="#" target="_blank">
                            <i className="bx bxl-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i className="bx bxl-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i className="bx bxl-pinterest-alt"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i className="bx bxl-youtube"></i>
                        </a>
                    </li>
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
                        <span>9.00 - 20.00</span>
                    </li>
                    <li>
                        Saturday
                        <span>10.00 - 16.00</span>
                    </li>
                    <li>
                        Sunday
                        <span>9.30 - 18.00</span>
                    </li>
                    <li>
                        Friday
                        <span>Closed</span>
                    </li>
                </ul>

                <Link href="/appointment">
                    <a className="default-btn mt-4">Request An Appointment</a>
                </Link>
            </div>

            <div className="client-area services-feedback">
                {display ? <OwlCarousel 
                    className="client-wrap-two owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-client">
                        <img src="/img/client/client1.jpg" alt="img" />

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>	

                        <h3>Steven Jony</h3>
                        <span>CEO of Company</span>
                    </div>
                    
                    <div className="single-client">
                        <img src="/img/client/client2.jpg" alt="img" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.</p>

                        <ul>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                            <li><i className="bx bxs-star"></i></li>
                        </ul>	

                        <h3>Omit Jacson</h3>
                        <span>Company Founder</span>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default ServicesSidebar;