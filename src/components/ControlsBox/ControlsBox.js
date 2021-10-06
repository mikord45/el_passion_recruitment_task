import React from "react";
import PropTypes from "prop-types";

import ControlButton from "../ControlButton/ControlButton";

import "./ControlsBox.css";

function ControlsBox({data}) {

	return (
		<div className="controlBox">
			{data.map((elem, i)=>(
				<ControlButton text={elem.name} imgUrl={elem.imgUrl} number={10} key={i}/>
			))}
		</div>
	);
}

ControlsBox.propTypes = {
	data: PropTypes.array
};

export default ControlsBox;
