import React from "react";

function Portfolio() {
	return (
		<section>
			<div className="center" id="portfolio">
				<h1>Portfolio</h1>
			</div>

			{/* Image of me and a paragraph next to the picture built in Bootstrap */}
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<img src={require("../../assets/images/lp-avatar.jpg")} alt="Me" className="img-fluid rounded-circle" />
					</div>
					<div className="col-md-6">
						<p>
							Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section.
							Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section.
							Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section.
							Portfolio Me Section. Portfolio Me Section.
						</p>
						<p>
							Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section.
							Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section.
							Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section. Portfolio Me Section.
							Portfolio Me Section. Portfolio Me Section.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
