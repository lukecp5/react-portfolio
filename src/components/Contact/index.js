import React from "react";

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
						<img src={require("../../assets/images/lp-avatar.jpg")} alt="Me" className="img-fluid rounded-circle" />
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