import { combineReducers } from 'redux';
import error from './error';
import isLoading from './loading';
import workstationsCollection from './WorkstationsCollection';
import query from './query/index';

const workStationsReducer = combineReducers({
  error,
  isLoading,
  workstationsCollection,
  query,
});

export default workStationsReducer;
