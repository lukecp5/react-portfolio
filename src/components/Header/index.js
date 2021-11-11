import React from "react";
import Navigation from "../Navigation";
import {Container, Row, Col} from "react-bootstrap";
import "./header.css";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
				<h2>Luke's React Portfolio</h2>
			</div>
			<div>
				<Navigation
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Navigation>
			</div>
		</header>
	);
}

export default Header;