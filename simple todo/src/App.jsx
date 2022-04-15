import logo from './logo.svg';
import './App.css';

import React from 'react';

import { Todo } from './components/Todo';

function App() {
	// const data = 'hello';
	// const [message, setmessage] = React.useState('');
	return (
		<div className="App">
			{/* <First
				data={data}
				getfu={(data) => {
					console.log(data);
					setmessage(data);
				}}
			></First>
			<Second data={data} message={message} /> */}
			<Todo></Todo>
		</div>
	);
}
// function First({ data, getfu }) {
// 	const value = 'i am first';
// 	getfu(value);
// 	return <h1>first {data}</h1>;
// }
// function Second({ data, message }) {
// 	console.log('second is printing',message);
// 	return <h1>Second {data} </h1>;
// }
export default App;
