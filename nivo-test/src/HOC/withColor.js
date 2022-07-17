/** @format */

const WithColor =
	(Component, bgColor) =>
	({ ...props }) => {
		return (
			<div style={{ backgroundColor: bgColor, padding: 40 }}>
				<Component {...props} />
			</div>
		);
	};

export default WithColor;
