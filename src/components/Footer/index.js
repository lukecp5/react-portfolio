import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import "./footer.css";

function Footer() {
	return (
		<Container className="footer text-center my-auto py-auto">
			<Row id="social-icons">
				<Col>
				<SocialIcon url="https://github.com/lukecp5" target="_blank" rel="noopener noreferrer" />
				</Col>
			<Col>
				<SocialIcon url="https://www.linkedin.com/in/luke-poirrier/" target="_blank" rel="noopener noreferrer" />
			</Col>
			<Col>
				<SocialIcon url="https://stackoverflow.com/users/16159639/luke-poirrier" target="_blank"rel="noopener noreferrer" />
			</Col>
			</Row>
		</Container>
	);
}

export default Footer;
