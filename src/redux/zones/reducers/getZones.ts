import { IZoneInitialState } from '../../../types/zones/state';
import initialState from './initialState'

export default (state: IZoneInitialState, action: any) => {
  const { query } = action;
  const newQuery = { ...initialState.query, ...query };
  const newState = {
    ...state,
    isLoading: true,
    query: newQuery,
  }
  return newState;
}