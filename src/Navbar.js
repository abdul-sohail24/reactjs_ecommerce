import React from "react";
import "./index.js";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navigationbar = () => {
	return (
		<>
			<div className="container-fluid nav_bg">
				<div className="row">
					<div className="col-10 mx-auto">
						<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
								<div
									className="collapse navbar-collapse"
									id="navbarSupportedContent"
								>
									<ul className="navbar-nav mr-auto mb-2 mb-lg-0">
										<li className="nav-item">
											<NavLink
												className="nav-link active"
												aria-current="page"
												to="/"
											>
												Integration
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className="nav-link active"
												aria-current="page"
												to="/"
											>
												Pricing
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className="nav-link active"
												aria-current="page"
												to="/"
											>
												Blog
											</NavLink>
										</li>
										<li className="nav-item">
											<NavLink
												className="nav-link active"
												aria-current="page"
												to="/"
											>
												About Us
											</NavLink>
										</li>
									</ul>
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
