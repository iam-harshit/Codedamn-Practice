import React from 'react'
// import "./App.css"
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: lightblue;
    color: black;
  }
`;

const App = () => {
	// Write your code here
	
	return(
		// <div>
		// 	<button className="btn" style={}>Click me!</button>
		// </div>
		<StyledButton>Click me!</StyledButton>
	)
}

export default App
