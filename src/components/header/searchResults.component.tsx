import React from "react";
import "./searchResults.styles.scss"
import 'utils/buttons.scss';
import { IEmployee } from 'types/shared';

function Many(
	data: IEmployee[],
	filter: string,
	loadMore: () => void,
	onSelect: (employee: IEmployee) => void
) {
	const limit = 8;

	if (data.length >= limit) {
		data = data.slice(0, limit);
	}

	const consultantList = data.map((item) => (
		<div className="itemResult" key={item.id} onClick={() => onSelect(item)}>
			<span className="consultantName">
				{item.name} {item.lastName}
			</span>
			<span className="consultantProject">{item.projectName}</span>
			<span
				className={'statusCircle  ' + (item.active ? 'active' : 'inactive')}
			/>
		</div>
	));

	return (
		<div className="resultContainer" key={filter}>
			<div className="filter">{filter}</div>
			{consultantList}
			{data.length >= limit && (
				<a
					className="btn btn-secondary"
					onClick={() => {
						loadMore();
					}}
				>
					Load More
				</a>
			)}
		</div>
	);
}

const Empty = () => (
	<div className="resultContainer noResults">No results from this search</div>
);

const Invalid = () => (
	<div className="resultContainer error">An error occurred, try again</div>
);

interface DisplayResultsProps {
	data: IEmployee[] | null;
	filter: string;
	error: boolean;
	loadMore: () => void;
	onSelect: (employee: IEmployee) => void;
}

const DisplayResults: React.FC<DisplayResultsProps> = ({
	data,
	filter,
	error,
	loadMore,
	onSelect,
}) => {
	if (error) return Invalid();
	if (!data || data.length === 0) return Empty();

	return Many(data, filter, loadMore, onSelect);
};

export default DisplayResults;
