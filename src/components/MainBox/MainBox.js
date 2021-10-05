import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./MainBox.css";

const ProperSizeMainBox = styled.div`
width: ${props => props.size.width};
height: ${props => props.size.height}
`;

function MainBox({size, children}) {

	return (
		<ProperSizeMainBox size={size} className="mainBox">
			{children}
		</ProperSizeMainBox>
	);
}

MainBox.propTypes = {
	size: PropTypes.object,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired
};

MainBox.defaultProps = {
	size: {width: "650px", height: "500px"}
};

export default MainBox;
