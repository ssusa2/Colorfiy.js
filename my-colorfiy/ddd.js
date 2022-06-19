/** @format */

const myImg = new Image();
myImg.crossOrigin = 'Anonymous';
myImg.onload = () => {
	const context = document.createElement('canvas').getContext('2d');
	context.drawImage(myImg, 0, 0);
	const { data } = context.getImageData(10, 10, 1, 1);
	console.log('이거임', data);
};
myImg.src =
	'https://images.unsplash.com/photo-1440407876336-62333a6f010f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhdmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60';
