import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import GithubIssues from "./pages/GithubIssues/GithubIssues";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<GithubIssues/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
