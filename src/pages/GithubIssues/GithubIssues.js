/* eslint-disable react/jsx-key */
import React from "react";

import MainBox from "../../components/MainBox/MainBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ControlBox from "../../components/ControlsBox/ControlsBox";
import ContentField from "../../components/ContentField/ContentField";
import OrganizedList from "../../components/OrganizedList/OrganizedList";
import StarIcon from "../../assets/icon-star.svg";

const sidebarData = [{name: "All", imgUrl: "IconGithub"}, {name: "Open", imgUrl: "IconOpenIssue"}, {name: "Closed", imgUrl: "IconClosedIssue"}];
const contentFieldData = [
	{
		date: "19-07-2016",
		items: [
			{id: 1, name: "Lorem Ipsum 1"},
			{id: 2, name: "Lorem Ipsum 2"},
			{id: 3, name: "Lorem Ipsum 3"},
		]
	},
	{
		date: "18-07-2016",
		items: [
			{id: 4, name: "Lorem Ipsum 1"},
			{id: 5, name: "Lorem Ipsum 2"},
			{id: 6, name: "Lorem Ipsum 3"},
		]
	},
	{
		date: "15-07-2016",
		items: [
			{id: 7, name: "Lorem Ipsum 1"},
			{id: 8, name: "Lorem Ipsum 2"},
			{id: 9, name: "Lorem Ipsum 3"},
		]
	},
];

function githubIssues() {
	return (
		<MainBox>
			<Sidebar>
				<NavigationBar/>
				<ControlBox data={sidebarData}/>
			</Sidebar>
			<ContentField>
				<OrganizedList data={contentFieldData} extraElements={[{src: StarIcon, click: (id)=>{console.log(id);}}]} />
			</ContentField>
		</MainBox>
	);
}

export default githubIssues;
