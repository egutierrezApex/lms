import { createReducer } from '../../utils/createReducers';
import WorkStationsActionTypes from '../types/workStations.type';
import {IWorkStations} from '../../workStations/types/workStationsInterfaces';

export default createReducer(null,{
    [WorkStationsActionTypes.SET_SELECTED_WORKSTATION]:(data:IWorkStations):IWorkStations => data
});