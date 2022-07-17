/** @format */
import React from 'react';
import styled from 'styled-components';
import ComponentA from './HOC/ComponentA';
import ComponentB from './HOC/ComponentB';
import ComponentC from './HOC/ComponentC';

import './App.css';

function App() {
	/** @format */
	return (
		<>
			<ComponentA />
			<ComponentB />
			<ComponentC />
		</>
	);
}

export default App;

const Block = styled.div`
	display: flex;
	width: 100px;
	height: 400px;
`;
