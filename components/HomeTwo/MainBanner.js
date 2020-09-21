import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const MainBanner = () => {
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <div className="main-banner-area jarallax">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-9">
                                    <div className="banner-text">
                                        <h1>We Provide COVID 19 Disinfecting Services</h1>
                                            
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>

                                        <div className="banner-btn">
                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Contact Us
                                                </a>
                                            </Link>

                                            <Link href="/about-us">
                                                <a className="default-btn active">
                                                    Learn More
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3">
                                    <div className="video-btn-animat one">
                                        <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="bx bx-play"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                    channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment>
    )
}

export default MainBanner;