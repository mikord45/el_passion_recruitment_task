import React from "react";
import PropTypes from "prop-types";

import ControlButton from "../ControlButton/ControlButton";

import "./ControlsBox.css";

function ControlsBox({data, selected, clickHandler}) {

	return (
		<div className="controlBox">
			{data ? 
				data.map((elem, i)=>(
					<ControlButton text={elem.name} imgUrl={elem.imgUrl} number={elem.number} selected={selected} key={i} clickHandler={clickHandler}/>
				)):
				null}
		</div>
	);
}

ControlsBox.propTypes = {
	data: PropTypes.array.isRequired,
	selected: PropTypes.string,
	clickHandler: PropTypes.func.isRequired
};

export default ControlsBox;
