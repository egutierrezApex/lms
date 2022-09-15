import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import homeReducer from './home/home.reducer';
import layoutReducer from './layout/layouts.reducer';
import { IPersistConf, IRootReducerType } from 'types/AppInterfaces';
import workStationsReducer from './workStations/reducer/index';
import zonesReducer from './zones/reducers';
import employeesReducer from './employees/reducers';
import buildingReducer from './buildings/reducers';
import floorReducer from './floors/reducers';
import groupsReducer from './groups/reducer';

const persistConfig: IPersistConf = {
	key: 'root',
	storage: sessionStorage,
	whitelist: ['employees']
};

const rootReducer: IRootReducerType = combineReducers({
	home: homeReducer,
	layout: layoutReducer,
	workStations: workStationsReducer,
	zones: zonesReducer,
	employees: employeesReducer,
	buildings: buildingReducer,
	floors: floorReducer,
	groups: groupsReducer
});

export default persistReducer(persistConfig, rootReducer);
