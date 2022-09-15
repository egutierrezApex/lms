import React, { useState } from 'react';
import SelectComponent from '../../components/form/select';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as ApexSearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as ApexFilterIcon } from 'assets/icons/filter-icon.svg';
import { ReactComponent as SelectIcon } from 'assets/icons/select-icon.svg';
import styles from './style';

const SearchGroup = () => {
	const { groupSearchWrapper, searchIcon, filterGroup, filterIconSelect } = styles();
	const [order, setOrder] = React.useState(0);
	const [searchText, setSearchText] = useState('');

	const handleOrderChange = (e: any) => {
		setOrder(e.target.value);
	};

	const handleSearchChange = (e: any) => {
		const { value } = e.target;
		setSearchText(value);
	};

	return (
		<Grid container spacing={2}  direction="row" justifyContent="flex-end" alignItems="flex-end">
			<Grid item>
				<SelectComponent
					label="Sort order"
					name="sortOrder"
					value={order}
					items={[
						{ id: 0, name: 'Ascending' },
						{ id: 1, name: 'Descending' }
					]}
					onChange={(event: any) => handleOrderChange(event)}
					required={false}
				/>
			</Grid>
			<Grid item >
				<form className={groupSearchWrapper}>
					<SvgIcon className={searchIcon}>
						<ApexSearchIcon />
					</SvgIcon>
					<InputBase
						name="searchTerm"
						placeholder={`Search by name`}
						autoComplete="off"
						classes={{
							root: 'inputRoot',
							input: 'inputText'
						}}
						inputProps={{ 'aria-label': 'search' }}
						onChange={handleSearchChange}
						value={searchText}
					/>
				</form>
			</Grid>
			<Grid item>
				<div className={filterGroup}>
					<SvgIcon>
						<ApexFilterIcon />
					</SvgIcon>
					<SvgIcon className={filterIconSelect}>
						<SelectIcon />
					</SvgIcon>
				</div>
			</Grid>
		</Grid>
	);
};

export default SearchGroup;
