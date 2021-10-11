import React from "react";
import PropTypes from "prop-types";

import ControlButton from "../ControlButton/ControlButton";

import "./ControlsBox.css";

function ControlsBox({data}) {

	return (
		<div className="controlBox">
			{data ? 
				data.map((elem, i)=>(
					<ControlButton text={elem.name} imgUrl={elem.imgUrl} number={elem.number} key={i}/>
				)):
				null}
		</div>
	);
}

ControlsBox.propTypes = {
	data: PropTypes.array
};

export default ControlsBox;
