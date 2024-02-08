import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/HER MÅ ENDRES">Poster One</Link>
				</li>
				<li>
					<Link to="/PosterTwo">Poster Two</Link>
				</li>
				<li>
					<Link to="/PosterThree">Poster Three</Link>
				</li>
				<li>
					<Link to="/Anders">Anders</Link>
				</li>
				<li>
					<Link to="/MyDogs">My dogs</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
