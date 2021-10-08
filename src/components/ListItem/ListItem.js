import React from "react";
import PropTypes from "prop-types";

import "./ListItem.css";

function ListItem({id, text, extraElements}) {
	return (
		<div className="listItem">
			<p className="listItem__text">{text}</p>
			<div className="listItem__extraElementsBox">
				{extraElements.map((elem, i)=>(
					<img className="listItem__extraElement" src={elem.src} onClick={()=>{elem.click(id);}} key={i}/>
				))}
			</div>
		</div>
	);
}

ListItem.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	extraElements: PropTypes.array
};

ListItem.defaultProps = {
	extraElements: []
};

export default ListItem;
