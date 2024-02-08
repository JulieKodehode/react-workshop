import React from "react";

function Button() {
	// Dette er CSS
	const buttonStyle = {
		backgroundColor: "red",
		color: "black",
		border: "5px solid black",
	};

	return (
		// Dette er HTML
		<div>
			<button style={buttonStyle}>Click me</button>
		</div>
	);
}

export default Button;
