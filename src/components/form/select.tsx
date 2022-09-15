import React from 'react';
import {
	FormControl,
	InputLabel,
	Select as MuiSelect,
	SelectProps as MuiSelectProps,
	MenuItem,
	makeStyles
} from '@material-ui/core';
import { ReactComponent as selectIcon } from 'assets/icons/select-icon.svg';
import colors from 'utils/colors';

const useStyles = makeStyles({
	icon: {
		height: '9px',
		margin: 'auto',
		padding: '6px'
	},
	root: {
		textAlign: 'left',
		fontSize: '20px',
		lineHeight: '24px',
		color: colors.apexBlue,
		font: 'Libre Franklin',
		letterSpacing: '0px',
		opacity: '1',
		fontWeight: 'bold'
	}
});

export type itemProps = {
	name: string;
	id: string | number;
};
export type SelectProps = MuiSelectProps & {
	items: itemProps[];
	label?: string;
	required?: boolean;
	name: string;
};

const Select = (props: SelectProps) => {
	const { label, labelId, items, id, required, name } = props;
	const classes = useStyles();

	return (
		<FormControl fullWidth>
			<InputLabel shrink={true} htmlFor={id} id={labelId}>
				{label}
			</InputLabel>
			<MuiSelect
				id={`lmsBuildingInput${name}`}
				required={required}
				inputProps={{
					classes: {
						icon: classes.icon,
						root: classes.root
					}
				}}
				IconComponent={selectIcon}
				color="secondary"
				{...props}
			>
				{items.map((item) => (
					<MenuItem key={Symbol(item.id).toString()} value={item.id}>
						{item.name}
					</MenuItem>
				))}
			</MuiSelect>
		</FormControl>
	);
};

export default Select;
