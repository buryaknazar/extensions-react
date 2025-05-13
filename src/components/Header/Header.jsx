import logo from '../../assets/images/logo.svg';
import './Header.css';

import ThemeSwitchButton from './ThemeSwitchButton/ThemeSwitchButton';

function Header() {
	return (
		<>
			<header>
				<div className='header-nav'>
					<div className='header-logo'>
						<img src={logo} alt='logo' />
					</div>

					<div className='theme-switch'>
						<ThemeSwitchButton />
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
