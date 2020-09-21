import React from 'react';
import Link from 'next/link';

const PageBanner = ({name, image="/img/instructorPage/banner.jpg"}) => {
    return (
        <div className="page-title-area myBanner" style={{backgroundImage:`url(${image})`}}>
            <div className="container">
                <div className="page-title-content">
                    <h2 style={{color: '#ec3239'}}>{name}</h2>
                    <ul>
                        <li>
                            <Link href="/">
                                <a style={{color: '#ec3239'}}>Home</a>
                            </Link>
                        </li>
                        <li className="active">{name}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;