import {GITHUB_ISSUES} from "../constants/constants";

const defaultState = {
	githubIssues: {
		data: null,
		error: null,
		isFetched: false,
		isFetching: false
	}
};

const githubReducer = (state = defaultState, action) => {
	const {type, payload, error} = action;
	switch(type) {
	case GITHUB_ISSUES[0]:
		return {
			...state,
			githubIssues: {
				...state.githubIssues,
				isFetched: false,
				isFetching: true
			}
		};
	case GITHUB_ISSUES[1]:
		return {
			...state,
			githubIssues: {
				data: payload,
				error: null,
				isFetched: true,
				isFetching: false
			}
		};
	case GITHUB_ISSUES[2]:
		return {
			...state, 
			githubIssues: {
				data: null,
				error,
				isFetched: false,
				isFetching: false
			}
		};
	default:
		return state;
	}
	
};

export default githubReducer;