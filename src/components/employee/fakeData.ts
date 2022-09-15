import { IEmployee, ISeat } from 'types/shared';

const employee: IEmployee = {
	id: 222,
	name: 'Crystian',
	lastName: 'Carranco',
	fullName: 'Crystian Carranco',
	active: true,
	workingRemotely: false,
	projectId: 4,
	projectName: 'Dell',
};

const seat: ISeat = {
	id: 12,
	buildingId: 1,
	buildingName: 'APEX Systems México',
	floorId: 1,
	floorName: 'Piso 18',
	zoneId: 1,
	zoneName: 'Dinning Room, Kitchen and Reception',
	workStationId: 1,
	workStationName: 'WorkStation A',
	areaByFigure: {
		id: 13,
		figureId: 1,
		figureName: 'Rectangle',
		description: 'desktop',
		height: 1,
		width: 1,
	},
	employeeId: 192,
	firstName: 'Marco ',
	lastName: 'Mendieta',
	x: 0,
	y: 9,
	seatState: {
		id: 2,
		name: 'In Use',
		description: 'A local employee is using this seat currently',
	},
};

export default {
	employee,
	seat,
};
