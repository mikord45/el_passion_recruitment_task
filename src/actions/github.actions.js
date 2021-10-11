import generateActionCreator from "../utils/generateActionCreator";
import api from "../api/api";

import { GITHUB_ISSUES } from "../constants/constants";

export const getGithubIssuesRequest = generateActionCreator(GITHUB_ISSUES[0]);
export const getGithubIssuesSuccess = generateActionCreator(GITHUB_ISSUES[1], "payload");
export const getGithubIssuesFailure = generateActionCreator(GITHUB_ISSUES[2], "error");

// eslint-disable-next-line no-unused-vars
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