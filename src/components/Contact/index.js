import React, { useState } from "react";
import { Container, Row, Button, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// + Import the validators
import { validateEmail } from '../../utils/helpers';


function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [welcomeMessage, setWelcomeMessage] = useState('');
	const [error, setError] = useState('');

	const handleInputChange = (e) => {
		// Getting the value and name of the input which triggered the change
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		// Based on the input type, we set the state of either email, username, and password
		if (inputType === 'name') {
			setName(inputValue);
		} else if (inputType === 'email') {
			setEmail(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = (e) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		e.preventDefault();

		// First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
		if (!name) {
			setError('A valid name is required.');
			// We want to exit out of this code block if something is wrong so that the user can correct it
			return;
			// Then we check to see if the password is not valid. If so, we set an error message regarding the password.
		}
		if(!validateEmail(email) || !email) {
			setError('A valid email is required.');
			return;
		}

		if (!message) {
			setError('Message is required');
			return;
		}
		const msg = 'Thank you for your message, ' + name + '! I will get back to you as soon as possible.';
		setWelcomeMessage(msg);

		// If everything goes according to plan, we want to clear out the input after a successful registration.
		setName('');
		setEmail('');
		setMessage('');
	};

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
					<Form className="form">
						<Form.Group>
							<Form.Label htmlFor="name">Name</Form.Label>
							<Form.Control onChange={handleInputChange} type="text" placeholder="Enter name" name="name" value={name} required />
						</Form.Group>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control onChange={handleInputChange} type="email" placeholder="name@example.com" name="email" value={email} required />
						</Form.Group>
						<Form.Group>
							<Form.Label htmlFor="message">Message</Form.Label>
							<Form.Control onChange={handleInputChange} as="textarea" rows={3} required name="message" value={message} />
						</Form.Group>

						<Button variant="primary" type="submit" onClick={handleFormSubmit}>Submit</Button>
					</Form>
					{error && (
						<div>
							<p className="error-text">{error}</p>
						</div>
					)}
					<Alert variant="success">
						<p>{welcomeMessage}</p>
  					</Alert>
				</Container>
			</Row>
		</Container>
	);
}

export default Contact;
