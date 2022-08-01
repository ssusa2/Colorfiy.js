/** @format */

import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import EEE from './UseEffectExample';
import Copy from './Copy';

const App = () => {
	return (
		<Copy />
		// <Routes>
		// 	<Route path='/' element={<Home />} />
		// 	<Route path='/example' element={<EEE />} />
		// 	<Route path='/about' element={<About />} />
		// 	<Route path='/profiles/:username' element={<Profile />} />
		// </Routes>
	);
};

export default App;
