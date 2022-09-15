import { createReducer } from '../../../utils/createReducers';
import WorkStationsActionTypes from '../../types/workStations.type'
import { Reducer } from "redux";
import { IWorkStationSetSortAction, ISort, IWorkStationQueryActionTypes } from '../../types/workStationsInterfaces';


const sort: ISort = {
  field: "Id" ,
  order: "asc" 
}

const INITIAL_STATE: ISort = sort

export default createReducer(INITIAL_STATE, {
    [WorkStationsActionTypes.SET_SORT]: (state: typeof INITIAL_STATE , action:IWorkStationSetSortAction): ISort => action.payload
  }) as Reducer<ISort, IWorkStationQueryActionTypes>