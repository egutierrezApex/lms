import Types from './types'
import { IZoneQuery } from 'types/zones/state';
import initialState from '../reducers/initialState';
import { IZone } from 'types/shared';

const get_zones = (query: IZoneQuery = initialState.query) => ({
  type: Types.GET_ZONES, query,
});
const set_loading_zones = (isLoading: boolean) => ({
  type: Types.SET_LOADING_ZONES, isLoading,
});
const set_zones = (zones: Array<IZone>) => ({
  type: Types.SET_ZONES, zones,
});
const get_zone = (zoneId: string) => ({
  type: Types.GET_ZONE, zoneId,
});
const set_zone = (zone: IZone) => ({
  type: Types.SET_ZONE, zone,
});

export default {
  get_zones,
  set_loading_zones,
  set_zones,
  get_zone,
  set_zone,
}