import generateActionCreator from "../utils/generateActionCreator";
import api from "../api/api";

import { GET_GITHUB_ISSUES, SET_GITHUB_ISSUES_IMPORTANCE } from "../constants/constants";

export const getGithubIssuesRequest = generateActionCreator(GET_GITHUB_ISSUES[0]);
export const getGithubIssuesSuccess = generateActionCreator(GET_GITHUB_ISSUES[1], "payload");
export const getGithubIssuesFailure = generateActionCreator(GET_GITHUB_ISSUES[2], "error");

export const setGithubIssuesImportanceRequest = generateActionCreator(SET_GITHUB_ISSUES_IMPORTANCE[0]);
export const setGithubIssuesImportanceSuccess = generateActionCreator(SET_GITHUB_ISSUES_IMPORTANCE[1], "payload");
export const setGithubIssuesImportanceFailure = generateActionCreator(SET_GITHUB_ISSUES_IMPORTANCE[2], "error");

const currentApi = api();

export const getGithubIssues = (dispatch, currentStatus) => {
	if(currentStatus) return;

	dispatch(getGithubIssuesRequest());

	return currentApi.getGithubIssues()
		.then(response => {
			dispatch(getGithubIssuesSuccess(response));
		})
		.catch(error => {
			dispatch(getGithubIssuesFailure(error));
		});
};

export const setGithubIssuesImportance = (id, dispatch, currentStatus) => {
	if(currentStatus) return;

	dispatch(setGithubIssuesImportanceRequest());

	return currentApi.setGithubIssuesImportance(id)
		.then(response => {
			dispatch(setGithubIssuesImportanceSuccess(response));
		})
		.catch(error => {
			dispatch(setGithubIssuesImportanceFailure(error));
		});
};