import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./about.css";
function About() {
	return (
		<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid mb-0">
					<Container>
						<h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">About Me</h1>
					</Container>
				</div>
			</Row>
			{/* Image of me and a paragraph next to the picture built in Bootstrap */}
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<img src={require("../../assets/images/lp-avatar.jpg")} alt="Me" className="img-fluid rounded-circle" />
					</div>
					<div className="col-md-6">
						<p>
							About Me Section. About Me Section. About Me Section. About Me Section. About Me Section.
							About Me Section. About Me Section. About Me Section. About Me Section. About Me Section.
							About Me Section. About Me Section. About Me Section. About Me Section. About Me Section.
							About Me Section. About Me Section.
						</p>
						<p>
							About Me Section. About Me Section. About Me Section. About Me Section. About Me Section.
							About Me Section. About Me Section. About Me Section. About Me Section. About Me Section.
							About Me Section. About Me Section. About Me Section. About Me Section. About Me Section.
							About Me Section. About Me Section.
						</p>
		</Container>
	);
}

export default About;
