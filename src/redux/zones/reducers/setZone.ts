import { IZoneInitialState } from '../../../types/zones/state';

export default (state: IZoneInitialState, action: any) => {
  const { zone } = action;
  const stateZones = { ...state.zones, ...{ [`zone-${zone.id}`]: zone } };
  const newState = {
    ...state,
    zones: stateZones,
    isLoading: false,
    currentZone: zone,
  }
  return newState;
}