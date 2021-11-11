import React, {useState} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container, Row, Col} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./App.css";



library.add(fab);

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			// case "resume":
			// 	return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
