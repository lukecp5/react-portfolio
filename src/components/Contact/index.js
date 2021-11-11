import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
	return (
		<section>
			<div className="center" id="contact">
				<h1>Contact</h1>
			</div>

			{/* Image of me and a paragraph next to the picture built in Bootstrap */}
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<img src="../../../lp-avatar.png" alt="Me" className="img-fluid rounded-circle" />
					</div>
					<div className="col-md-6">
						<p>
							Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section.
							Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section.
							Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section.
							Contact Me Section. Contact Me Section.
						</p>
						<p>
							Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section.
							Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section.
							Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section. Contact Me Section.
							Contact Me Section. Contact Me Section.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
