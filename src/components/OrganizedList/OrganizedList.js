import React from "react";
import PropTypes from "prop-types";

import ListItem from "../ListItem/ListItem";

import "./OrganizedList.css";

function OrganizedList({data}) {
	console.log(data);
	return (
		<div className="organizedList">
			{data.map((elem, i)=>(
				<div className="organizedList__group" key={i}>
					<p>{elem.date}</p>
					{elem.issues.map((el, j)=>(
						<ListItem text={el.name}  key={j}/>
					))}
				</div>
			))}
		</div>
	);
}

OrganizedList.propTypes = {
	data: PropTypes.array
};

export default OrganizedList;
