/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import "./ListItem.css";
function ListItem({id, text, extraElement}) {
	const [Icons, setIcons] = useState(null);

	useEffect(async()=>{
		await import(`assets/${extraElement.icon}`).then(component => {
			setIcons(component.default);
		});
	},[]);

	return (
		<div className="listItem">
			<p className="listItem__text">{text}</p>
			<div className="listItem__extraElementsBox" onClick={()=>{console.log(id);}}>
				{Icons ? React.cloneElement(Icons, {className: "listItem__extraElement", stroke: "#21233d"})  : null}
				{/* <IconStar className="listItem__extraElement"  fill="red" stroke="green" onClick={()=>{elem.click(id);}} key={i}/> */}
			</div>
		</div>
	);
}

ListItem.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	extraElement: PropTypes.object
};

ListItem.defaultProps = {
	extraElement: []
};

export default ListItem;
