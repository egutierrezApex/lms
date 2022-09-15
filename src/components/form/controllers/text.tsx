import { Control, Controller } from 'react-hook-form';
import React from 'react';
import TextField from '../text';


type FormTextFieldProps = {
	label: string;
	control: Control;
	name: string;
	required?: boolean;
};

export const FormTextField = ({ label, name, control, required }: FormTextFieldProps) => {
		return (
				<Controller
					name={name}
					control={control}
					render={({ field: { onChange, value = '' } }) => (
						<TextField value={value} name={name} onChange={onChange} label={label} required={required} />
				)}
				/>
			)
};
