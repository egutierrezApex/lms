import { getWorkStationsEpic, setQueryEpic } from './epics';
import { combineEpics } from 'redux-observable';

export default combineEpics(getWorkStationsEpic, setQueryEpic);
