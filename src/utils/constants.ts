export const apiURL = process.env.REACT_APP_API;

export type QueryParams = {
	value?: string;
	limit?: number;
	offset?: number;
	sort?: string;
};

export const styleConstants = {
	headerHeight: '80px',
	headerToContentOffset: '20px',
};