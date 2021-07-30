import React from "react";
// Importing Bootstrap Modules
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "react-router-dom";
import HomePage from "./Home";
import Navigationbar from "./Navbar";
import { BrowserRouter as Routing } from "react-router-dom";

function App() {
	return (
		<Routing>
			{/* NavBar */}
			<Navigationbar />
			{/* Home */}
			<HomePage />
		</Routing>
	);
}

export default App;
