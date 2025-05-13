import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ExtensionCard from '../ExtensionCard/ExtensionCard';

import initialExtensions from '../../../../data.json';

import './Extensions.css';

function Extensions({ filter }) {
	const [extensions, setExtensions] = useState(initialExtensions);

	const filteredExtensions = extensions.filter(extension => {
		if (filter === 'All') return true;
		return filter === 'Active' ? extension.isActive : !extension.isActive;
	});

	const removeExtension = extensionName => {
		setExtensions(prev =>
			prev.filter(extension => extension.name !== extensionName)
		);
	};

	const handleSwitchChange = (event, extensionName) => {
		const isChecked = event.target.checked;
		setExtensions(prev => {
			return prev.map(extension => {
				if (extension.name === extensionName) {
					return {
						...extension,
						isActive: isChecked,
					};
				}
				return extension;
			});
		});
	};

	return (
		<>
			<div className='list'>
				<AnimatePresence>
					{filteredExtensions.map(extension => (
						<motion.div
							key={extension.name}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3 }}
						>
							<ExtensionCard
								key={extension.name}
								logo={extension.logo}
								name={extension.name}
								description={extension.description}
								isActive={extension.isActive}
								onRemove={() => removeExtension(extension.name)}
								onSwitchChange={e => handleSwitchChange(e, extension.name)}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</>
	);
}

export default Extensions;
