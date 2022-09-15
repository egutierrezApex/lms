import { IZoneInitialState } from '../../../types/zones/state';

export default (state: IZoneInitialState, action: any) => {
  const { zones } = action;
  const zonesById = zones.reduce((zonesR: any, zone: any) => {
    zonesR[`zone-${zone.id}`] = zone;
    return zonesR;
  }, {})
  const stateZones = { ...state.zones, ...zonesById }
  const newState = {
    ...state,
    zones: stateZones,
    zonesByPage: zones,
    isLoading: false,
  }
  return newState;
}