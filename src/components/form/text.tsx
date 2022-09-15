import React, { forwardRef } from 'react';
import {
	TextField as MuiTextField,
	TextFieldProps as MuiTextFieldProps,
	withStyles
} from '@material-ui/core';
import colors from 'utils/colors';

export type TextFieldProps = Pick<
	MuiTextFieldProps,
	'value' | 'onChange' | 'required' | 'label' | 'name'
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
			font: 'Libre Franklin',
			fontSize: '20px',
			lineHeight: '24px',
			fontWeight: 'bold',
			color: colors.apexBlue,
			padding: '4px 0px'
		}
	}
};

const StyledTextField = withStyles(styles)(MuiTextField);

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ value, onChange, required, label, name, ...props }, ref) => {
		if(label === 'Phone Number' || label === 'Phone Number 2' || label === 'Phone Number 3'){
		return (
			<StyledTextField
				{...props}
				color="secondary"
				label={label}
				id={`lmsBuildingsInput${name}`}
				name={name}
				onChange={onChange}
				required={required}
				value={value}
				InputLabelProps={{
					shrink: true
				}}
				inputProps={{ maxLength: 15 }}
				fullWidth
				ref={ref}
				onKeyPress={(event) => {
				const number = /[^0-9\+]/g;
				if (event?.key.match(number) || event?.key === 'e' || event?.key === 'E') {
					event.preventDefault();
				}
				}}
			/>
		);
		} else {
			return (
				<StyledTextField
					{...props}
					color="secondary"
					label={label}
					id={`lmsBuildingsInput${name}`}
					name={name}
					onChange={onChange}
					inputProps={{ maxLength: 250 }}
					required={required}
					value={value}
					InputLabelProps={{
						shrink: true
					}}
					fullWidth
					ref={ref}
				/>
			);
		}
	}
);

export default TextField;
