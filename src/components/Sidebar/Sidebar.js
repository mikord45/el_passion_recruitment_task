import React from "react";
import PropTypes from "prop-types";

import "./Sidebar.css";

function Sidebar({children}) {
	return (
		<>
			<div className="sidebar">
				{children}
			</div>
		</>
	);
}

Sidebar.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
};

export default Sidebar;
