import React from "react";

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1>About</h1>
			</div>

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
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
