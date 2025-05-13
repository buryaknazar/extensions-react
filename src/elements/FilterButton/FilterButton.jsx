import './FilterButton.css';

function FilterButton({ title, active, onClick }) {
	const className = `filter-button${active ? ' active' : ''}`;

	return (
		<button className={className} onClick={onClick}>
			{title}
		</button>
	);
}

export default FilterButton;
