export interface IAreaByFigure {
	id: number;
	figureId: number;
	figureName: string;
	description: string;
	height: number;
	width: number;
	radius?: number;
	points?: string;
}

export interface ILink {
	href: string;
	rel: string;
	method: string;
}

export interface IEmployee {
	id: number;
	name: string;
	lastName: string;
	fullName: string;
	active: boolean;
	workingRemotely: boolean;
	projectId: number;
	projectName: string;
}
export interface ISeatState {
	id: number;
	name: 'Available' | 'In Use' | 'Reserved for guests' | 'Pool seat';
	description?: string;
}

export interface ISeat {
	id: number;
	buildingId?: number;
	buildingName?: string;
	description?: string;
	floorId?: number;
	floorName?: string;
	zoneId?: number;
	zoneName?: string;
	workStationId?: number;
	workStationName?: string;
	areaByFigure?: IAreaByFigure;
	employeeId?: number;
	firstName?: string;
	lastName?: string;
	x: number;
	y: number;
	seatState: ISeatState;
}

export interface IBuilding {
	id: number;
	name: string;
	shortName: string;
	description: string;
	countryName: string;
	countryId: string;
	stateName: string;
	stateId: string;
	cityName: string;
	cityId: string;
	address: string;
	phoneNumber1: string;
	phoneNumber2: string;
	phoneNumber3: string;
}

export interface IWorkStation {
	id: number;
	name: string;
	description: string;
	numberOfSeats: number;
	zoneId: number;
	zoneName: string;
	rotate?: number;
	areaByFigure: IAreaByFigure;
	x?: number;
	y?: number;
	seats: ISeat[];
	links: ILink[];
}

export interface IFloor {
	id: number;
	name: string;
	description?: string;
	buildingId: number;
	buildingName: string;
	areaByFigure: IAreaByFigure;
	x: number;
	y: number;
	links: ILink[];
}

export interface IZone {
	id: number;
	name: string;
	description?: string;
	floorId: number;
	floorName: string;
	areadByFigure: IAreaByFigure;
	x: number;
	y: number;
	links: ILink[];
}

export interface Cities {
	id: number;
	countryId: number;
	stateId: number;
	name: string;
	description: string;
}

export interface States {
	id: number;
	countryId: number;
	name: string;
	description: string;
}

export interface Countries {
	id: number;
	name: string;
	description: string;
}

export interface IGroup {
	id?: number;
    name: string;
    description: string;
    active: boolean;
    links: Array<IGroupLink>
}
export interface IGroupLink  {
	href: string;
	rel: string;
	method: string;
}

export interface IEmployeeGroup {
	employeeId: number;
    groupId: number;
    groupName: string;
    groupDescription: string;
    employeeName: string;
    employeeLastName: string;
}