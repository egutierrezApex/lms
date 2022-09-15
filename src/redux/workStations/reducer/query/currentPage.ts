import { createReducer } from '../../../utils/createReducers';
import WorkStationsActionTypes from '../../types/workStations.type'
import { Reducer } from "redux";
import { IWorkStationSetCurrentPageAction,IWorkStationQueryActionTypes } from '../../types/workStationsInterfaces';

const INITIAL_STATE: number = 0

export default createReducer(INITIAL_STATE, {
    [WorkStationsActionTypes.SET_CURRENT_PAGE]: (state: typeof INITIAL_STATE , action:IWorkStationSetCurrentPageAction): number => action.payload
  }) as Reducer<number, IWorkStationQueryActionTypes>