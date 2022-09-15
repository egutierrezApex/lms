import { Control, Controller } from 'react-hook-form';
import React from 'react';
import Select, { itemProps } from '../select';

type FormSelectProps = {
	label: string;
	control: Control;
	name: string;
	items: itemProps[];
	defaultValue?: number;
	required?: boolean;
};

export const FormSelect = ({
	label,
	name,
	control,
	items,
	defaultValue,
	required
}: FormSelectProps) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => (
				<Select
					name={name}
					value={value || ''}
					onChange={onChange}
					label={label}
					items={items}
					defaultValue={defaultValue}
					required={required}
				/>
			)}
		/>
	);
};
