import { useState } from 'react';
import { Button } from './components/Button';
import './App.css';
import { Flex } from './components/Flex';
function App() {
	const [theme, setTheme] = useState('light');
	return (
		<div className="App">
			<h1>Theme is : {theme}</h1>
			<Button onClick={() => alert('sign in done')} theme={theme}>Sign In</Button>
			<Button onClick={() => alert('clicked done')} theme={theme}> Click Me</Button>
			<button onClick={() => setTheme(theme === 'light' ? 'Dark' : 'light')}>
				Change Theme
			</button>
			<Flex theme={theme}>
				<div>one</div>
				<div>two</div>
				<div>three</div>
			</Flex>
		</div>
	);
}

export default App;
