import { fieldMap } from 'utils/forms/types';

export type FieldValues = {
	name: string;
	shortName: string;
	country: number;
	state: number;
	city: number;
	phoneNumber1: string;
	phoneNumber2: string;
	phoneNumber3: string;
	description: string;
	address: string;
	isDraft: boolean;
};

export const fields: fieldMap = {
	name: {
		label: 'Name',
		isRequired: true,
		type: 'text'
	},
	shortName: {
		label: 'Short Name',
		isRequired: true,
		type: 'text'
	},
	country: {
		label: 'Country',
		isRequired: true,
		type: 'select',
		items: [{ name: 'Mexico', id: 1 }],
		defaultValue: 1
	},
	state: {
		label: 'State',
		isRequired: true,
		type: 'select',
		items: [{ name: 'Jalisco', id: 1 }],
		defaultValue: 1
	},
	city: {
		label: 'City',
		isRequired: true,
		type: 'select',
		items: [{ name: 'Guadalajara', id: 1 }],
		defaultValue: 1
	},
	phoneNumber1: {
		label: 'Phone Number',
		isRequired: false,
		type: 'phone'
	},
	phoneNumber2: {
		label: 'Phone Number 2',
		isRequired: false,
		type: 'phone'
	},
	phoneNumber3: {
		label: 'Phone Number 3',
		isRequired: false,
		type: 'phone'
	},
	description: {
		label: 'Description',
		isRequired: false,
		type: 'textarea'
	},
	address: {
		label: 'Address',
		isRequired: false,
		type: 'textarea'
	},
	isDraft: {
		label: 'Draft',
		isRequired: false,
		type: 'checkbox'
	}
};
