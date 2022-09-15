import zoneTypes from '../actions/types';
import { IZoneInitialState } from '../../../types/zones/state';
import setLoading from './setLoading';
import getZones from './getZones';
import setZones from './setZones';
import getZone from './getZone';
import setZone from './setZone';
import initialState from './initialState'

const zonesReducer = (state: IZoneInitialState = initialState, action: any) => {
  const { type } = action;
  if (type === zoneTypes.SET_LOADING_ZONES)
    return setLoading(state, action);
  if (type === zoneTypes.GET_ZONES)
    return getZones(state, action);
  if (type === zoneTypes.SET_ZONES)
    return setZones(state, action);
  if (type === zoneTypes.GET_ZONE)
    return getZone(state, action);
  if (type === zoneTypes.SET_ZONE)
    return setZone(state, action);

  return state;
}

export default zonesReducer;
