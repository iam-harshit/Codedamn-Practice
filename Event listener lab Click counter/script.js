// Attach event listeners and update counter here
document.getElementById('counterButton').addEventListener('click', () => {
	let count = document.getElementById('clickCounter').innerText
	count = parseInt(count) + 1
	document.getElementById('clickCounter').textContent = count
})
