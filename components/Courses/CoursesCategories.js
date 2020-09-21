import React from 'react';
import Link from 'next/link';

const CoursesCategories = () => {
  return (
    <div className="services-area pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Courses Categories</span>
					<h2>Mordern Technologies</h2>
					<p>Loctech IT Training Institute teaches tomorrow's Information Technology today, using best practices.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<Link href="/[category]" as="big-data">
								<a>
									<img src="/img/services/big-data.jpg" alt="Big Data" />
									<div className="services-content">
										<h3>Big Data</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur.</p>
											Read More <i className="bx bx-plus"></i>
										<span className="flaticon-couch"></span>
									</div>
								</a>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<Link href="/[category]" as="business-professionals">
								<a>
									<img src="/img/services/business-professional.jpg" alt="Business Professionals" />
									<div className="services-content">
										<h3>Business Professionals</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur.</p>
											Read More <i className="bx bx-plus"></i>
										<span className="flaticon-windows"></span>
									</div>
								</a>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<Link href="/[category]" as="design-and-media">
								<a>
									<img src="/img/services/design.jpg" alt="Design and Media" />
									<div className="services-content">
										<h3>Design &amp; Media</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur.</p>
											Read More <i className="bx bx-plus"></i>
										<span className="flaticon-house"></span>
									</div>
								</a>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<Link href="/[category]" as="programming">
								<a>
									<img src="/img/services/programming.jpg" alt="Programming" />
									<div className="services-content">
										<h3>Programming</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur.</p>
											Read More <i className="bx bx-plus"></i>
										<span className="flaticon-factory"></span>
									</div>
								</a>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<Link href="/[category]" as="network-and-security">
								<a>
									<img src="/img/services/network.jpg" alt="Network and Security" />
									<div className="services-content">
										<h3>Network &amp; Security</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur.</p>
											Read More <i className="bx bx-plus"></i>
										<span className="flaticon-hospital"></span>
									</div>
								</a>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<Link href="/[category]" as="others">
								<a>
									<img src="/img/services/others.jpg" alt="Other Courses" />
									<div className="services-content">
										<h3>Others</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolor sit amet, consectetur.</p>
											Read More <i className="bx bx-plus"></i>
										<span className="flaticon-toilet"></span>
									</div>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>	
  )
}

export default CoursesCategories;