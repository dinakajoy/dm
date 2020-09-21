import React from 'react';
import Link from 'next/link';

const PageBanner = ({title, image}) => {
    return (
        <div className="page-title-area myBanner" style={{backgroundImage:`url(${image})`}}>
            <div className="container">
                <div className="page-title-content">
                    <h2 style={{color: '#ec3239'}}>{title}</h2>
                    <ul>
                        <li>
                            <Link href="/">
                                <a style={{color: '#ec3239'}}>Home</a>
                            </Link>
                        </li>
                        <li className="active">{title}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;