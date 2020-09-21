import React from 'react';
import Link from 'next/link';

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6">
                        <ul className="header-content-left">
                            <li>
                                <a href="mailto:info@loctechng.com">
                                    <i className="bx bx-envelope"></i>
                                    Email: info@loctechng.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+2347038885466">
                                    <i className="bx bx-phone-call"></i>
                                    Call Us: +234 703 888 5466
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <ul className="header-content-right">
                            <li>
                                Opening Hour: 9:00 am - 5:00 pm
                            </li>
                            <li>
                                <Link href="/sign-in">
                                    <i class='bx bx-search-alt'></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;