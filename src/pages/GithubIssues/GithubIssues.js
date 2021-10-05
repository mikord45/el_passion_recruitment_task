import React from "react";

import MainBox from "../../components/MainBox/MainBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ControlBox from "../../components/ControlsBox/ControlsBox";
import ContentField from "../../components/ContentField/ContentField";

function githubIssues() {
	return (
		<MainBox>
			<Sidebar>
				<NavigationBar/>
				<ControlBox data={[{name: "All", imgUrl: "IconGithub"}, {name: "Open", imgUrl: "IconOpenIssue"}, {name: "Closed", imgUrl: "IconClosedIssue"}]}>
				</ControlBox>
			</Sidebar>
			<ContentField/>
		</MainBox>
	);
}

export default githubIssues;
