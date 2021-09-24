import React from 'react';
import './coursedetails.css';

const CourseDetail = () => {
	return (
		<div>
			<div className="detail-container">
				<div className="row">
					<div className="col-md-4">
						<div className="one">
							<h2>Course Price</h2>
							<hr />
						</div>
						<div className="two">
							<ul>
							<li>Free Trial</li>
							<li>Free Trial</li>
							<li>Free Trial</li>
							</ul>
						</div>
						<hr />
						<div className="three">
							<ul>
								<li>
									<p>234 Students</p>
								</li>
								<li>
									<p>Duration: 2hrs 30mins</p>
								</li>
								<li>
									<p>14 Lectures</p>
								</li>
								<li>
									<p>14 Lectures</p>
								</li>
								<li>
									<p>14 Lectures</p>
								</li>
							</ul>
						</div>
						<hr />
						<div className="four">
							<h3>Featured Articles</h3>
							
						</div>
					</div>
					<div className="col-md-8">
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseDetail;
