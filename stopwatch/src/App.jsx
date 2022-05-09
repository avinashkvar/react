import './App.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [time, setTime] = useState(0);
	const [timeron, setTimeron] = useState(false);

	useEffect(() => {
		let interval = null;

		if (timeron) {
			interval = setInterval(() => {
				setTime((prev) => prev + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timeron]);

	return (
		<div className="App">
			<div>
				<h2>Stop Watch</h2>
				<div className="mariginbottom">
					<span>{('0' + (Math.floor(time / 60000) % 60)).slice(-2)}:</span>
					<span>{('0' + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
					<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
				</div>
				{!timeron && time === 0 && (
					<Button
						variant="outline-success"
						onClick={() => setTimeron(true)}
					>
						Start
					</Button>
				)}
				{timeron && (
					<Button
						variant="outline-danger"
						onClick={() => setTimeron(false)}
					>
						Stop
					</Button>
				)}
				{!timeron && time !== 0 && (
					<Button
						variant="outline-primary"
						onClick={() => setTimeron(true)}
					>
						Resume
					</Button>
				)}{' '}
				{!timeron && time > 0 && (
					<Button variant="outline-primary" onClick={() => setTime(0)}>
						Reset
					</Button>
				)}
			</div>
		</div>
	);
}

export default App;
