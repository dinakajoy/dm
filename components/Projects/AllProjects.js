import React from 'react';
import Link from 'next/link';

const AllProjects = () => {
    return (
        <div className="project-area project-page ptb-100">
			<div className="container-fluid">
				<div className="section-title">
					<h2>Our All Projects</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia, quae minus vero vel reprehenderit, aliquid alias delectus autem.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-project">
                            <Link href="/project-details">
							    <a><img src="/img/projects/project1.jpg" alt="Image" /></a>
                            </Link>
							<div className="project-content">
								<h3>
                                    <Link href="/project-details">
                                        <a>Window Cleaning</a>
                                    </Link>
								</h3>
								<span>Office</span>
                                
                                <Link href="/project-details">
                                    <a><i className='bx bx-chevron-right'></i></a>
                                </Link>
							</div>
						</div>
					</div>
				
					<div className="col-lg-4 col-sm-6">
						<div className="single-project">
                            <Link href="/project-details">
							    <a><img src="/img/projects/project2.jpg" alt="Image" /></a>
                            </Link>
							<div className="project-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Kitchen Cleaning</a>
                                    </Link>
								</h3>
								<span>Home</span>
								
                                <Link href="/project-details">
                                    <a><i className='bx bx-chevron-right'></i></a>
                                </Link>
							</div>
						</div>
					</div>
					
					<div className="col-lg-4 col-sm-6">
						<div className="single-project">
                            <Link href="/project-details">
							    <a><img src="/img/projects/project3.jpg" alt="Image" /></a>
                            </Link>
							<div className="project-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Commercial cleaning</a>
                                    </Link>
								</h3>

								<span>Office Space</span>
								
                                <Link href="/project-details">
                                    <a><i className='bx bx-chevron-right'></i></a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-project">
                            <Link href="/project-details">
							    <a><img src="/img/projects/project4.jpg" alt="Image" /></a>
                            </Link>
							<div className="project-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Hand Sanitizer</a>
                                    </Link>
								</h3>

								<span>Self Protect</span>
								
                                <Link href="/project-details">
                                    <a><i className='bx bx-chevron-right'></i></a>
                                </Link>
							</div>
						</div>
					</div>
				
					<div className="col-lg-4 col-sm-6">
						<div className="single-project">
                            <Link href="/project-details">
							    <a><img src="/img/projects/project5.jpg" alt="Image" /></a>
                            </Link>
							<div className="project-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>Floor Cleaning</a>
                                    </Link>
								</h3>

								<span>Hospital</span>
								
                                <Link href="/project-details">
                                    <a><i className='bx bx-chevron-right'></i></a>
                                </Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-project">
                            <Link href="/project-details">
							    <a><img src="/img/projects/project6.jpg" alt="Image" /></a>
                            </Link>
							<div className="project-content">
                                <h3>
                                    <Link href="/project-details">
                                        <a>House Cleaning</a>
                                    </Link>
								</h3>

								<span>House</span>
								
                                <Link href="/project-details">
                                    <a><i className='bx bx-chevron-right'></i></a>
                                </Link>
							</div>
						</div>
					</div>

					{/* Pagination */}
                    <div className="col-lg-12">
                        <div className="page-navigation-area text-center">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link page-links">
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li className="page-item active">
                                    <Link href="#">
                                        <a className="page-link">1</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">2</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">3</a>
                                    </Link>
                                </li>
                                <li className="page-item">
                                    <Link href="#">
                                        <a className="page-link">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
				</div>
			</div>
		</div>
    )
}

export default AllProjects;