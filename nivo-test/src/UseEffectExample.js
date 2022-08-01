/** @format */
import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
	const [test, setTest] = useState('initial state');

	// useEffect(() => {
	// 	console.log('첫 렌더링에만 호출');
	// 	return () => {
	// 		console.log('마지막 언마운트 시 호출');
	// 	};
	// }, []);

	useEffect(() => {
		console.log('update 될 때마다 호출');
		return () => {
			console.log('update 될 때마다 호출 : clean-up', test);
		};
	}, []);

	return (
		<div>
			<p>{test}</p>
			<input
				onChange={(e) => {
					setTest(e.target.value);
				}}
			/>
		</div>
	);
};

function EEE() {
	const [useEffectRender, setUseEffectRender] = useState(true);

	return (
		<div className='App'>
			{useEffectRender && <UseEffectExample />}
			<button
				onClick={() => {
					setUseEffectRender(!useEffectRender);
				}}
			>
				마지막 언마운트 호출하기!
			</button>
		</div>
	);
}

export default EEE;
