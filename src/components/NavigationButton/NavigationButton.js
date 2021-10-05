import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./NavigationButton.css";

const StyledNavigationButton = styled.div`
	background-color: ${props => props.color}
`;

function NavigationButton({color}) {
	return (
		<StyledNavigationButton className="navigationButton" color={color}/>
	);
}

NavigationButton.propTypes = {
	color: PropTypes.string.isRequired
};

export default NavigationButton;
