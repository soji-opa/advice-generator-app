import React from 'react';
import Main from './component/Main';

function App() {
	const [apiData, setApiData] = React.useState({});

	React.useEffect(() => {
		fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((data) => setApiData(data.slip));
	}, []);

	console.log(apiData);

	// React.useEffect(() => {
	// 	async function getAdvice() {
	// 		const res = await fetch('https://api.adviceslip.com/advice');
	// 		const data = await res.join();
	// 		setApiData(data);
	// 	}
	// 	getAdvice();
	// });

	return (
		<div className='App'>
			<Main advice={apiData.advice} num={apiData.id} />
		</div>
	);
}

export default App;
