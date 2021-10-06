import React from "react";

import MainBox from "../../components/MainBox/MainBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ControlBox from "../../components/ControlsBox/ControlsBox";
import ContentField from "../../components/ContentField/ContentField";
import OrganizedList from "../../components/OrganizedList/OrganizedList";

const sidebarData = [{name: "All", imgUrl: "IconGithub"}, {name: "Open", imgUrl: "IconOpenIssue"}, {name: "Closed", imgUrl: "IconClosedIssue"}];
const contentFieldData = [
	{
		date: "1-1-1",
		issues: [
			{name: "Lorem Ipsum 1"},
			{name: "Lorem Ipsum 2"},
			{name: "Lorem Ipsum 3"},
		]
	},
	{
		date: "1-1-2",
		issues: [
			{name: "Lorem Ipsum 1"},
			{name: "Lorem Ipsum 2"},
			{name: "Lorem Ipsum 3"},
		]
	},
	{
		date: "1-2-1",
		issues: [
			{name: "Lorem Ipsum 1"},
			{name: "Lorem Ipsum 2"},
			{name: "Lorem Ipsum 3"},
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
				<OrganizedList data={contentFieldData}/>
			</ContentField>
		</MainBox>
	);
}

export default githubIssues;
