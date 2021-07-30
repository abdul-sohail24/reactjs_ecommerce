import React from "react";
import happy from "../src/images/happy.svg";
import "./home.css";

function HomePage() {
	return (
		<>
			<section id="header" className="">
				<div className="container-fluid nav_bg">
					<div className="row">
						<div className="col-12 mx-auto">
							{/* Text Area */}
							<div class="row">
								<div className="col-md-6 sm-12 order-sm-0 order-lg-0 textarea">
									<div className="main-text">
										Don't worry. <br /> We are here for <br /> every solution.
									</div>
									<br />
									<div className="sub-text">
										Tyger! Tyger! burning bright In the forests of the night,
										What immortal hand or eye Could frame thy fearful symmetry?
									</div>
									<div className="button_space">
										<button className="btn button_field col-sm-6 col-md-4 col-lg-3">
											Get Started
										</button>
										<button className="btn second_button_field col-sm-6 col-md-4 col-lg-3">
											Watch Video
										</button>
									</div>
								</div>

								{/* Image Area */}
								<div className="col-md-6 sm-12 order-sm-1 order-lg-1">
									<img src={happy} className="img-fluid" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomePage;
