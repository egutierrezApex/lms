import { combineReducers } from 'redux';
import { Reducer } from "redux";
import currentPage from './currentPage';
import name from './name';
import sort from './sort';
import { IQuery, IWorkStationQueryActionTypes } from '../../types/workStationsInterfaces';


const queryReducer = combineReducers({
    currentPage,
    name,
    sort
}) as Reducer<IQuery, IWorkStationQueryActionTypes>;

export default queryReducer;