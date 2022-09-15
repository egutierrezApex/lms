import { createReducer } from '../../utils/createReducers';
import WorkStationsActionTypes from '../types/workStations.type'
import { Reducer } from "redux";
import { IWorkStationSetErrorAction, IWorkStationsActionTypes } from '../../workStations/types/workStationsInterfaces';

const INITIAL_STATE: null | string = null

export default createReducer(INITIAL_STATE, {
  [WorkStationsActionTypes.SET_ERROR]: (state: typeof INITIAL_STATE , action:IWorkStationSetErrorAction): string => action.payload,
  [WorkStationsActionTypes.GET_WORKSTATIONS_COLLECTION]: (): null => null
}) as Reducer<null | string, IWorkStationsActionTypes>