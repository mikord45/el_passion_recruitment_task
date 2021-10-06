import React from "react";
import PropTypes from "prop-types";

import ControlIconsObj from "../../assets/iconsExport";

import "./ControlButton.css";

function ControlButton({text, imgUrl, number}) {
	return (
		<div className="controlButton">
			<div className="controlButton__left">
				<img className="controlButton__img" src={ControlIconsObj[imgUrl]}/>
				<p className="controlButton__text">{text}</p>
			</div>
			<div className="controlButton__right">
				<p className="controlButton__number">{number}</p>
			</div>
		</div>
	);
}

ControlButton.propTypes = {
	text: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired
};

export default ControlButton;
