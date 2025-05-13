import { useState } from 'react';

import './ExtensionCard.css';

function ExtensionCard({
	logo,
	name,
	description,
	isActive,
	onRemove,
	onSwitchChange,
}) {
	const [isExtensionActive, setIsExtensionActive] = useState(isActive);

	const handleSwitchChange = e => {
		setIsExtensionActive(e.target.checked);
		onSwitchChange(e, name);
	};

	return (
		<>
			<div className='card'>
				<div className='card-body'>
					<div className='card-image'>
						<img src={logo} alt={name} />
					</div>

					<div className='card-info'>
						<h3 className='card-title'>{name}</h3>
						<p className='card-description'>{description}</p>
					</div>
				</div>

				<div className='card-actions'>
					<button className='card-button' onClick={onRemove}>
						Remove
					</button>
					<label className='switch'>
						<input
							type='checkbox'
							checked={isExtensionActive}
							onChange={handleSwitchChange}
						/>
						<span className='slider'></span>
					</label>
				</div>
			</div>
		</>
	);
}

export default ExtensionCard;
