// Write your JavaScript code here to toggle the h1 font-size between 16px and 32px when the button with id 'toggleButton' is clicked.
document.getElementById('toggleButton').addEventListener('click', () => {
	// const size = Math.floor(Math.random() * (32 - 16)) + 10
	// document.getElementById('header').style.fontSize = `${size}px`
	if (document.getElementById('header').style.fontSize === '16px') {
		document.getElementById('header').style.fontSize = '32px'
	} else {
		document.getElementById('header').style.fontSize = '16px'
	}
})
