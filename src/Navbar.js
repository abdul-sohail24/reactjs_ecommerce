import React from "react";
import "./index.js";
import logo from "./images/logo.svg";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navigationbar = () => {
	return (
		<>
			<div className="container-fluid nav_bg">
				<div className="row">
					<div className="col-12 mx-auto">
						<nav className="navbar navbar-expand-md navbar-light bg-light">
							<div className="container-fluid">
								<button
									className="navbar-toggler "
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="navbar-toggler-icon"></span>
								</button>
								<img src={logo} alt="" />
								<div
									className="collapse navbar-collapse"
									id="navbarSupportedContent"
								>
									{/* <ul className="nav-link">
										<NavLink
											className="nav-link active"
											aria-current="page"
											to="/"
										>
											<img src={logo} alt="" />
										</NavLink>
									</ul> */}
									<ul className="navbar-nav mb-2 mb-lg-0 nav_tabs">
										<li className="nav-item">
											<NavLink
												className="nav-link active nav_links"
												aria-current="page"
												to="/"
											>
												Integration
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className="nav-link active nav_links"
												aria-current="page"
												to="/"
											>
												Pricing
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className="nav-link active nav_links"
												aria-current="page"
												to="/"
											>
												Blog
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className="nav-link active nav_links"
												aria-current="page"
												to="/"
											>
												About Us
											</NavLink>
										</li>
									</ul>
									<div className="navbar-nav ms-auto">
										<button className="btnn button">Get early access</button>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navigationbar;
