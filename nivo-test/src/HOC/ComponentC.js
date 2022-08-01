/** @format */
import WithColor from './withColor';

const ComponentC = () => {
	return <div style={{ color: 'red' }}>This is ComponentC</div>;
};

export default WithColor(ComponentC, 'black');
