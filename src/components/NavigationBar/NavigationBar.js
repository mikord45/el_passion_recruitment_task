import React from "react";

import NavigationButton from "../NavigationButton/NavigationButton";

import "./NavigationBar.css";

function NavigationBar() {
	return (
		<div className="navigationBar">
			<div className="navigationBar__leftDiv">
				<div className="navigationBar__navigationButtonsBox">
					<NavigationButton color="#ff594f"/>
					<NavigationButton color="#ffbc1b"/>
					<NavigationButton color="#00cd46"/>
				</div>
			</div>
			<div className="navigationBar__rightDiv">
			</div>
		</div>
	);
}

export default NavigationBar;
