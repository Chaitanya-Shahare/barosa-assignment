import React from "react";

const StatusBar = () => {
	return (
		<div className="status">
			<div className="status__left status-item"></div>
			<div className="status__right">
				<div className="status__circle status-item"></div>
				<div className="status__circle status-item"></div>
				<div className="status__oval status-item"></div>
			</div>
		</div>
	);
};

export default StatusBar;
