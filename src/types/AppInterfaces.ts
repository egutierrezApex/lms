import { ChangeEvent, ReactElement } from 'react';
import { Reducer, CombinedState } from 'redux';
import { WebStorage } from 'redux-persist';
import rootReducer from '../redux/root-reducer';
import { HomeActionTypes } from '../redux/home/home.types';
import { LayoutActionTypes } from '../redux/layout/layout.types';
import { IWorkStations } from '../redux/workStations/types/workStationsInterfaces';
import rootTypes from '../redux/root.types';
import { IZoneInitialState } from './zones/state';
import { IEmployee } from './shared';
import { BuildingInitialState } from 'redux/buildings/types';
import { FloorsInitialState } from 'redux/floors/types';
import { GroupInitialState } from 'redux/groups/types';

export type IAppState = ReturnType<typeof rootReducer>;

export type TabsInfo = {
	showTabs: boolean;
	tabIndex: number;
};
export interface IHomeReduxState {
	tabs: TabsInfo;
	filters: IFilters;
	isFetching: boolean;
	employeesData: IEmployeesData[];
	errorMessage?: string;
}

export interface IBuildingData {
	id: number;
	name: string;
	shortName: string;
	phoneNumber1: string;
	phoneNumber2: string;
	phoneNumber3: string;
	address: string;
	description: string;
	countryId: number;
	countryName: string;
	stateId: number;
	stateName: string;
	cityId: number;
	cityName: string;
	totalFloors: number;
	totalBusySeats: number;
	totalAvailableSeats: number;
	fileLocations: any[];
	links: string | undefined;
}

export interface ISearchResult {
	id: number;
	projectId: number;
	projectName: string;
	name: string;
	lastName: string;
	active: boolean;
}

export interface IResultSetOptions {
	data: Record<string, ISearchResult[]>;
}

export interface IHomeState {
	user: string;
	comboBox: {
		locations: {
			[key: string]: {
				floors: {
					[key: string]: {
						sections: string[];
					};
				};
			};
		};
	};
}

export interface IDropDownListOptions {
	name: string;
	inputLabel: string;
	items: string[];
	handleSelect: (event: ChangeEvent<any>) => void;
	itemSelected: string;
}

export enum DrawMenuOptions {
	Figures,
	Workstations,
	Furniture,
	Edit,
	Delete,
	Save
}
export interface IDrawMenuProps {
	selected: DrawMenuOptions;
	onFiguresClick: () => void;
	onWorkstationsClick?: () => void;
	onFurnitureClick?: () => void;
	onEditClick: () => void;
	onDeleteClick: () => void;
	onSaveClick: () => void;
}

export interface IDrawOptionsBase {
	onFiguresClick: () => void;
	onWorkstationsClick?: () => void;
	onFurnitureClick?: () => void;
	onEditClick: () => void;
	onDeleteClick: () => void;
	onSaveClick: () => void;
}

export enum IType {
	floor,
	zones,
	workstation
}

export interface IDrawOptionsBase {
	onFiguresClick: () => void;
	onWorkstationsClick?: () => void;
	onFurnitureClick?: () => void;
	onEditClick: () => void;
	onDeleteClick: () => void;
	onSaveClick: () => void;
}

export interface IFilters {
	location: string;
	floor: string;
	section: string;
}

//IHomeActionsTypes
export interface IFilterLocationAction {
	type: typeof HomeActionTypes.FILTER_LOCATION;
	payload: IFilters;
}

export interface IFetchEmployeesStartAction {
	type: typeof HomeActionTypes.FETCH_EMPLOYEES_START;
}

export interface IFetchEmployeesSuccessAction {
	type: typeof HomeActionTypes.FETCH_EMPLOYEES_SUCCESS;
	payload: IEmployeesData[];
}

export interface IFetchEmployeesFailureAction {
	type: typeof HomeActionTypes.FETCH_EMPLOYEES_FAILURE;
	payload: string;
}

export interface HomeTabSelectionAction {
	type: typeof HomeActionTypes.HOME_TAB_SELECTION;
	payload: number;
}

export interface HomeTabShowAction {
	type: typeof HomeActionTypes.HOME_SHOW_TAB;
	payload: boolean;
}

export interface ILayoutElement {
	row?: number;
	column?: number;
	board?: Array<IBoard>;
	display?: boolean;
	control?: boolean;
	type: string | null;
	removeChairFromLayout?: (board: Array<IBoard>) => void;
}

export type IHomeActionTypes =
	| IFilterLocationAction
	| IFetchEmployeesStartAction
	| IFetchEmployeesSuccessAction
	| IFetchEmployeesFailureAction
	| HomeTabShowAction
	| HomeTabSelectionAction;

export interface IEmployeesData {
	name: string;
	project: string;
	id: number;
	location: {
		building: string;
		floor: string;
		section: string;
	};
}

export interface IPersistConf {
	key: string;
	storage: WebStorage;
	whitelist: string[];
}

interface IEmployeesInitialState {
	selectedEmployee?: IEmployee;
}
export interface IRootReducer {
	home: IHomeReduxState;
	layout: ILayoutReduxState;
	workStations: IWorkStations;
	zones: IZoneInitialState;
	employees: IEmployeesInitialState;
	buildings: BuildingInitialState;
	floors: FloorsInitialState;
	groups: GroupInitialState
}

export type ICombinedState = CombinedState<IRootReducer>;

export type IRootReducerType = Reducer<ICombinedState> | undefined;

/* Board Interfaces */
export interface ILayoutBlockProps {
	row: number;
	column: number;
	board: Array<IBoard>;
	addChairToLayout: (board: Array<IBoard>) => void;
	removeChairFromLayout: (board: Array<IBoard>) => void;
}

export interface ILayoutControlsProps {
	board: Array<IBoard>;
	addToLayout: (board: Array<IBoard>) => void;
	removeFromLayout: (board: Array<IBoard>) => void;
}

export interface ILayout {
	board: Array<IBoard>;
}

export interface ILayoutReduxState {
	board: Array<IBoard>;
}

export type IBoard = Array<IBoardElement>;

export interface IBoardElement {
	display: boolean;
	type: string | null;
}

export interface IDraggableElement {
	row: number;
	column: number;
	type?: string;
}

// Redux stuff
export interface IAddToLayout {
	type: typeof LayoutActionTypes.ADD_TO_LAYOUT;
	payload: Array<IBoard>;
}

export interface IRemoveFromLayout {
	type: typeof LayoutActionTypes.REMOVE_FROM_LAYOUT;
	payload: Array<IBoard>;
}

export interface IAddChairToLayout {
	type: typeof LayoutActionTypes.ADD_CHAIR;
	payload: Array<IBoard>;
}

export interface IRemoveChairFromLayout {
	type: typeof LayoutActionTypes.REMOVE_CHAIR;
	payload: Array<IBoard>;
}
export interface IRemoveChairFromLayout {
	type: typeof LayoutActionTypes.REMOVE_CHAIR;
	payload: Array<IBoard>;
}
export interface IAxiosConfig {
	//To do complete the config the axios
	baseURL: string;
	timeout: number;
	method: string;
	headers: null | any;
	paylod: null | any; //custom atrribute
	path: string | null; //custom attribute
}
export interface IMakeRequestAxios {
	type: typeof rootTypes.REQUEST;
	paylod: {
		config: IAxiosConfig;
		successCb: any;
		errorCb: any;
	};
}
export interface IHeaderState {
	resultCollection: Record<string, ISearchResult[]>;
	activeCollection: string;
	showCollection: boolean;
}

export interface IModalOptions {
	title: string;
	content: ReactElement;
	onClose(): void;
	isOpen: boolean;
	footer?: ReactElement;
	isError?: boolean;
	errorMessage?: string;
}

export type ILayoutActionTypes =
	| IAddToLayout
	| IRemoveFromLayout
	| IAddChairToLayout
	| IRemoveChairFromLayout;

export interface IWorkStation {
	area: IArea;
	workstationsData: IWorkStationData[];
}

export interface IWorkStationData {
	isActive: boolean;
	lineWidth: number;
	posX: number;
	posY: number;
	width: number;
	height: number;
	seat: ISeat;
}

export interface ISeat {
	name: string,
	consultantName: string,
	status: string
}

export interface IArea {
	width: number;
	height: number;
}

export interface IPosition{
	x:number,
	y:number
}
