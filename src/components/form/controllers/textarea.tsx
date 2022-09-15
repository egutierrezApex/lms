import { Control, Controller } from 'react-hook-form';
import React from 'react';
import TextareaField from '../textarea';

type TextareaFieldProps = {
	label: string;
	control: Control;
	name: string;
	rows?: number;
	required?: boolean;
};

export const FormTextareaField = ({
	label,
	name,
	control,
	rows = 2,
	required
}: TextareaFieldProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value = '' } }) => (
				<TextareaField
					value={value}
					name={name}
					onChange={onChange}
					label={label}
					rows={rows}
					required={required}
				/>
			)}
		/>
	);
};
