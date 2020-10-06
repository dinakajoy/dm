import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';

const Navbar = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.addedItems);
    const collapsed = useSelector((state) => state.collapsedState);
    const caourseCategories = [
        "programming", "network-and-security", "design-and-media", "business-professionals", "big-data", "other"
    ];
    
    const toggleNavbar = () => {
        dispatch({
            type: 'COLLAPSED_STATE',
        })
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })
 
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <header className="header-area fixed-top">
                {/* TopHeader */}
                <TopHeader />
                
                <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <Link href="/">
                                    <a onClick={toggleNavbar} className="navbar-brand">
                                        <img src="/img/logo.png" alt="Loctech logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Home</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-us" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Courses <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="#">
                                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                                            By Category <i className='bx bx-chevron-down'></i>
                                                        </a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        {caourseCategories.map(caourseCategory => (
                                                            <li className="nav-item">
                                                                <Link href="/[category]" as={caourseCategory} activeClassName="active">
                                                                    <a onClick={toggleNavbar} className="nav-link">{caourseCategory}</a>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#">
                                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                                            By Plan <i className='bx bx-chevron-down'></i>
                                                        </a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/courses" activeClassName="active">
                                                                <a onClick={toggleNavbar} className="nav-link">Free</a>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link href="/courses" activeClassName="active">
                                                                <a onClick={toggleNavbar} className="nav-link">Paid</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/instructors" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Instructors</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/contact-us" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Contact Us</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/admin-dashboard" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Admin Dashboard</a>
                                            </Link>
                                        </li>
                                    </ul>
                                
                                    <div className="others-option">
                                        <div className="cart-icon">
                                            <Link href="/cart">
                                                <a>
                                                    <i className='bx bx-cart'></i>
                                                    <span>{courses.length}</span>
                                                </a>
                                            </Link>
                                        </div>	
  
                                        <div className="get-quote">
                                            <Link href="/sign-in">
                                                <a className="default-btn">Signin</a>
                                            </Link>
                                        </div>	
                                    </div>
                                </div>

                                {/* For Mobile Device */}
                                <div className="mobile-cart-icon">
                                    <div className="cart-icon">
                                        <Link href="/cart">
                                            <a>
                                                <i className='bx bx-cart'></i>
                                                <span>{courses.length}</span>
                                            </a>
                                        </Link>
                                    </div>	
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Navbar;
