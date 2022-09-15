import React from 'react';
import {
	FormControlLabel,
	Checkbox as MuiCheckbox,
	CheckboxProps as MuiCheckboxProps,
	withStyles,
	Box
} from '@material-ui/core';
import colors from 'utils/colors';

export type CheckboxProps = Pick<MuiCheckboxProps, 'onChange' | 'checked' | 'name' | 'required'> & {
	label: string;
};

const styles = {
	root: {
		'& span.MuiButtonBase-root': {
			paddingRight: '6px'
		}
	}
};

const StyledCheckbox = withStyles(styles)(MuiCheckbox);

const Checkbox: React.FC<CheckboxProps> = ({ checked, label, onChange, name, required }) => (
	<FormControlLabel
		control={
			<StyledCheckbox checked={checked} onChange={onChange} name={name} required={required} id={`lmsBuildingsCheckbox${name}`} />
		}
		label={
			<Box
				fontFamily={'Libre Franklin'}
				fontSize={'16px'}
				lineHeight={'24px'}
				fontWeight={'bold'}
				color={colors.apexBlue}
			>
				{label}
			</Box>
		}
	/>
);

export default Checkbox;
