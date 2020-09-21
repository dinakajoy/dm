import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Link from '../../utils/ActiveLink';
import TopHeader from './TopHeader';

const NavbarTwo = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.addedItems)
    const collapsed = useSelector((state) => state.collapsedState)
    
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
                
                <div id="navbar" className="navbar-area nav-area-three">
                    <div className="main-nav">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <Link href="/">
                                    <a onClick={toggleNavbar} className="navbar-brand">
                                        <img src="/img/logo2.png" alt="logo" />
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
                                            <Link href="#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Home <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Home One</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index2" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Home Two</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/index3" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Home Three</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-us" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Pages <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/team" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Team</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/pricing" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Pricing</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/testimonials" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#">
                                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                                            Projects <i className='bx bx-chevron-down'></i>
                                                        </a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/projects" activeClassName="active">
                                                                <a onClick={toggleNavbar} className="nav-link">Projects</a>
                                                            </Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link href="/project-details" activeClassName="active">
                                                                <a onClick={toggleNavbar} className="nav-link">Project Details</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/appointment" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Appointment</a>
                                                    </Link>
                                                </li>
    
                                                <li className="nav-item">
                                                    <Link href="#">
                                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                                            User <i className='bx bx-chevron-down'></i>
                                                        </a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/sign-up" activeClassName="active">
                                                                <a onClick={toggleNavbar} className="nav-link">Sign Up</a>
                                                            </Link>
                                                        </li> 

                                                        <li className="nav-item">
                                                            <Link href="/sign-in" activeClassName="active">
                                                                <a onClick={toggleNavbar} className="nav-link">Sign In</a>
                                                            </Link>
                                                        </li> 

                                                        <li className="nav-item">
                                                            <Link href="/recover-password" activeClassName="active">
                                                                <a onClick={toggleNavbar} className="nav-link">Recover Password</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/faq" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">FAQ</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/coming-soon" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/terms-conditions" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Terms & Conditions</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/privacy-policy" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/404" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Services <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/services-style-one" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style One</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/services-style-two" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style Two</a>
                                                    </Link>
                                                </li>
    
                                                <li className="nav-item">
                                                    <Link href="/service-details" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Shop <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>
                                            
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/shop" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Shop</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/cart" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Cart</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/checkout" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Checkout</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/product/5f0cc6063ab06e21b560184b" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Product Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Blog <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog-grid" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Blog Grid</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-left-sidebar" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Blog Left Sidebar</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-right-sidebar" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-details" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                
                                    <div className="others-option">
                                        <div className="cart-icon">
                                            <Link href="/cart">
                                                <a>
                                                    <i className='bx bx-cart'></i>
                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </div>	
  
                                        <div className="get-quote">
                                            <Link href="#">
                                                <a className="default-btn">Get A Quote</a>
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
                                                <span>{products.length}</span>
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

export default NavbarTwo;
