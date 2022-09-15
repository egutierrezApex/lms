import { ThunkAction, Action } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, Store, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './root-epics'
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist';
import { IAppState } from 'types/AppInterfaces';

const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware];

const store = createStore(
	rootReducer,
	compose(applyMiddleware(...middlewares))
) as Store<IAppState>;

const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

