import React from "react";
import PropTypes from "prop-types";

import ListItem from "../ListItem/ListItem";

import "./OrganizedList.css";

function OrganizedList({data, extraElement}) {
	return (
		<div className="organizedList">
			{data?
				data.map((elem, i)=>(
					<div className="organizedList__group" key={i}>
						<p className="organizedList__text">{elem.date}</p>
						{elem.items.map((el, j)=>(
							<ListItem id={el.id} text={el.name} extraElement={extraElement} key={j}/>
						))}
					</div>
				)): null
			}
			
		</div>
	);
}

OrganizedList.propTypes = {
	data: PropTypes.array,
	extraElement: PropTypes.object
};

OrganizedList.defaultProps = {
	extraElement: []
};

export default OrganizedList;
