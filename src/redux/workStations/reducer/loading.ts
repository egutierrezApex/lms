import { Reducer } from "redux";
import { createReducer } from 'redux/utils/createReducers';
import WorkStationsActionTypes from '../types/workStations.type';
import { IWorkStationsActionTypes } from 'redux/workStations/types/workStationsInterfaces';

const INITIAL_STATE: boolean = false
export default createReducer(INITIAL_STATE, {
    [WorkStationsActionTypes.GET_WORKSTATIONS_COLLECTION]: (state: boolean , action:boolean): boolean => true,
    [WorkStationsActionTypes.SET_WORKSTATION_COLLECTION]: (state: boolean , action:boolean): boolean => false
}) as Reducer<boolean, IWorkStationsActionTypes>;

