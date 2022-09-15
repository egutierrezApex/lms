import { createReducer } from '../../../utils/createReducers';
import WorkStationsActionTypes from '../../types/workStations.type'
import { Reducer } from "redux";
import { IWorkStationSetNameQueryAction, IWorkStationQueryActionTypes } from '../../types/workStationsInterfaces';

const INITIAL_STATE: string = ''

export default createReducer(INITIAL_STATE, {
    [WorkStationsActionTypes.SET_NAME_QUERY]: (state: typeof INITIAL_STATE , action:IWorkStationSetNameQueryAction): string => action.payload
  }) as Reducer<string, IWorkStationQueryActionTypes>