import React, { useEffect, useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as ApexSearchIcon } from 'assets/icons/search.svg';
import DisplayResults from '../header/searchResults.component';
import SearchResultsModal from 'components/modals/searchResults/searchResult.component';
import FilterComponent from './filter';
import { IEmployee } from 'types/shared';
import { useDispatch } from 'react-redux';
import { setSelectedEmpoyee } from 'redux/employees/actions';
import { useNavigate } from 'react-router';
interface SearchComponentProps {
	beginSearch: (filterSearch: string, searchText: string) => void;
	searchResults: IEmployee[] | null;
	clearResults: () => void;
	error: boolean;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
	beginSearch,
	searchResults,
	clearResults,
	error,
}) => {
	const dispatch = useDispatch();
	const [loadMoreModal, setLoadMoreModal] = useState(false);
	const [filterSearch, setfilterSearch] = useState<string>('Name');
	const [searchText, setSearchText] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener('click', (evt) => {
			var target = evt.target as HTMLElement;
			var searchContainer = document.querySelector('form.searchWrapper');
			var externalContainer = document.querySelector('div#special_region');
			if (
				!searchContainer?.contains(target) &&
				!externalContainer?.contains(target) &&
				target.id !== 'special_region'
			)
				clearSearch();
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const clearSearch = () => {
		clearResults();
		setSearchText('');
	};

	const handleSearchChange = (e: any) => {
		const { value } = e.target;
		if (value === '') clearResults();
		setSearchText(value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		beginSearch(filterSearch, searchText);
	};

	const closeModal = () => {
		clearSearch();
		setLoadMoreModal(false);
	};

	const selectUser = (employee: IEmployee) => {
		dispatch(setSelectedEmpoyee(employee));
		clearSearch();
		setLoadMoreModal(false);
		navigate('/assign-seats');
	};

	return (
		<>
			<form className="searchWrapper" onSubmit={handleSubmit}>
				<div className={'searchResults ' + (searchResults ? 'show' : 'hide')}>
					{(searchResults || error) && (
						<DisplayResults
							data={searchResults}
							filter={filterSearch}
							error={error}
							loadMore={() => setLoadMoreModal(true)}
							onSelect={selectUser}
						/>
					)}
				</div>
				<SvgIcon className="searchIcon">
					<ApexSearchIcon />
				</SvgIcon>
				<InputBase
					id="lmsHeaderSearchInput"
					name="searchTerm"
					placeholder={`Search by ${filterSearch}…`}
					autoComplete="off"
					classes={{
						root: 'inputRoot',
						input: 'inputText',
					}}
					inputProps={{ 'aria-label': 'search' }}
					onChange={handleSearchChange}
					value={searchText}
				/>
				<span
					className={'dismiss ' + (searchResults ? 'show' : 'hide')}
					onClick={clearSearch}
				>
					X
				</span>
			</form>
			<FilterComponent selected={filterSearch} setFilter={setfilterSearch} />

			<div id="special_region">
				<SearchResultsModal
					show={loadMoreModal}
					active={filterSearch}
					closeModal={closeModal}
					data={searchResults}
					onSelect={selectUser}
				/>
			</div>
		</>
	);
};

export default SearchComponent;
