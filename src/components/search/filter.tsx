import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from '@material-ui/icons/FilterList';

interface FilterComponentProps {
	setFilter: (key: string) => void;
	selected: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
	setFilter,
	selected,
}) => {
	const [archorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const options = [
		{ key: 'Name', label: 'By name' },
		{ key: 'Project', label: 'By project' },
	];
	const openFilter = (e: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(e.currentTarget);
	};
	const closeFilter = () => {
		setAnchorEl(null);
	};
	const selectOption = (key: string) => {
		setFilter(key);
		setAnchorEl(null);
	};
	return (
		<>
			<Button
				id="lmsHeaderButtonFilter"
				aria-controls="filter-menu"
				aria-haspopup="true"
				onClick={openFilter}
				variant="outlined"
			>
				<FilterListIcon />
			</Button>
			<Menu
				id="filter-menu"
				anchorEl={archorEl}
				keepMounted
				open={Boolean(archorEl)}
				onClose={closeFilter}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				{options.map((option) => (
					<MenuItem
						id={`lmsHeaderButton${option.key}Filter`}
						key={option.key}
						selected={selected === option.key}
						onClick={() => selectOption(option.key)}
					>
						{option.label}
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default FilterComponent;
