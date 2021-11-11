import React from "react";
import {Container, Row, Col} from "react-bootstrap";

function Portfolio() {
	return (
		<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid">
					<Container>
					<h1 className="display-4 text-center">Portfolio</h1>
					<p className="lead responsive text-center">
						Here are some of my full stack applications built with React, Node, Express, MongoDB, and Bootstrap.
					</p>
					</Container>
					</div>
				
			</Row>
			<Row>
				<Col>

				</Col>
			</Row>
			<Row>
				<Col xs={12} sm={6} md={4}></Col>
				<Col xs={12} sm={6} md={4}></Col>
				<Col xs={12} sm={6} md={4}></Col>
			</Row>
		</Container>
	);
}

export default Portfolio;
