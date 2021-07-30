import React from "react";
import happy from "../src/images/happy.svg";
import "./home.css";
import { FaVideo } from "react-icons/fa";

function HomePage() {
	return (
		<>
			<section id="header" className="">
				<div className="container-fluid nav_bg">
					<div className="row">
						<div className="col-12 mx-auto">
							{/* Text Area */}
							<div className="row">
								<div className="col-md-7 sm-12 order-sm-0 order-lg-0 textarea">
									<div className="main-text">
										Don't worry. <br /> We are here for <br /> every solution.
									</div>
									<br />
									<div className="sub-text">
										Now is the winter of our discontent Made glorious summer by
										this sun of York; And all the clouds that lour'd upon our
										house In the deep bosom of the ocean buried.
									</div>
									<div className="button_space">
										<button className="btn button_field col-sm-6 col-md-4 col-lg-3">
											Get Started
										</button>
										<button className="btn second_button_field col-sm-6 col-md-4 col-lg-3">
											<FaVideo />
											<div className="">Watch Video</div>
										</button>
									</div>
									<div className="row companies">
										<div className="col-md-3 col-xs-6">
											<h5>Google</h5>
										</div>
										<div className="col-md-3 col-xs-6">
											<h5>Google</h5>
										</div>
										<div className="col-md-3 col-xs-6">
											<h5>Amazon</h5>
										</div>
										<div className="col-md-3 col-xs-6">
											<h5>Google</h5>
										</div>
									</div>
								</div>

								{/* Image Area */}
								<div className="col-md-5 sm-12 order-sm-1 order-lg-1 imagearea">
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
