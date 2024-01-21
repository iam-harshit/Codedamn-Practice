import { useState } from 'react'

const App = () => {
	// Edit this component
	const [count, setCount] = useState(0);
	const countHandler = () => {
		setCount((prev) => prev + 1);
	}

	return (
		<div>
			<button data-testid="button" onMouseEnter={countHandler}>Hover Me</button>
			<h1 data-testid="count">{count}</h1>
		</div>
	)
}

export default App
