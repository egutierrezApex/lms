import { TextField } from '@material-ui/core';
import {
	FormCheckbox,
	FormSelect,
	FormTextareaField,
	FormTextField
} from 'components/form/controllers';
import React from 'react';
import { fieldMap } from './types';

interface fieldGeneratorProps {
	fields: fieldMap;
	value: string;
	control: any;
}


export const FieldGenerator = ({ fields, value, control }: fieldGeneratorProps) => {
	const field = fields[value];
	const { label } = field;


	if (field.type === 'text' || field.type === 'phone' )
		return (
			<FormTextField label={label} name={value} control={control} required={field.isRequired} />			
		);
	if (field.type === 'textarea')
		return (
			<FormTextareaField label={label} name={value} control={control} required={field.isRequired} />
		);
	if (field.type === 'checkbox')
		return (
			<FormCheckbox label={label} name={value} control={control} required={field.isRequired} />
		);
	if (field.type === 'select')
		return (
			<FormSelect
				label={label}
				name={value}
				control={control}
				items={field.items || []}
				required={field.isRequired}
			/>
		);
	return <></>;
};
