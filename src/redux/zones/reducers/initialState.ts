import { IZone } from 'types/shared';

const defaultZone: IZone = {
	id: 0,
	name: '',
	description: '',
	floorId: 0,
	floorName: '',
	areadByFigure: {
		id: 0,
		figureId: 0,
		figureName: '',
		description: '',
		height: 0,
		width: 0
	},
	x: 0,
	y: 0,
	links: []
};
export default {
	isLoading: false,
	selectedZone: defaultZone,
	zonesByPage: [],
	zones: {},
	currentZone: defaultZone,
	query: {
		limit: 10,
		offset: 0,
		sortField: '',
		sortOrder: 'desc'
	}
};
