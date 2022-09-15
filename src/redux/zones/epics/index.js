import { combineEpics } from 'redux-observable';
import { getZonesEpic, getZoneEpic } from './get';

export default combineEpics(getZonesEpic, getZoneEpic);
