/* eslint-disable no-unused-vars */
const api = () => ({
	getGithubIssues: ()=>(
		new Promise((resolve, reject) => {
			setTimeout(()=>{
				resolve({
					all: {
						data:[
							{
								date: "19-07-2016",
								items: [
									{id: 1, name: "Page changes", important: true},
									{id: 2, name: "Review of last issues", important: true},
								]
							},
							{
								date: "18-07-2016",
								items: [
									{id: 3, name: "Visual UI Update Review", important: false},
									{id: 4, name: "Sidebar changes", important: false}
								]
							},
							{
								date: "15-07-2016",
								items: [
									{id: 5, name: "Crash update", important: false},
									{id: 6, name: "Page visual UI Update Review", important: true},
									{id: 7, name: "Sidebar update", important: false},
								]
							},
							{
								date: "14-07-2016",
								items: [
									{id: 8, name: "Crash issue", important: true},
									{id: 9, name: "Visual update & Crash resolve", important: true}
								]
							},
							{
								date: "12-07-2016",
								items: [
									{id: 10, name: "1v1 meeting", important: true},
									{id: 11, name: "Bug #605", important: false},
									{id: 12, name: "Sprint planning", important: false}
								]
							}
						],
						number: 12
					},
					open: {
						data: [
							{
								date: "19-07-2016",
								items: [
									{id: 1, name: "Page changes", important: true},
									{id: 2, name: "Review of last issues", important: true},
								]
							},
							{
								date: "15-07-2016",
								items: [
									{id: 5, name: "Crash update", important: false},
									{id: 6, name: "Page visual UI Update Review", important: true}
								]
							},
						],
						number: 4
					},
					closed: {
						data: [
							{
								date: "18-07-2016",
								items: [
									{id: 3, name: "Visual UI Update Review", important: false},
									{id: 4, name: "Sidebar changes", important: false}
								]
							},
							{
								date: "15-07-2016",
								items: [
									{id: 7, name: "Sidebar update", important: false},
								]
							},
							{
								date: "14-07-2016",
								items: [
									{id: 8, name: "Crash issue", important: true},
									{id: 9, name: "Visual update & Crash resolve", important: true}
								]
							},
							{
								date: "12-07-2016",
								items: [
									{id: 10, name: "1v1 meeting", important: true},
									{id: 11, name: "Bug #605", important: false},
									{id: 12, name: "Sprint planning", important: false}
								]
							}
						],
						number: 8
					} 
					
				});
			}, 1);
		})
	),
	setGithubIssuesImportance: (id) => (
		new Promise((resolve, reject) => {
			resolve({id});
		})
	) 
});

export default api;