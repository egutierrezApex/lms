import { IZoneInitialState } from '../../../types/zones/state';

export default (state: IZoneInitialState, action: any) => {
  const newState = {
    ...state,
    isLoading: true,
  }
  return newState;
}