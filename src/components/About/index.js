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
			<Row>
				<Col xs={8} sm={6} md={6} lg={3} className="center mx-auto mb-lg-5 mb-m-4 mb-3">
					<img
						src="https://github.com/lukecp5/react-portfolio/blob/main/src/assets/images/lp-avatar-thumb.jpg?raw=true"
						alt="Me"
						className="img-fluid rounded-circle"
					/>
				</Col>

				<Col xs={12} sm={6} md={6} className="text-center my-auto" id="about">
					<p>
						My name is Luke Poirrier, and I currently reside in North Georgia. I have over 10 years of
						experience in various types of coding. I am currently enrolled at a coding boot camp at the
						Georgia Institute of Technology(GA Tech) to solidify my foundational knowledge of development.
					</p>
					<p>
						I have experience in front-end web development, working with technologies like AJAX, Bootstrap,
						CSS, HTML, JavaScript, JSON, Materialize.css, Node.JS, and various other modern development
						media.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
