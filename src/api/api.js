const api = () => ({
	getGithubIssues: ()=>(
		// eslint-disable-next-line no-unused-vars
		new Promise((resolve, reject) => {
			setTimeout(()=>{
				resolve({
					all: {
						data:[
							{
								date: "19-07-2016",
								items: [
									{id: 1, name: "Page changes"},
									{id: 2, name: "Review of last issues"},
								]
							},
							{
								date: "18-07-2016",
								items: [
									{id: 3, name: "Visual UI Update Review"},
									{id: 4, name: "Sidebar changes"}
								]
							},
							{
								date: "15-07-2016",
								items: [
									{id: 5, name: "Crash update"},
									{id: 6, name: "Page visual UI Update Review"},
									{id: 7, name: "Sidebar update"},
								]
							},
							{
								date: "14-07-2016",
								items: [
									{id: 8, name: "Crash issue"},
									{id: 9, name: "Visual update & Crash resolve"}
								]
							},
							{
								date: "12-07-2016",
								items: [
									{id: 10, name: "1v1 meeting"},
									{id: 11, name: "Bug #605"},
									{id: 12, name: "Sprint planning"}
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
									{id: 1, name: "Page changes"},
									{id: 2, name: "Review of last issues"},
								]
							},
							{
								date: "15-07-2016",
								items: [
									{id: 5, name: "Crash update"},
									{id: 6, name: "Page visual UI Update Review"}
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
									{id: 3, name: "Visual UI Update Review"},
									{id: 4, name: "Sidebar changes"}
								]
							},
							{
								date: "15-07-2016",
								items: [
									{id: 7, name: "Sidebar update"},
								]
							},
							{
								date: "14-07-2016",
								items: [
									{id: 8, name: "Crash issue"},
									{id: 9, name: "Visual update & Crash resolve"}
								]
							},
							{
								date: "12-07-2016",
								items: [
									{id: 10, name: "1v1 meeting"},
									{id: 11, name: "Bug #605"},
									{id: 12, name: "Sprint planning"}
								]
							}
						],
						number: 8
					} 
					
				});
			}, 5000);
		})
	) 
});

export default api;