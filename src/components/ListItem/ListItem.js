import React from "react";
import PropTypes from "prop-types";

import "./ListItem.css";

function ListItem({text, extraElements}) {
	return (
		<div className="listItem">
			<p className="listItem__text">{text}</p>
			{extraElements}
		</div>
	);
}

ListItem.propTypes = {
	text: PropTypes.string.isRequired,
	extraElements: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

ListItem.defaultProps = {
	extraElements: []
};

export default ListItem;
