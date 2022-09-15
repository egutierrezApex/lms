import { Reducer } from "redux";
import { createReducer } from '../../utils/createReducers';
import WorkStationsActionTypes from '../types/workStations.type';
import {IWorkStation, IWorkStationGetWorkStationsAction, ISetWorkStationWorkStationAction, IWorkStationsActionTypes} from '../types/workStationsInterfaces';



const INITIAL_STATE: null | Array<IWorkStation>  = null

export default createReducer(INITIAL_STATE,{
    [WorkStationsActionTypes.GET_WORKSTATIONS_COLLECTION]:(state:typeof INITIAL_STATE, action:IWorkStationGetWorkStationsAction): null => null,
    [WorkStationsActionTypes.SET_WORKSTATION_COLLECTION]:(state:typeof INITIAL_STATE, action:ISetWorkStationWorkStationAction): Array<IWorkStation> => action.payload  
}) as Reducer<null | Array<IWorkStation>, IWorkStationsActionTypes>