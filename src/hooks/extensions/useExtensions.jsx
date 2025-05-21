import { useState } from 'react';

export function useExtensions(initialExtensions, filter) {
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

	return {
		extensions,
		filteredExtensions,
		removeExtension,
		handleSwitchChange,
	};
}
