import './App.css';

import { useState, useEffect } from 'react';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';

function App() {
	let [second, setSecond] = useState(0);
	let [minute, setMinute] = useState(0);

	let Timer;

	useEffect(() => {
		Timer = setInterval(() => {
			setSecond(second + 1);
			if (second === 59) {
				setMinute(minute + 1);
				setSecond(0);
			}
		}, 1000);

		return () => clearInterval(Timer);
	});

	const Restart = () => {
		setSecond(0);
		setMinute(0);
	};
	var second1 = second;
	var minute1 = minute;
	const Stop = () => {
		clearInterval(Timer);
	};

	return (
		<div className="App">
			<h1>Timer</h1>
			<h1>
				{minute < 10 ? '0' + minute : minute}:
				{second < 10 ? '0' + second : second}
			</h1>
			<button onClick={() => Restart()}>Restart</button>
			<button onClick={() => Stop()}>Stop</button>
		</div>
	);
}

export default App;
