import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a href="https://github.com/lukecp5" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon="stack-overflow" />
				</a>
			</div>
			<div>
				<a href="https://www.linkedin.com/in/luke-poirrier/" target="_blank" rel="noopener noreferrer">
					<img src={require("../../assets/logos/linkedin-logo.png")} alt="LinkedIn" className="logo"></img>
				</a>
			</div>
			<div>
				<a href="https://stackoverflow.com/users/16159639/luke-poirrier" target="_blank" rel="noopener noreferrer">
					<img src={require("../../assets/logos/twitter-logo.png")} alt="Twitter" className="logo"></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;