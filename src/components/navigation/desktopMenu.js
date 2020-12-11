import React from 'react';

import DarkModeToggle from '../UI/darkModeToggle';

const DesktopMenu = ({ notOnePageSection }) => {
	return notOnePageSection ? null : (
		<>
			<DarkModeToggle />
		</>
	);
};

export default DesktopMenu;
