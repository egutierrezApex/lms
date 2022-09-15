import WorkStationsActionTypes from './workStations.type';
import { IFloor } from 'types/shared';

export interface IWorkStationSetErrorAction {
    type: typeof WorkStationsActionTypes.SET_ERROR
    payload: string
}

export interface IWorkStationGetWorkStationsAction {
    type: WorkStationsActionTypes.GET_WORKSTATIONS_COLLECTION,
    payload: string
}

export interface IWorkStationSetNameQueryAction {
    type: WorkStationsActionTypes.SET_NAME_QUERY,
    payload: string
}

export interface IWorkStationSetCurrentPageAction {
    type: WorkStationsActionTypes.SET_CURRENT_PAGE,
    payload: number
}

export interface IWorkStationSetSortAction {
    type: WorkStationsActionTypes.SET_SORT,
    payload: ISort
}

export interface IWorkStationSetLoading {
    type: WorkStationsActionTypes.SET_LOADING,
    payload: boolean
}

export interface IWorkStationSetSelectedWorkStationAction {
    type: WorkStationsActionTypes.SET_SELECTED_WORKSTATION
    payload: IWorkStation
}

export interface ISetWorkStationWorkStationAction {
    type: WorkStationsActionTypes.SET_WORKSTATION_COLLECTION
    payload: Array<IWorkStation>
}

export type IWorkStationQueryActionTypes =
| IWorkStationSetNameQueryAction
| IWorkStationSetCurrentPageAction
| IWorkStationSetSortAction;

export type IWorkStationsActionTypes =
    | IWorkStationSetErrorAction
    | IWorkStationGetWorkStationsAction
    | ISetWorkStationWorkStationAction
    | IWorkStationQueryActionTypes;

    export interface IWorkStation {
        zoneId: number,
        areaByFigureId: number,
        name: string,
        description: string,
        NumberOfSeats: number,
        x:string,
        y:string
    }
    
    export interface IWorkStationsOptions {
        buildingId: number,
        buildName: number,
        floor: IFloor,
        description: string,
        NumberOfSeats: number,
        x:string,
        y:string
    }
    
    export interface IQuery{
        name: string,
        sort: ISort,
        currentPage: number
    }
    
    export interface ISort{
        field: string,
        order: string
    }
    export interface IWorkStations{
        //workstationOptions: null | IWorkStationsOptions|null,
        workstationsCollection: null | Array<IWorkStation>,
        isLoading: boolean,
        error:null |string,
        query: IQuery
    }