import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Contact() {
	return (
		<Container>
			<Row>
				<div className="jumbotron jumbotron-fluid mb-0">
					<Container>
						<h1 className="display-4 pb-0 pb-sm-0 pb-md-0 mb-2 text-center">Contact Me</h1>
					</Container>
				</div>
			</Row>

			{/* Image of me and a paragraph next to the picture built in Bootstrap */}
			<Row>
				<Container>
					<Form>
						<Form.Group controlId="form.Name">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter name" />
						</Form.Group>
						<Form.Group controlId="form.Email">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" />
						</Form.Group>
						<Form.Group controlId="form.Textarea">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" rows={4} />
						</Form.Group>
					</Form>
				</Container>
			</Row>
		</Container>
	);
}

export default Contact;
