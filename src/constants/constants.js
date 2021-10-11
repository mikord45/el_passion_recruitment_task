const generateActions = type => ({
	[`${type}_REQUEST`]: `${type}_REQUEST`,
	[`${type}_SUCCESS`]: `${type}_SUCCESS`,
	[`${type}_FAILURE`]: `${type}_FAILURE`
});

const returnActions = type => {
	const generatedActions = generateActions(type);
	return Object.keys(generatedActions).map(action => generatedActions[action]);
};

export const GITHUB_ISSUES = returnActions("GITHUB_ISSUES");