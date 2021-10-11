/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import {GET_GITHUB_ISSUES, SET_GITHUB_ISSUES_IMPORTANCE} from "../constants/constants";

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
	case GET_GITHUB_ISSUES[0]:
		return {
			...state,
			githubIssues: {
				...state.githubIssues,
				isFetched: false,
				isFetching: true
			}
		};
	case GET_GITHUB_ISSUES[1]:
		return {
			...state,
			githubIssues: {
				data: payload,
				error: null,
				isFetched: true,
				isFetching: false
			}
		};
	case GET_GITHUB_ISSUES[2]:
		return {
			...state, 
			githubIssues: {
				data: null,
				error,
				isFetched: false,
				isFetching: false
			}
		};
	case SET_GITHUB_ISSUES_IMPORTANCE[0]:
		return {
			...state,
			githubIssues: {
				...state.githubIssues,
				isFetched: false,
				isFetching: true
			}
		};
	case SET_GITHUB_ISSUES_IMPORTANCE[1]:
		const {all, open, closed} = state.githubIssues.data;
		const {id} = payload;
		const prevAllDays = all.data;
		const currentAllDays = prevAllDays.map((elem)=>{
			return(
				{
					date: elem.date,
					items: elem.items.map((el)=>{
						if(el.id === id){
							el.important = !el.important;
						}
						return(el);
					})
				}
			);
		});
		const prevOpenDays = open.data;
		const currentOpenDays = prevOpenDays.map((elem)=>{
			return(
				{
					date: elem.date,
					items: elem.items.map((el)=>{
						if(el.id === id){
							el.important = !el.important;
						}
						return(el);
					})
				}
			);
		});
		const prevClosedDays = closed.data;
		const currentClosedDays = prevClosedDays.map((elem)=>{
			return(
				{
					date: elem.date,
					items: elem.items.map((el)=>{
						if(el.id === id){
							el.important = !el.important;
						}
						return(el);
					})
				}
			);
		});
		return {
			...state,
			githubIssues: {
				data: {
					all: {
						...state.githubIssues.data.all,
						data: currentAllDays
					},
					open: {
						...state.githubIssues.data.open,
						data: currentOpenDays
					},
					closed: {
						...state.githubIssues.data.closed,
						data: currentClosedDays
					},
				},
				error: null,
				isFetched: true,
				isFetching: false
			}
		};
	case SET_GITHUB_ISSUES_IMPORTANCE[2]:
		return {
			...state, 
			githubIssues: {
				...state.githubIssues,
				isFetched: false,
				isFetching: false
			}
		};
	default:
		return state;
	}
	
};

export default githubReducer;