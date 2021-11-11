import React from "react";
import { Container, Row, Col, CardGroup } from "react-bootstrap";
import portfolioProjects from "../../projects";
import Project from "../Project";

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
			<Container fluid="md">
				<CardGroup>
					<Row className="mb-md-5">
					{portfolioProjects.filter((item, idx) => idx < 3).map((project, index) => {
						return (
							<Col key={index} md={4}>
							<Project project={project} key={index} />
							</Col>
						)
					})}
					</Row>
					<Row>
					{portfolioProjects.filter((item, idx) => idx > 2).map((project, index) => {
						return (
							<Col key={index} md={4}>
							<Project project={project} key={index} />
							</Col>
						)
					})}
					</Row>
				</CardGroup>
			</Container>
		</Container>
	);
}

export default Portfolio;
