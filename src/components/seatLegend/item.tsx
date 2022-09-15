import React from 'react';
import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import styles from './styles';
import { colorsConfig } from 'utils/colors';

interface LegendItemProps {
	last?: boolean;
	label: string;
	number: number;
}

const LegendItem: React.FC<LegendItemProps> = ({ last, label, number }) => {
	const getColor = (key: string) => {
		return colorsConfig[key] ? colorsConfig[key] : colorsConfig['default'];
	};
	const { listItem, lastListItem, avatar } = styles(getColor(label));

	return (
		<ListItem className={`${listItem} ${last ? lastListItem : ''}`}>
			<ListItemAvatar className={avatar}>
				<>{number}</>
			</ListItemAvatar>
			<ListItemText>{label}</ListItemText>
		</ListItem>
	);
};

export default LegendItem;
