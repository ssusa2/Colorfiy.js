/** @format */

const myImg = new Image();
myImg.crossOrigin = 'Anonymous';
myImg.onload = () => {
	const context = document.createElement('canvas').getContext('2d');
	context.drawImage(myImg, 0, 0);
	const { data } = context.getImageData(10, 10, 1, 1);
	console.log('이거임', data);
};
myImg.src = 'Screenshot 2022-06-19 at 15.10.46.png';
