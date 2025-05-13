import { useState } from 'react';

import FilterButton from '../../elements/FilterButton/FilterButton';

import './ExtensionsList.css';
import Extensions from './Extensions/Extensions';

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
							active={filter === 'All'}
							onClick={() => setFilter('All')}
						/>
						<FilterButton
							title='Active'
							active={filter === 'Active'}
							onClick={() => setFilter('Active')}
						/>
						<FilterButton
							title='Inactive'
							active={filter === 'Inactive'}
							onClick={() => setFilter('Inactive')}
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
