import React from "react";
import PropTypes from "prop-types";

import "./ContentField.css";

function ContentField({children}) {
	return (
		<div className="contentField">
			{children}
		</div>
	);
}

ContentField.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
};

export default ContentField;
