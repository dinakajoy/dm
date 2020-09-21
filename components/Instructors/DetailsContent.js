import React from 'react';
import Link from 'next/link';

const DetailsContent = ({name, bio}) => {
    return (
        <div className="services-detailss">
            <div className="services-history">
                <h2>{name}</h2>

                <p>{bio}</p>
            
                <div className="row borders">
                    <div className="col-lg-3 pl-0">
                        <div className="left-title">
                            <h3>Skills</h3>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="right-title">
                            <ul>
                                <li>
                                    <i className="bx bxs-hand-right"></i>
                                    Web Development
                                </li>
                                <li>
                                    <i className="bx bxs-hand-right"></i>
                                    Networking
                                </li>
                                <li>
                                    <i className="bx bxs-hand-right"></i>
                                    Cyber-Security
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row borders">
                    <div className="col-lg-3 pl-0">
                        <div className="left-title">
                            <h3>Experience</h3>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="right-title">
                            <ul>
                                <li>
                                    <i className="bx bxs-hand-right"></i>
                                    15 years of Experience
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsContent;