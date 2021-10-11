const generateActions = type => ({
	[`${type}_REQUEST`]: `${type}_REQUEST`,
	[`${type}_SUCCESS`]: `${type}_SUCCESS`,
	[`${type}_FAILURE`]: `${type}_FAILURE`
});

const returnActions = type => {
	const generatedActions = generateActions(type);
	return Object.keys(generatedActions).map(action => generatedActions[action]);
};

export const GET_GITHUB_ISSUES = returnActions("GET_GITHUB_ISSUES");

export const SET_GITHUB_ISSUES_IMPORTANCE = returnActions("SET_GITHUB_ISSUES_IMPORTANCE");