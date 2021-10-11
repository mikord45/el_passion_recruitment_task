import { combineReducers } from "redux";

import githubReducer from "./github.reducer";

const rootReducer = combineReducers({
	github: githubReducer
});

export default rootReducer;