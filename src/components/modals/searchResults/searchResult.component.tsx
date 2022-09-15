import React from 'react';
import { IEmployee } from 'types/shared';
import '../modals.styles.scss';

const Empty = () => (
	<React.Fragment>
		<div className="overlay hide"></div>
		<div className="modal hide"></div>
	</React.Fragment>
);

function ResultItem(item: IEmployee, onSelect: (employee: IEmployee) => void) {
	return (
		<div
			key={item.id}
			className="modal__search-result"
			onClick={() => onSelect(item)}
		>
			<span className="modal__search-result-name">
				{item.name} {item.lastName}
			</span>
			<span className="modal__search-result-project">{item.projectName}</span>
		</div>
	);
}

function Populated(
	active: string,
	collection: IEmployee[],
	show: boolean,
	closeModal: () => void,
	onSelect: (employee: IEmployee) => void
) {
	var rows = collection.map((item) => ResultItem(item, onSelect));
	const hideActionEvent = () => {
		closeModal();
	};
	const hideToggler = show ? 'show' : 'hide';
	return (
		<React.Fragment>
			<div className={'overlay ' + hideToggler} onClick={hideActionEvent}></div>
			<div className={'modal ' + hideToggler}>
				<span className="modal__close-btn" onClick={hideActionEvent}>
					X
				</span>
				<h3 className="modal__title">Results for {active}</h3>
				<div className="modal__scrollable">{rows}</div>
			</div>
		</React.Fragment>
	);
}

interface SearchResultModalProps {
	data: IEmployee[] | null;
	show: boolean;
	active: string;
	closeModal: () => void;
	onSelect: (employee: IEmployee) => void;
}

const SearchResultModal: React.FC<SearchResultModalProps> = ({
	data,
	show,
	active,
	closeModal,
	onSelect,
}) => {
	if (!show || !data) return Empty();

	return Populated(active, data, show, closeModal, onSelect);
};

export default SearchResultModal;
