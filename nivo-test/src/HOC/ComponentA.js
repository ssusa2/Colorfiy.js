/** @format */
import React from 'react';
import WithColor from './withColor';

const ComponentA = () => {
	return <div style={{ color: 'white' }}>This is ComponentA</div>;
};

export default WithColor(ComponentA, 'blue');
