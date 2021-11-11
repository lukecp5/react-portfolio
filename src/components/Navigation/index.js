import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Collapse } from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function Navigation(props) {
	const {currentTab, setCurrentTab} = props;

	return (
		<Container fluid className="p-0">
			<Navbar
				bg="dark"
				variant="dark"
				className="p-0"
				id="navbar-collapse-id"
				expand="md"
				fill
				activeKey={currentTab}
				justified
			>
			</Navbar>
		</Container>
	);
}

export default Navigation;
