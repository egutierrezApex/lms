import { IZoneInitialState } from '../../../types/zones/state';

export default (state: IZoneInitialState, action: any) => {
  const { isLoading } = action;
  const newState = { ...state, isLoading };
  return newState;
}