import { createReducer } from '../../utils/createReducers';
import WorkStationsActionTypes from '../types/workStations.type'
import {IWorkStations} from '../../workStations/types/workStationsInterfaces';

export default createReducer(null,{
    [WorkStationsActionTypes.GET_WORKSTATIONS_OPTION]:(data:Array<IWorkStations>):Array<IWorkStations> => data
});