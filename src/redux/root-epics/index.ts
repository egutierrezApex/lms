import { combineEpics } from 'redux-observable';
import { loadEmployees, loadEmployeesAsync } from '../home/home.epics';
import { makeRequestEpic } from './makeRequest';
// import {getWorkStationsEpic, setQueryEpic} from '../workStations/epics/epics';
import workStationsEpics from '../workStations/epics';
import zonesEpics from '../zones/epics';

export const rootEpic = combineEpics(
    loadEmployees,
    loadEmployeesAsync,
    makeRequestEpic,
    workStationsEpics,
    zonesEpics,
);
