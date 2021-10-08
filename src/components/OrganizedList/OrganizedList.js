import React from "react";
import PropTypes from "prop-types";

import ListItem from "../ListItem/ListItem";

import "./OrganizedList.css";

function OrganizedList({data, extraElements}) {
	return (
		<div className="organizedList">
			{data.map((elem, i)=>(
				<div className="organizedList__group" key={i}>
					<p className="organizedList__text">{elem.date}</p>
					{elem.items.map((el, j)=>(
						<ListItem id={el.id} text={el.name} extraElements={extraElements} key={j}/>
					))}
				</div>
			))}
		</div>
	);
}

OrganizedList.propTypes = {
	data: PropTypes.array,
	extraElements: PropTypes.array
};

OrganizedList.defaultProps = {
	extraElements: []
};

export default OrganizedList;
