/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import { getGithubIssues } from "../../actions/github.actions";
import firstLetterToLowercase from "../../utils/firstLetterToLowercase";

import MainBox from "../../components/MainBox/MainBox";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ControlBox from "../../components/ControlsBox/ControlsBox";
import ContentField from "../../components/ContentField/ContentField";
import OrganizedList from "../../components/OrganizedList/OrganizedList";

function githubIssues({getGithubIssues, githubIssues}) {

	const [sidebarData, setSidebarData] = useState([{name: "All", imgUrl: "IconGithub"}, {name: "Open", imgUrl: "IconOpenIssue"}, {name: "Closed", imgUrl: "IconClosedIssue"}]);
	const [selectedType, setSelectedType] = useState("all");
	
	const selectType = (newType) => {
		const newTypeProperFormat = firstLetterToLowercase(newType);
		setSelectedType(newTypeProperFormat);
	};

	useEffect(()=>{
		const currentStateOfFetching = githubIssues ? githubIssues.isFetching : false;
		getGithubIssues(currentStateOfFetching);
	}, []);

	useEffect(()=>{
		setSidebarData([{name: "All", imgUrl: "IconGithub", number: githubIssues.data?.all.number}, {name: "Open", imgUrl: "IconOpenIssue", number: githubIssues.data?.open.number}, {name: "Closed", imgUrl: "IconClosedIssue", number: githubIssues.data?.closed.number}]);	
	}, [githubIssues]);

	return (
		<MainBox>
			<Sidebar>
				<NavigationBar/>
				<ControlBox data={sidebarData} selected={selectedType} clickHandler={selectType}/>
			</Sidebar>
			<ContentField>
				<OrganizedList data={githubIssues.data?.[selectedType].data} extraElement={{icon: "IconStar", click: (id)=>{console.log(id);}}} />
			</ContentField>
		</MainBox>
	);
}

const mapStateToProps = state => ({
	githubIssues: state.github.githubIssues
});

const mapDispatchToProps = dispatch => ({
	getGithubIssues: (currentStateOfFetching) => getGithubIssues(dispatch, currentStateOfFetching),
});

export default connect(mapStateToProps, mapDispatchToProps)(githubIssues);
