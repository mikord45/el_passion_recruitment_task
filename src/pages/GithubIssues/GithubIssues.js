/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import { getGithubIssues } from "../../actions/github.actions";


import MainBox from "../../components/MainBox/MainBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ControlBox from "../../components/ControlsBox/ControlsBox";
import ContentField from "../../components/ContentField/ContentField";
import OrganizedList from "../../components/OrganizedList/OrganizedList";
import StarIcon from "../../assets/icon-star.svg";

function githubIssues({getGithubIssues, githubIssues}) {

	const [sidebarData, setSidebarData] = useState([{name: "All", imgUrl: "IconGithub"}, {name: "Open", imgUrl: "IconOpenIssue"}, {name: "Closed", imgUrl: "IconClosedIssue"}]);

	useEffect(()=>{
		const currentStateOfFetching = githubIssues ? githubIssues.isFetching : false;
		getGithubIssues(currentStateOfFetching);
	}, []);

	useEffect(()=>{
		setSidebarData([{name: "All", imgUrl: "IconGithub", number: githubIssues?.all.number}, {name: "Open", imgUrl: "IconOpenIssue", number: githubIssues?.open.number}, {name: "Closed", imgUrl: "IconClosedIssue", number: githubIssues?.closed.number}]);	
	}, [githubIssues]);

	return (
		<MainBox>
			<Sidebar>
				<NavigationBar/>
				<ControlBox data={sidebarData}/>
			</Sidebar>
			<ContentField>
				<OrganizedList data={githubIssues?.all.data} extraElements={[{src: StarIcon, click: (id)=>{console.log(id);}}]} />
			</ContentField>
		</MainBox>
	);
}

const mapStateToProps = state => ({
	githubIssues: state.github.githubIssues.data
});

const mapDispatchToProps = dispatch => ({
	getGithubIssues: (currentStateOfFetching) => getGithubIssues(dispatch, currentStateOfFetching),
});

export default connect(mapStateToProps, mapDispatchToProps)(githubIssues);
