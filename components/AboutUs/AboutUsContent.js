import React from 'react';

const AboutUsContent = () => {
    return (
        <div className="about-area pt-100 pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<div className="about-content">
							<span>About Us</span>
							<h2>World's leading learning services and professional development solutions provider</h2>
							<p>We deliver learning solutions to support customers as they adapt to key business transformations and technological advancements that drive the way that organizations around the world differentiate themselves and thrive.</p>
							<ul>
								<li>
									<i className="flaticon-checked"></i>
									Classroom Training
								</li>
								<li>
									<i className="flaticon-checked"></i>
									One-on-One Training
								</li>
								<li>
									<i className="flaticon-checked"></i>
									Corporate Training
								</li>
								<li>
									<i className="flaticon-checked"></i>
									Online Training
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="about-img">
							<img src="/img/aboutPage/about-img.jpg" alt="Image" />
							<div className="about-child">
								<img src="/img/aboutPage/about-loctech-sm.png" alt="Image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default AboutUsContent;