import { useState, useMemo } from 'react';

import iconMoon from '../../../assets/images/icon-moon.svg';
import iconSun from '../../../assets/images/icon-sun.svg';
import './ThemeSwitchButton.css';

function ThemeSwitchButton() {
	const [isDark, setIsDark] = useState(() => {
		const saved = localStorage.getItem('isDarkTheme');
		return saved === 'true';
	});

	const icon = isDark ? iconSun : iconMoon;

	useMemo(() => {
		document.body.dataset.theme = isDark ? 'dark' : 'light';
		localStorage.setItem('isDarkTheme', isDark);
	}, [isDark]);

	const handleClick = () => {
		setIsDark(prev => !prev);
	};

	return (
		<button className='theme-switch-button' onClick={handleClick}>
			<img src={icon} alt='logo' />
		</button>
	);
}

export default ThemeSwitchButton;
