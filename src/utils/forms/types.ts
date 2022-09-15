import { itemProps } from 'components/form/select';

export type fieldProps = {
	label: string;
	isRequired: boolean;
	type: string;
	items?: itemProps[];
	defaultValue?: number;
};

export type fieldMap = {
	[key: string]: fieldProps;
};
