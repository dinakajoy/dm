import React from 'react';
import Link from 'next/link';

const PageBanner = ({topic, picture}) => {
    return (
        <div className="page-title-area myBanner" style={{backgroundImage:`url(${picture})`}}>
            <div className="container">
                <div className="page-title-content">
                    <h2 style={{color: '#ec3239'}}>{topic}</h2>
                    <ul>
                        <li>
                            <Link href="/">
                                <a style={{color: '#ec3239'}}>Home</a>
                            </Link>
                        </li>
                        <li className="active">{topic}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;