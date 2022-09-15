import { bindActionCreators, Dispatch } from 'redux';
import actionsZones from '../../redux/zones/actions';

const defaultDispatcher = (dispatch: Dispatch) => {
  const { get_zones } = actionsZones;
  return bindActionCreators({
    get_zones,
  }, dispatch)
};

const individualDispatcher = (dispatch: Dispatch) => {
  const { get_zone } = actionsZones;
  return bindActionCreators({
    get_zone,
  }, dispatch)
}

export default {
  defaultDispatcher,
  individualDispatcher,
}