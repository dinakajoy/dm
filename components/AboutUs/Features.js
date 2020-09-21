import React from 'react';

const Features = () => {
  return (
    <div className="feature-three pb-70" style={{margin: '80px auto 20px'}}>
			<div className="container">
				<div className="section-title">
					<span>Our Feature</span>
					<h2>Your Comfort Depends on Us</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-feature-three">
							<span className="flaticon-broom"></span>
							<h3>Our Mission</h3>
							<p>To help individuals and businesses build technical competence to transform their lives</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-feature-three">
							<span className="flaticon-premium-quality"></span>
							<h3>Our Vision</h3>
							<p>To become the biggest information technology training institute in Nigeria</p>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-feature-three">
							<span className="flaticon-hand-wash-1"></span>
							<h3>Our Core Values</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Features;