import { IRootReducer } from '../../types/AppInterfaces';

const defaultProps = (state: IRootReducer) => ({
  isLoading: state.zones.isLoading,
  zonesByPage: state.zones.zonesByPage,
  // selectedZone: state.zones.selectedZone,
})

const individualProps = (state: IRootReducer) => ({
  currentZone: state.zones.currentZone,
  isLoading: state.zones.isLoading,
})

export default {
  defaultProps,
  individualProps,
}