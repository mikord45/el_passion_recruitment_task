/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setGithubIssuesImportance } from "../../actions/github.actions";

import "./ListItem.css";
function ListItem({id, text, extraElement, extraElementSpecialStatus, githubIssues, setGithubIssuesImportance}) {
	const [Icon, setIcon] = useState(null);

	useEffect(async()=>{
		await import(`assets/${extraElement.icon}`).then(component => {
			setIcon(component.default);
		});
	},[]);

	return (
		<div className="listItem">
			<p className="listItem__text">{text}</p>
			<div className="listItem__extraElementsBox" onClick={()=>{
				const currentStateOfFetching = githubIssues ? githubIssues.isFetching : false;

				setGithubIssuesImportance(id, currentStateOfFetching);
			}}>
				{Icon ? React.cloneElement(Icon, {className: "listItem__extraElement", stroke: "#21233d", fill: extraElementSpecialStatus ? "#21233d" : "#fff"})  : null}
			</div>
		</div>
	);
}

ListItem.propTypes = {
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	extraElement: PropTypes.object,
	extraElementSpecialStatus: PropTypes.bool,
	githubIssues: PropTypes.object,
	setGithubIssuesImportance: PropTypes.func.isRequired
};

ListItem.defaultProps = {
	extraElement: {},
	extraElementSpecialStatus: false
};

const mapStateToProps = state => ({
	githubIssues: state.github.githubIssues
});

const mapDispatchToProps = dispatch => ({
	setGithubIssuesImportance: (id, currentStateOfFetching) => setGithubIssuesImportance(id, dispatch, currentStateOfFetching),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);