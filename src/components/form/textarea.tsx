import React, { forwardRef } from 'react';
import {
	TextField as MuiTextField,
	TextFieldProps as MuiTextFieldProps,
	withStyles
} from '@material-ui/core';
import colors from 'utils/colors';

export type TextAreaProps = Pick<
	MuiTextFieldProps,
	'value' | 'onChange' | 'required' | 'label' | 'name' | 'rows'
>;

const styles = {
	root: {
		'& label.Mui-focused': {
			fontSize: '12px'
		},
		'& label': {
			fontSize: '16px'
		},
		'& .MuiInput-input': {
			fontSize: '20px',
			fontWeight: 'bold',
			color: colors.apexBlue,
			padding: '4px 0px'
		}
	}
};

const StyledTextArea = withStyles(styles)(MuiTextField);

const TextareaField = forwardRef<HTMLInputElement, TextAreaProps>(
	({ value = '', onChange, required, label, name, rows }, ref) => {
		return (
			<StyledTextArea
				color="secondary"
				label={label}
				multiline
				name={name}
				id={`lmsBuildingsTextArea${name}`}
				required={required}
				rows={rows}
				value={value}
				onChange={onChange}
				InputLabelProps={{
					shrink: true
				}}
				fullWidth
				ref={ref}
			/>
		);
	}
);

export default TextareaField;
