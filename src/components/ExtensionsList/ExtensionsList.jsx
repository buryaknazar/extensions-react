import { useState } from 'react';

import FilterButton from '../../elements/FilterButton/FilterButton';

import './ExtensionsList.css';
import Extensions from './Extensions/Extensions';
import { Filter } from '../../settings/ExtensionsSettings/ExtensionsFilter';

function ExtensionsList() {
	const [filter, setFilter] = useState('All');

	return (
		<>
			<div className='list-container'>
				<div className='filter-nav'>
					<h2 className='title'>Extensions List</h2>

					<div className='filter'>
						<FilterButton
							title='All'
							active={filter === Filter.ALL}
							onClick={() => setFilter(Filter.ALL)}
						/>
						<FilterButton
							title='Active'
							active={filter === Filter.ACTIVE}
							onClick={() => setFilter(Filter.ACTIVE)}
						/>
						<FilterButton
							title='Inactive'
							active={filter === Filter.INACTIVE}
							onClick={() => setFilter(Filter.INACTIVE)}
						/>
					</div>
				</div>

				<div className='extensions-list'>
					<Extensions filter={filter} />
				</div>
			</div>
		</>
	);
}

export default ExtensionsList;
