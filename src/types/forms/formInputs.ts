export interface ISelectItem {
	id: number;
	name: string;
}

export interface ISelect {
	labelId: string;
	value: number | string;
	handleChange: (
		event: React.ChangeEvent<{ name?: string; value: unknown }>,
		child: React.ReactNode
	) => void;
	items: Array<ISelectItem>;
	required: boolean;
}

export interface IInputCommon {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required: boolean;
}
