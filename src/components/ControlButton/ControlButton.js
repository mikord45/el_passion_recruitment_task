import React, {useState} from "react";
import PropTypes from "prop-types";

import firstLetterToLowercase from "../../utils/firstLetterToLowercase";

import ControlIconsObj from "../../assets/iconsExport";

import "./ControlButton.css";

function ControlButton({text, imgUrl, number, selected, clickHandler}) {
	const [hoverActive, setHoverActive] = useState(false);
	
	return (
		<div className={`controlButton ${firstLetterToLowercase(text) === selected ? "controlButton controlButton--selected": ""} ${hoverActive? "controlButton--hover" : ""}`} onClick={()=>{clickHandler(text);}} onMouseEnter={()=>{setHoverActive(true);}} onMouseLeave={()=>{setHoverActive(false);}}>
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
	number: PropTypes.number,
	selected: PropTypes.string.isRequired,
	clickHandler: PropTypes.func.isRequired
};

ControlButton.defaultProps = {
	number: 0
};

export default ControlButton;
