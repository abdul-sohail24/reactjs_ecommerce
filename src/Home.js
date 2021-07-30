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
							<div className="row">
								{/* Text Area */}
								<div className="col-md-7 sm-12 order-2 order-md-1 textarea">
									<div className="main-text">
										Don't worry. <br /> We are here for <br /> every solution.
									</div>
									<br />
									<div className="sub-text">
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts. Separated they live in Bookmarksgrove right at the
										coast of the Semantics, a large language ocean.
									</div>
									{/* Buttons */}
									<div className="button_space">
										<button className="btn button_field col-xs-3 col-md-6 col-lg-3">
											Get Started
										</button>
										<button className="btn second_button_field col-xs-3 col-md-6 col-lg-3">
											<div className="">
												<FaVideo />
												&nbsp; Watch Video
											</div>
										</button>
									</div>
									{/* Companies */}
									<div className="container-fluid">
										<div className="row companies">
											<div className="col-lg-4 col-6 ">
												<h5>Google</h5>
											</div>
											<div className="col-lg-4 col-6">
												<h5>Microsoft</h5>
											</div>
											<div className="col-lg-4 col-6">
												<h5>Uber</h5>
											</div>
											<div className="col-lg-4 col-6">
												<h5>Ola</h5>
											</div>
											<div className="col-lg-4 col-6">
												<h5>Flipkart</h5>
											</div>
											<div className="col-lg-4 col-6">
												<h5>Amazon</h5>
											</div>
										</div>
									</div>
								</div>

								{/* Image Area */}
								<div className="col-md-5 sm-12 order-1 order-md-2 imagearea">
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
