// LandingPage.jsx

import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";

function LandingPage() {
	return (
		<div>
			<NavBar />
			<h1>Welcome to the Landing Page!</h1>
			<Button />
			<Footer />
		</div>
	);
}

export default LandingPage;
