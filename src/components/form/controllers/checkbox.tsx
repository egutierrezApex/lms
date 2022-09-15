import { Control, Controller } from 'react-hook-form';
import React from 'react';
import Checkbox from '../checkbox';

type FormCheckboxProps = {
	label: string;
	control: Control;
	name: string;
	required?: boolean;
};

export const FormCheckbox = ({ label, name, control, required }: FormCheckboxProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => (
				<Checkbox checked={Boolean(value)} name={name} onChange={onChange} label={label} required={required} />
			)}
		/>
	);
};
