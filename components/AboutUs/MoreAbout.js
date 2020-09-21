import React from 'react';
import Link from 'next/link';

const MoreAbout = () => {
    return (
        <div className="important-area">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6 ptb-100">
						<div className="important-content">
							<span>More About Loctech</span>
							<h2>Loctech IT Training Institute</h2>
							<p>Our learning programs, whether designed for a global organization or an individual professional, help businesses close skills gaps and foster an environment of continuous talent development.</p>

							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto cupiditate eius laboriosam doloremque, accusamus ex adipisci, accusantium incidunt illo ratione, tempore eum ipsum explicabo aliquam iusto sit! Nostrum, at commodi.</p>

              <Link href="/faq">
                <a className="default-btn">Have Questions?</a>
              </Link>
						</div>
					</div>

					<div className="col-lg-6 pr-0">
						<div className="important-img">
							<div className="counter-wrap">
								<div className="row">
									<div className="col-lg-6 col-sm-6">
										<div className="single-counter">
											<h2>
												5
												<span className="target">+</span>
											</h2>
											<p>Years</p>
										</div>
									</div>
				
									<div className="col-lg-6 col-sm-6">
										<div className="single-counter">
											<h2>
												384 
												<span className="target">+</span>
											</h2>
											<p>Happy Customers</p>
										</div>
									</div>
				
									<div className="col-lg-6 col-sm-6">
										<div className="single-counter mb-0">
											<h2>
                        258
												<span className="traget">+</span>
											</h2>
											<p>Successful Projects</p>
										</div>
									</div>
				
									<div className="col-lg-6 col-sm-6">
										<div className="single-counter mb-0">
											<h2>
                        50
												<span className="traget">+</span>
											</h2>
											<p>Expert Staff</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default MoreAbout;