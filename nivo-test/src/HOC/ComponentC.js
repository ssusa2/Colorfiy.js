/** @format */
import WithColor from './withColor';

const ComponentC = () => {
	return <div style={{ color: 'white' }}>This is ComponentC</div>;
};

export default WithColor(ComponentC, 'black');
