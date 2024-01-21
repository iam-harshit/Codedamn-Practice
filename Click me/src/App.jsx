const App = () => {
	const clickHandler = () => {
		console.log('Clicked!')
	}
	// Edit this component
	return (
		<button data-testid="button" onClick={clickHandler}>
			Click me!
		</button>
	)
}

export default App
