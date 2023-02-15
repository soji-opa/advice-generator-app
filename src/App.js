import React from 'react';
import Main from './component/Main';

function App() {
	const [data, setData] = React.useState({
		id: 63,
		advice: `If you're squashed close to strangers, on public transport,
			try not to be rude to them `,
	});
	const [apiData, setApiData] = React.useState({});

	React.useEffect(() => {
		fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((data) => setApiData(data.slip));
	}, [handleClick]);

	function handleClick() {
		setData((prevState) => ({
			...prevState,
			id: apiData.id,
			advice: apiData.advice,
		}));
	}

	return (
		<div className='App'>
			<Main advice={data.advice} num={data.id} handleClick={handleClick} />
		</div>
	);
}

export default App;
