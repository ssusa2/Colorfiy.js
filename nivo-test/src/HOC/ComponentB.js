/** @format */
import React from 'react';
import WithColor from './withColor';

const ComponentB = () => {
	return <div style={{ color: 'yellow' }}>This is ComponentB</div>;
};

export default WithColor(ComponentB, 'green');
